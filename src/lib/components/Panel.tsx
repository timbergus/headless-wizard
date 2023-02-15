export type PositionType = 'top' | 'right' | 'bottom' | 'left'

type PanelStyleParams = {
  index: number
  step: number
  angle: number
  position: PositionType
}

export const expandedStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
}

const panelStyle = ({
  index,
  step,
  angle,
  position,
}: PanelStyleParams): React.CSSProperties => ({
  position: 'absolute',
  ...expandedStyle,
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '500ms',
  ...(index > step && { transform: 'scale(0.5, 0.5)' }),
  ...(index < step && {
    transform: `translate${['top', 'bottom'].includes(position) ? 'Y' : 'X'}(${
      ['left', 'top'].includes(position) ? '-' : ''
    }105%) rotateZ(${angle}deg)`,
    transformOrigin: `${position} center`,
    zIndex: index,
  }),
})

type CardProps = {
  index: number
  step: number
  angle: number
  position: PositionType
  total: number
  children: React.ReactNode
}

export const Panel = ({
  index,
  step,
  total,
  angle,
  position,
  children,
}: CardProps) => (
  <div
    style={panelStyle({
      step,
      angle: (angle / (total - 1)) * index - angle / 2,
      position,
      index,
    })}
  >
    {children}
  </div>
)
