import { ReactElement, ReactNode } from 'react'
import { Panel } from './Panel'

import './headlessWizard.css'

type HeadlessWizardProps = {
  step: number
  angle?: number
  closing?: ReactNode
  children: ReactElement[]
}

export const HeadlessWizard = ({
  step,
  angle = 0,
  closing,
  children,
}: HeadlessWizardProps) => (
  <div className="headless-wizard">
    {closing ? <div className="closing">{closing}</div> : null}
    {children.map((card) => (
      <Panel
        key={card.props.index}
        step={step}
        index={card.props.index}
        total={children.length}
        maxAngle={angle}
      >
        {card}
      </Panel>
    ))}
  </div>
)
