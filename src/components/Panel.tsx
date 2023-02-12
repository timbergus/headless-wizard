import classNames from 'classnames'
import { ReactNode } from 'react'

const MAX_ANGLE = 30

type CardProps = {
  step: number
  index: number
  total: number
  children: ReactNode
}

export const Panel = ({ step, index, total, children }: CardProps) => {
  const realIndex = total - 1 - index
  const middle = Math.ceil(total / 2) + 1

  const middleCard = middle % 2 !== 0 && realIndex === middle
  const sign = middleCard ? 0 : realIndex < middle ? 1 : -1

  console.log('REAL INDEX:', realIndex)
  console.log('SIGN:', sign)

  return (
    <div
      className={classNames(
        'absolute w-full h-full transition-all duration-500',
        {
          'scale-50': step < realIndex,
          '-translate-x-full': step > realIndex,
        }
      )}
      {...(step > realIndex && {
        style: {
          transform:
            step > realIndex
              ? `translate(-105%, ${sign * (realIndex + 1) * 10}px) rotateZ(${
                  sign * (realIndex + 1) * 5
                }deg)`
              : '',
          zIndex: realIndex + 1,
        },
      })}
    >
      {children}
    </div>
  )
}
