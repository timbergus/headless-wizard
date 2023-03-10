import { Dispatch, SetStateAction } from 'react'

type XDisplacementProps = {
  xDisplacement: number
  setXDisplacement: Dispatch<SetStateAction<number>>
}

export const XDisplacement = ({
  xDisplacement,
  setXDisplacement,
}: XDisplacementProps) => (
  <label htmlFor="xDisplacement" className="flex items-center gap-4">
    <span className="text-slate-800 dark:text-slate-200">X Displacement</span>
    <input
      type="range"
      name="xDisplacement"
      id="xDisplacement"
      min={105}
      max={115}
      className="w-44"
      value={xDisplacement}
      onChange={(event) => setXDisplacement(Number(event.target.value))}
    />
  </label>
)
