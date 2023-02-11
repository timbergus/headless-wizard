import { useState } from 'react'
import classNames from 'classnames'
import { Card } from './components/Card'
import { Button } from './components/Button'

export const App = () => {
  const [step, setStep] = useState(0)

  return (
    <div className="w-screen h-screen flex items-center justify-center p-48">
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full flex items-center justify-center">
          <Button onClick={() => setStep(0)}>RESET</Button>
        </div>
        <Card
          className={classNames('bg-indigo-200', {
            'scale-50': step < 3,
            '-translate-x-full -translate-y-16 -rotate-6': step >= 4,
          })}
        >
          <Button onClick={() => setStep(4)}>NEXT</Button>
        </Card>
        <Card
          className={classNames('bg-cyan-200', {
            'scale-50': step < 2,
            '-translate-x-full -translate-y-5 -rotate-2': step >= 3,
          })}
        >
          <Button onClick={() => setStep(3)}>NEXT</Button>
        </Card>
        <Card
          className={classNames('bg-orange-200', {
            'scale-50': step < 1,
            '-translate-x-full translate-y-5 rotate-2': step >= 2,
          })}
        >
          <Button onClick={() => setStep(2)}>NEXT</Button>
        </Card>
        <Card
          className={classNames('bg-green-200', {
            '-translate-x-full translate-y-16 rotate-6': step >= 1,
          })}
        >
          <Button onClick={() => setStep(1)}>NEXT</Button>
        </Card>
      </div>
    </div>
  )
}
