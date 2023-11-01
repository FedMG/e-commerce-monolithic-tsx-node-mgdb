import type { ClothingSizes, ProductColors } from "@/models"
import type { AddVoidCallback } from "@/utilities"
import type { KeyMessages } from "./reducers"

export type ItemsNumberWithNull<T extends boolean> = { itemsNumber: T extends true ? number | null : number }

export type ItemsNumber = ItemsNumberWithNull<true>
export type Color = { color: ProductColors | null }
export type Size = { size: ClothingSizes | null }

export type ClearWarningType = { onChange: AddVoidCallback<{ property: KeyMessages }> }
