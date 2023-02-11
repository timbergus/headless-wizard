import { HTMLProps } from 'react'

export const Button = ({ onClick, children }: HTMLProps<HTMLButtonElement>) => (
  <button
    className="px-20 py-4 border border-gray-500 bg-gray-200 rounded-2xl"
    onClick={onClick}
  >
    {children}
  </button>
)
