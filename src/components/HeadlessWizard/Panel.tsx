import classNames from 'classnames'
import { ReactNode } from 'react'

import './panel.css'

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
  const horizontalCorrection = maxAngle / 2
  const angle = (maxAngle / (total - 1)) * index - horizontalCorrection
  return (
    <div
      className={classNames('panel', {
        'panel--small': index > step,
      })}
      {...(index < step && {
        style: {
          transform: `translateX(-105%) rotateZ(${angle}deg)`,
          zIndex: index,
        },
      })}
    >
      {children}
    </div>
  )
}
