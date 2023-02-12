import { useState } from 'react'
import classNames from 'classnames'
import { Panel } from './components/Panel'
import { Button } from './components/Button'
import { Card } from './components/Card'

export const App = () => {
  const [step, setStep] = useState(0)

  // Index need to start in 1 and the initial order backward.

  const cards = [
    <Card className="bg-slate-200">
      <Button onClick={() => setStep(5)}>NEXT</Button>
    </Card>,
    <Card className="bg-indigo-200">
      <Button onClick={() => setStep(4)}>NEXT</Button>
    </Card>,
    <Card className="bg-cyan-200">
      <Button onClick={() => setStep(3)}>NEXT</Button>
    </Card>,
    <Card className="bg-orange-200">
      <Button onClick={() => setStep(2)}>NEXT</Button>
    </Card>,
    <Card className="bg-green-200">
      <Button onClick={() => setStep(1)}>NEXT</Button>
    </Card>,
  ]

  return (
    <div className="w-screen h-screen flex items-center justify-center p-48">
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full flex items-center justify-center">
          <Button onClick={() => setStep(0)}>RESET</Button>
        </div>
        {cards.map((card, index) => (
          <Panel step={step} index={index} total={cards.length}>
            {card}
          </Panel>
        ))}
      </div>
    </div>
  )
}
