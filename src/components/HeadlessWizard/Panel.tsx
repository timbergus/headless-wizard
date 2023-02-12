import classNames from 'classnames'
import { ReactNode } from 'react'

type CardProps = {
  step: number
  index: number
  total: number
  maxAngle: number
  children: ReactNode
}

export const Panel = ({
  step,
  index,
  total,
  maxAngle,
  children,
}: CardProps) => {
  const realIndex = total - 1 - index
  const horizontalCorrection = maxAngle / 2
  const angle = (maxAngle / (total - 1)) * realIndex - horizontalCorrection

  return (
    <div
      className={classNames(
        'absolute w-full h-full transition-all duration-500',
        {
          'scale-50': step < realIndex,
        }
      )}
      {...(step > realIndex && {
        style: {
          transform:
            step > realIndex
              ? `
                  translateX(-105%)
                  rotateZ(${angle}deg)
                `
              : '',
          zIndex: realIndex + 1,
        },
      })}
    >
      {children}
    </div>
  )
}
