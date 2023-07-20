export interface BaseComponentProps {
  children: React.ReactNode
  className: string
}

export interface CallbackEvents {
  onClick: () => void
  onMouseDown: () => void
  onMouseUpLeave: () => void
}