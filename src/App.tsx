import { useState } from 'react'
import classNames from 'classnames'

export const App = () => {
  const [step, setStep] = useState(0)

  return (
    <div className="w-screen h-screen flex items-center justify-center p-48">
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full flex items-center justify-center">
          <button onClick={() => setStep(0)}>Reset</button>
        </div>
        <div
          className={classNames(
            'absolute w-full h-full bg-indigo-200 rounded-lg flex items-center justify-center transition-all duration-500',
            {
              'scale-50': step < 3,
              '-translate-x-full -translate-y-16 -rotate-6 z-40': step >= 4,
            }
          )}
        >
          <button onClick={() => setStep(4)}>Next</button>
        </div>
        <div
          className={classNames(
            'absolute w-full h-full bg-cyan-200 rounded-lg flex items-center justify-center transition-all duration-500',
            {
              'scale-50': step < 2,
              '-translate-x-full -translate-y-5 -rotate-2 z-30': step >= 3,
            }
          )}
        >
          <button onClick={() => setStep(3)}>Next</button>
        </div>
        <div
          className={classNames(
            'absolute w-full h-full bg-orange-200 rounded-lg flex items-center justify-center transition-all duration-500',
            {
              'scale-50': step < 1,
              '-translate-x-full translate-y-5 rotate-2 z-20': step >= 2,
            }
          )}
        >
          <button onClick={() => setStep(2)}>Next</button>
        </div>
        <div
          className={classNames(
            'absolute w-full h-full bg-green-200 rounded-lg flex items-center justify-center transition-all duration-500',
            {
              'scale-0': step < 0,
              '-translate-x-full translate-y-16 rotate-6 z-10': step >= 1,
            }
          )}
        >
          <button onClick={() => setStep(1)}>Next</button>
        </div>
      </div>
    </div>
  )
}
