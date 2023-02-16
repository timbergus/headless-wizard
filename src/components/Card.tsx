import classNames from 'classnames'
import { ReactNode } from 'react'

import { BACKGROUND_COLOR } from '../constants/backgroundColor'
import { BORDER_COLOR } from '../constants/borderColor'

type CardType = {
  index: number
  isTransparent?: boolean
  children: ReactNode
}

export const Card = ({ index, isTransparent, children }: CardType) => (
  <div
    className={classNames(
      `w-full h-full rounded-lg flex items-center justify-center border-4 ${
        BORDER_COLOR[index]
      } ${isTransparent ? 'bg-transparent' : BACKGROUND_COLOR[index]}`
    )}
  >
    {children}
  </div>
)
