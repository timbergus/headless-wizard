import { ChangeEvent } from 'react'

type SelectProps = {
  options: number[]
  value: number
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const Select = ({ options, value, onChange }: SelectProps) => (
  <div className="flex gap-2 items-center">
    <label
      htmlFor="location"
      className="block text-sm font-medium text-gray-700"
    >
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
