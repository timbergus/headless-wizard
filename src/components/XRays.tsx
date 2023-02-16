import { Switch } from '@headlessui/react'
import classNames from 'classnames'

type XRaysProps = {
  checked?: boolean
  onChange: (checked: boolean) => void
  label: string
  disclaimer: string
}

export const XRays = ({ label, disclaimer, checked, onChange }: XRaysProps) => (
  <Switch.Group as="div" className="flex items-center gap-4">
    <Switch
      checked={checked}
      onChange={onChange}
      className={classNames(
        checked ? 'bg-indigo-600' : 'bg-gray-400 dark:bg-gray-200',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
      )}
    >
      <span
        aria-hidden="true"
        className={classNames(
          checked ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-gray-200 dark:bg-gray-400 shadow ring-0 transition duration-200 ease-in-out'
        )}
      />
    </Switch>
    <Switch.Label as="span" className="flex items-center gap-2">
      <span className="text-slate-800 dark:text-slate-200">{label}</span>
      <span className="text-sm text-slate-500 dark:text-slate-400">
        ({disclaimer})
      </span>
    </Switch.Label>
  </Switch.Group>
)
