export type PositionType = 'top' | 'right' | 'bottom' | 'left'

type PanelStyleParams = {
  index: number
  step: number
  angle: number
  position: PositionType
  xDisplacement: number
  yDisplacement: number
}

export const expandedStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
}

const getDisplacementAxis = (position: PositionType) =>
  ['top', 'bottom'].includes(position) ? 'Y' : 'X'

const getDisplacementDirection = (position: PositionType) =>
  ['left', 'top'].includes(position) ? '-' : ''

const getDisplacementAmount = (
  position: PositionType,
  xDisplacement: number,
  yDisplacement: number
) => `${['left', 'right'].includes(position) ? xDisplacement : yDisplacement}%`

const getHorizontalCenter = (position: PositionType) => `${position} center`

const getVerticalCenter = (position: PositionType) =>
  `center ${position === 'top' ? '-500%' : '500%'}`

const panelStyle = ({
  index,
  step,
  angle,
  position,
  xDisplacement,
  yDisplacement,
}: PanelStyleParams): React.CSSProperties => ({
  position: 'absolute',
  ...expandedStyle,
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '500ms',
  ...(index > step && { transform: 'scale(0.5, 0.5)' }),
  ...(index < step && {
    transform: `translate${getDisplacementAxis(
      position
    )}(${getDisplacementDirection(position)}${getDisplacementAmount(
      position,
      xDisplacement,
      yDisplacement
    )}) rotateZ(${angle}deg)`,
    transformOrigin: ['left', 'right'].includes(position)
      ? getHorizontalCenter(position)
      : getVerticalCenter(position),
    zIndex: index,
  }),
})

type CardProps = {
  index: number
  step: number
  angle: number
  position: PositionType
  xDisplacement: number
  yDisplacement: number
  total: number
  children: React.ReactNode
}

export const Panel = ({
  index,
  step,
  total,
  angle,
  position,
  xDisplacement,
  yDisplacement,
  children,
}: CardProps) => (
  <div
    style={panelStyle({
      step,
      angle: (angle / (total - 1)) * index - angle / 2,
      position,
      xDisplacement,
      yDisplacement,
      index,
    })}
  >
    {children}
  </div>
)
