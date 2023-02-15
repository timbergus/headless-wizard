import { useState } from 'react'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { XRays } from './components/XRays'
import { Select } from './components/Select'
import { HeadlessWizard } from './lib'
import { ClosingCard } from './components/ClosingCard'
import { Angle } from './components/Angle'
import { PositionType } from './lib/components/Panel'

export const App = () => {
  const [step, setStep] = useState(0)
  const [cards, setCards] = useState(6)
  const [angle, setAngle] = useState(-30)
  const [position, setPosition] = useState<PositionType>('left')
  const [isTransparent, setIsTransparent] = useState(false)

  const elements = []

  // Index need to start in 1 and the initial order backward.

  for (let i = cards - 1; i >= 0; i--) elements.push(i)

  return (
    <div className="w-screen h-screen flex items-center justify-center p-48 bg-slate-200 dark:bg-slate-800">
      <div className="absolute top-0 left-0 w-full h-20 z-50 bg-slate-200 dark:bg-slate-800">
        <div className="flex items-center px-10 gap-8 h-full">
          <XRays
            label="X Rays"
            disclaimer="Show how it works"
            checked={isTransparent}
            onChange={(checked) => setIsTransparent(checked)}
          />
          <Select
            options={[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            value={cards}
            onChange={(event) => setCards(Number(event.target.value))}
          />
          <Angle angle={angle} setAngle={setAngle} />
          <Select
            options={['top', 'right', 'bottom', 'left']}
            value={position}
            onChange={(event) =>
              setPosition(event.target.value as PositionType)
            }
          />
        </div>
        <div className="w-full border-b border-b-slate-400" />
      </div>
      <HeadlessWizard
        step={step}
        angle={angle}
        position={position}
        closingComponent={<ClosingCard onClick={() => setStep(0)} />}
      >
        {elements.map((index) => (
          <Card key={index} index={index} isTransparent={isTransparent}>
            <div className="grid gap-y-8 place-items-center">
              <span
                className={`text-3xl ${
                  isTransparent ? 'text-slate-200' : 'text-slate-800'
                }`}
              >
                {index + 1}
              </span>
              <Button onClick={() => setStep(index + 1)}>NEXT</Button>
            </div>
          </Card>
        ))}
      </HeadlessWizard>
    </div>
  )
}
