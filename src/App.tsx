import { useState } from 'react'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { XRays } from './components/XRays'
import { Select } from './components/Select'
import { HeadlessWizard } from './components/HeadlessWizard/HeadlessWizard'

export const App = () => {
  const [step, setStep] = useState(0)
  const [cards, setCards] = useState(6)
  const [angle, setAngle] = useState(-30)
  const [isTransparent, setIsTransparent] = useState(false)

  const elements = []

  // Index need to start in 1 and the initial order backward.

  for (let i = cards; i > 0; i--) {
    elements.push(i)
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center p-48">
      <div className="absolute top-0 left-0 ml-10 p-10 flex items-center gap-8">
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
        <label htmlFor="angle" className="flex justify-center">
          <div className="w-24">Angle ({angle}º)</div>
          <input
            type="range"
            name="angle"
            id="angle"
            min={-45}
            max={45}
            className="w-96"
            value={angle}
            onChange={(event) => setAngle(Number(event.target.value))}
          />
        </label>
      </div>
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="grid justify-items-center gap-y-4 pt-4 select-none">
            <span className="text-xl text-slate-700">
              Congrats! You are done 🙂
            </span>
            <div>
              <Button onClick={() => setStep(0)}>RESET</Button>
            </div>
          </div>
        </div>
        <HeadlessWizard step={step} angle={angle}>
          {elements.map((element, index) => (
            <Card key={index} index={index} isTransparent={isTransparent}>
              <Button onClick={() => setStep(element)}>NEXT</Button>
            </Card>
          ))}
        </HeadlessWizard>
      </div>
    </div>
  )
}
