import classNames from 'classnames'
import { ReactNode } from 'react'

type CardType = {
  className?: string
  children: ReactNode
}

export const Card = ({ className, children }: CardType) => {
  return (
    <div
      className={classNames(
        'w-full h-full rounded-lg flex items-center justify-center',
        className
      )}
    >
      {children}
    </div>
  )
}
