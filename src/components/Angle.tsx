import React, { Dispatch } from 'react'

type AngleProps = {
  angle: number
  setAngle: Dispatch<React.SetStateAction<number>>
}

export const Angle = ({ angle, setAngle }: AngleProps) => (
  <label htmlFor="angle" className="flex justify-center">
    <div className="w-24 dark:text-slate-200">Angle ({angle}º)</div>
    <input
      type="range"
      name="angle"
      id="angle"
      min={-45}
      max={45}
      className="w-96"
      value={angle}
      onChange={(event) => setAngle(Number(event.target.value))}
    />
  </label>
)
