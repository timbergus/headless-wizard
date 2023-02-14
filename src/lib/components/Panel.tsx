type PanelStyleParams = {
  index: number
  step: number
  angle: number
}

const panelStyle = ({
  index,
  step,
  angle,
}: PanelStyleParams): React.CSSProperties => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '500ms',
  ...(index > step && { transform: 'scale(0.5, 0.5)' }),
  ...(index < step && {
    transform: `translateX(-105%) rotateZ(${angle}deg)`,
    zIndex: index,
  }),
})

type CardProps = {
  step: number
  index: number
  total: number
  maxAngle: number
  children: React.ReactNode
}

export const Panel = ({
  step,
  index,
  total,
  maxAngle,
  children,
}: CardProps) => (
  <div
    style={panelStyle({
      step,
      angle: (maxAngle / (total - 1)) * index - maxAngle / 2,
      index,
    })}
  >
    {children}
  </div>
)
