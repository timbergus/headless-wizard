import { HTMLProps } from 'react'

export const Button = ({ onClick, children }: HTMLProps<HTMLButtonElement>) => (
  <button
    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    onClick={onClick}
  >
    {children}
  </button>
)
