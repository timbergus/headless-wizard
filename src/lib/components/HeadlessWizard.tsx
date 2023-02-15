import { Panel, PositionType, expandedStyle } from './Panel'

const headlessWizardStyle: React.CSSProperties = {
  position: 'relative',
  ...expandedStyle,
}

const closingComponentStyle: React.CSSProperties = {
  position: 'absolute',
  ...expandedStyle,
}

type HeadlessWizardProps = {
  step: number
  angle?: number
  position?: PositionType
  closingComponent?: React.ReactNode
  children: React.ReactElement[]
}

export const HeadlessWizard = ({
  step,
  angle = 0,
  position = 'left',
  closingComponent,
  children,
}: HeadlessWizardProps) => (
  <div style={headlessWizardStyle}>
    {closingComponent ? (
      <div style={closingComponentStyle}>{closingComponent}</div>
    ) : null}
    {children.map((card) => (
      <Panel
        key={card.props.index}
        step={step}
        index={card.props.index}
        total={children.length}
        angle={angle}
        position={position}
      >
        {card}
      </Panel>
    ))}
  </div>
)
