import { ReactElement, ReactNode } from 'react'
import { Panel } from './Panel'
import { Button } from '../Button'

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
  <div className="relative w-full h-full">
    {closing ? <div className="absolute w-full h-full">{closing}</div> : null}
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
