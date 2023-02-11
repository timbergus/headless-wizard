import classNames from 'classnames'
import React, { ReactNode } from 'react'

type CardProps = {
  className: string
  children: ReactNode
}

export const Card = ({ className, children }: CardProps) => (
  <div
    className={classNames(
      'absolute w-full h-full rounded-lg flex items-center justify-center transition-all duration-500',
      className
    )}
  >
    {children}
  </div>
)
