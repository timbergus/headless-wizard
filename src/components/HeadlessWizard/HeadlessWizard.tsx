import { ReactElement } from 'react'
import { Panel } from './Panel'

type HeadlessWizardProps = {
  step: number
  angle?: number
  children: ReactElement[]
}

export const HeadlessWizard = ({
  step,
  angle = 0,
  children,
}: HeadlessWizardProps) => (
  <div>
    {children.map((card, index) => (
      <Panel
        key={index}
        step={step}
        index={index}
        total={children.length ?? 0}
        maxAngle={angle}
      >
        {card}
      </Panel>
    ))}
  </div>
)
