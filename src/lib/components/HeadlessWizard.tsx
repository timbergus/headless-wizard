import { Panel } from './Panel'

const headlessWizardStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100%',
}

const closingStyle: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%',
}

type HeadlessWizardProps = {
  step: number
  angle?: number
  closing?: React.ReactNode
  children: React.ReactElement[]
}

export const HeadlessWizard = ({
  step,
  angle = 0,
  closing,
  children,
}: HeadlessWizardProps) => (
  <div style={headlessWizardStyle}>
    {closing ? <div style={closingStyle}>{closing}</div> : null}
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
