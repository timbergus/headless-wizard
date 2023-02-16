import { useState } from 'react'
import { VscInfo } from 'react-icons/vsc'
import { Tooltip } from 'react-tooltip'

import { HeadlessWizard } from './lib'
import { PositionType } from './lib/components/Panel'

import { Angle } from './components/Angle'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Cards } from './components/Cards'
import { ClosingCard } from './components/ClosingCard'
import { Position } from './components/Position'
import { XDisplacement } from './components/XDisplacement'
import { XRays } from './components/XRays'
import { YDisplacement } from './components/YDisplacement'

export const App = () => {
  const [step, setStep] = useState(0)
  const [cards, setCards] = useState(6)
  const [angle, setAngle] = useState(-30)
  const [position, setPosition] = useState<PositionType>('left')
  const [xDisplacement, setXDisplacement] = useState(105)
  const [yDisplacement, setYDisplacement] = useState(120)
  const [isTransparent, setIsTransparent] = useState(false)

  const elements = []

  // Index need to start in 1 and the initial order backward.

  for (let i = cards - 1; i >= 0; i--) elements.push(i)

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-slate-200 p-48 dark:bg-slate-800">
      <div
        className={`absolute flex ${
          position === 'top' ? 'bottom-0 flex-col-reverse' : 'top-0 flex-col'
        } left-0 z-50 h-20 w-full bg-slate-200 dark:bg-slate-800`}
      >
        <div className="flex h-full items-center gap-8 px-10">
          <XRays
            label="X Rays"
            disclaimer="Show how it works"
            checked={isTransparent}
            onChange={(checked) => setIsTransparent(checked)}
          />
          <Position
            options={['top', 'right', 'bottom', 'left']}
            value={position}
            onChange={(event) =>
              setPosition(event.target.value as PositionType)
            }
          />
          <Cards
            options={[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            value={cards}
            onChange={(event) => setCards(Number(event.target.value))}
          />
          <Angle angle={angle} setAngle={setAngle} />
          {['top', 'bottom'].includes(position) ? (
            <YDisplacement
              yDisplacement={yDisplacement}
              setYDisplacement={setYDisplacement}
            />
          ) : (
            <XDisplacement
              xDisplacement={xDisplacement}
              setXDisplacement={setXDisplacement}
            />
          )}
          <VscInfo
            id="summary"
            className="h-8 w-8 text-slate-800 dark:text-slate-200"
          />
          <Tooltip anchorId="summary" place="bottom" className="summary">
            <div>Angle: {angle}º</div>
            <div>Position: {position}</div>
            <div>X Displacement: {xDisplacement}%</div>
            <div>Y Displacement: {yDisplacement}%</div>
          </Tooltip>
        </div>
        <div className="w-full border-b border-b-slate-400" />
      </div>
      <HeadlessWizard
        step={step}
        angle={angle}
        position={position}
        xDisplacement={xDisplacement}
        yDisplacement={yDisplacement}
        closingComponent={<ClosingCard onClick={() => setStep(0)} />}
      >
        {elements.map((index) => (
          <Card key={index} index={index} isTransparent={isTransparent}>
            <div
              data-testid={`card-button-${index}`}
              className="grid place-items-center gap-y-8"
            >
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
