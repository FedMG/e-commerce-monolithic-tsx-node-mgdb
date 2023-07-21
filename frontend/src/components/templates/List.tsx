import type { AriaAttributes, AriaRole, FC, ReactElement, ReactNode } from 'react'
import type { AddDisplayName, DropUndefined } from 'utilities'

type ASElement = keyof JSX.IntrinsicElements

interface ListProps {
  children: ReactNode
  className: string
  role: AriaRole
}

interface ListMainProps extends ListProps {
  ariaHidden: DropUndefined<AriaAttributes, 'aria-hidden'>
  as?: ASElement
  id: string
}

interface ListItemEventProps extends ListProps {
  onClick: () => void
}

interface ListItemProps extends ListProps {
  ariaCurrent: DropUndefined<AriaAttributes, 'aria-current'>
}

type ItemListType = AddDisplayName<({ ...Params }: ListItemProps) => ReactElement>
type ItemListEventType = AddDisplayName<({ ...Params }: ListItemEventProps) => ReactElement>

interface NextListType<T> extends FC<T> {
  Item: ItemListType
  ItemEvent: ItemListEventType
}

export const List: NextListType<ListMainProps> = ({
  children,
  as: Element = 'ol',
  className,
  id,
  role,
  ariaHidden
}) => (
  <Element id={id} role={role} aria-hidden={ariaHidden} className={className}>
    {children}
  </Element>
)

const ListItem: ItemListType = ({ children, className, role, ariaCurrent }) => (
  <li className={className} role={role} aria-current={ariaCurrent}>
    {children}
  </li>
)
ListItem.displayName = 'List.Item'
List.Item = ListItem

const ListItemEvent: ItemListEventType = ({ children, className, role, onClick }) => (
  <li className={className} role={role} onClick={onClick}>
    {children}
  </li>
)
ListItemEvent.displayName = 'List.ItemEvent'
List.ItemEvent = ListItemEvent
