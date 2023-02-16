import React, { Dispatch } from 'react'

type YDisplacementProps = {
  yDisplacement: number
  setYDisplacement: Dispatch<React.SetStateAction<number>>
}

export const YDisplacement = ({
  yDisplacement,
  setYDisplacement,
}: YDisplacementProps) => (
  <label htmlFor="yDisplacement" className="flex items-center gap-4">
    <span className="text-slate-800 dark:text-slate-200">Y Displacement</span>
    <input
      type="range"
      name="yDisplacement"
      id="yDisplacement"
      min={120}
      max={130}
      className="w-44"
      value={yDisplacement}
      onChange={(event) => setYDisplacement(Number(event.target.value))}
    />
  </label>
)
