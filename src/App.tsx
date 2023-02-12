import { useState } from 'react'
import classNames from 'classnames'
import { Panel } from './components/Panel'
import { Button } from './components/Button'
import { Card } from './components/Card'

export const App = () => {
  const [step, setStep] = useState(0)

  return (
    <div className="w-screen h-screen flex items-center justify-center p-48">
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full flex items-center justify-center">
          <Button onClick={() => setStep(0)}>RESET</Button>
        </div>
        <Panel
          step={step}
          index={3}
          className={classNames({
            '-translate-y-16 -rotate-6': step >= 4,
          })}
        >
          <Card className="bg-indigo-200">
            <Button onClick={() => setStep(4)}>NEXT</Button>
          </Card>
        </Panel>
        <Panel
          step={step}
          index={2}
          className={classNames({
            '-translate-y-5 -rotate-2': step >= 3,
          })}
        >
          <Card className="bg-cyan-200">
            <Button onClick={() => setStep(3)}>NEXT</Button>
          </Card>
        </Panel>
        <Panel
          step={step}
          index={1}
          className={classNames({
            'translate-y-5 rotate-2': step >= 2,
          })}
        >
          <Card className="bg-orange-200">
            <Button onClick={() => setStep(2)}>NEXT</Button>
          </Card>
        </Panel>
        <Panel
          step={step}
          index={0}
          className={classNames('', {
            'translate-y-16 rotate-6': step >= 1,
          })}
        >
          <Card className="bg-green-200">
            <Button onClick={() => setStep(1)}>NEXT</Button>
          </Card>
        </Panel>
      </div>
    </div>
  )
}
