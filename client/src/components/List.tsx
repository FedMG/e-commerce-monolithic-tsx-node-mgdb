import type { ItemListEventType, ItemListType, ListMainProps, NextListType } from 'additional'

export const List: NextListType<ListMainProps> = ({ children, as: Element = 'ol', className, id, role, ariaHidden }) => <Element id={id} role={role} aria-hidden={ariaHidden} className={className}>{children}</Element>

const ListItem: ItemListType = ({ children, className, role, ariaCurrent }) => <li className={className} role={role} aria-current={ariaCurrent}>{children}</li>
ListItem.displayName = 'List.Item'
List.Item = ListItem

const ListItemEvent: ItemListEventType = ({ children, className, role, onClick }) => <li className={className} role={role} onClick={onClick}>{children}</li>
ListItemEvent.displayName = 'List.ItemEvent'
List.ItemEvent = ListItemEvent
