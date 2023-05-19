import type { ItemListEventType, ItemListType, ListMainProps, NextListType } from 'additional'

export const List: NextListType<ListMainProps> = ({ children, className, id, role, ariaHidden }) => <ul id={id} role={role} aria-hidden={ariaHidden} className={className}>{children}</ul>

const ListItem: ItemListType = ({ className, children }) => <li className={className}>{children}</li>
ListItem.displayName = 'List.Item'
List.Item = ListItem

const ListItemEvent: ItemListEventType = ({ className, children, onClick }) => <li className={className} onClick={onClick}>{children}</li>
ListItemEvent.displayName = 'List.ItemEvent'
List.ItemEvent = ListItemEvent
