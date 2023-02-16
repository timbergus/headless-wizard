import { ChangeEvent } from 'react'

type CardsProps = {
  options: (number | string)[]
  value: number | string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const Cards = ({ options, value, onChange }: CardsProps) => (
  <div className="flex gap-4 items-center">
    <label htmlFor="location" className="text-slate-800 dark:text-slate-200">
      Cards
    </label>
    <select
      id="cards"
      name="cards"
      className="block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
)
