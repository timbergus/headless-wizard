import classNames from 'classnames'
import React, { ReactNode } from 'react'

type CardProps = {
  step: number
  index: number
  className: string
  children: ReactNode
}

export const Panel = ({ step, index, className, children }: CardProps) => (
  <div
    className={classNames(
      'absolute w-full h-full transition-all duration-500',
      {
        'scale-50': step < index,
        '-translate-x-full': step > index,
      },
      className
    )}
  >
    {children}
  </div>
)
