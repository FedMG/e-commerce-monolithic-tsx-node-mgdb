import type { AriaAttributes, AriaRole, ChangeEvent, FC, FormEvent, ReactElement, ReactNode } from 'react'
import type { AddDisplayName, AddOptional, Callback, DropUndefined, DropUndefinedUnion } from 'utilities'
import { SortBy } from 'enums'

// Refactor for prepare to update architecture app folder

export type ASElement = keyof JSX.IntrinsicElements

// ALIASES
interface AliasComponentsProps {
  children: ReactNode
  className: string
}

// CONSTANTS
export interface ChildrenNode {
  children: ReactNode
}

interface ConstantProps {
  className: string
  name: string
}

interface CallbackEvents {
  onClick: () => void
  onMouseDown: () => void
  onMouseUpLeave: () => void
}

// HEADER
export interface HeaderProps {
  children: ReactNode
  labelledlby: DropUndefined<AriaAttributes, 'aria-labelledby'>
  className: string
}

export interface HeaderLogoProps {
  children: ReactNode
  src: string
  id: string
}

interface Links {
  path: string
  name: string
}

export type HeaderLinks = Links & { dropdown?: Links[] }

export interface HeaderPageProps {
  links: HeaderLinks[]
}

export interface HeaderMenuProps extends HeaderPageProps {
  bgColor: string
}

export interface HeaderMenuListProps extends HeaderPageProps {
  selectOption: () => void
  bgColor?: string
  spacing?: boolean
}

export interface HeaderDropdownProps extends HeaderPageProps {
  selectOption: () => void
  label: string
}

// LINK-BUTTON
export interface LinkButtonProps {
  children: ReactNode
  href: string
  className: string
  ariaLabel: DropUndefined<AriaAttributes, 'aria-label'>
}

export interface LinkEventButtonProps extends LinkButtonProps {
  onClick: () => void
}

// LIST
export interface ListProps {
  children: ReactNode
  className: string
  role: AriaRole
}

export interface ListMainProps extends ListProps {
  ariaHidden: DropUndefined<AriaAttributes, 'aria-hidden'>
  as?: ASElement
  id: string
}

export interface ListItemEventProps extends ListProps {
  onClick: () => void
}

export interface ListItemProps extends ListProps {
  ariaCurrent: DropUndefined<AriaAttributes, 'aria-current'>
}

type ItemListType = AddDisplayName<({ ...Params }: ListItemProps) => ReactElement>
type ItemListEventType = AddDisplayName<({ ...Params }: ListItemEventProps) => ReactElement>

interface NextListType<T> extends FC<T> {
  Item: ItemListType
  ItemEvent: ItemListEventType
}

// BUTTON
export interface ButtonProps {
  children: ReactNode
  onClick: () => void
  className: string
  ariaExpanded: DropUndefined<AriaAttributes, 'aria-expanded'>
}

export interface HamburgerDropdownProps extends ButtonProps {
  ariaControls: DropUndefined<AriaAttributes, 'aria-controls'>
  labelledby: DropUndefined<AriaAttributes, 'aria-labelledby'>
}

export interface DropdownButtonProps extends ButtonProps {
  ariaLabel: DropUndefined<AriaAttributes, 'aria-label'>
  ariaHaspopup: DropUndefined<AriaAttributes, 'aria-haspopup'>
  labelledby: DropUndefined<AriaAttributes, 'aria-labelledby'>
}

// ARTICLE
export type ArticleProps = AliasComponentsProps & {
  labelledby: DropUndefined<AriaAttributes, 'aria-labelledby'>
  describedby: DropUndefined<AriaAttributes, 'aria-describedby'>
}

// SECTION
export type SectionProps = AliasComponentsProps & {
  labelledby: DropUndefined<AriaAttributes, 'aria-labelledby'>
  describedby: DropUndefined<AriaAttributes, 'aria-describedby'>
}

// later refactor types
type AccessibleSectionProps = AliasComponentsProps & {
  labelledby?: AriaAttributes['aria-labelledby']
  role?: AriaRole
  id?: string
}

export type AccessibleSectionType = AddDisplayName<({ ...Params }: AccessibleSectionProps) => ReactElement>

export interface NextSectionType<T> extends FC<T> {
  Accessible: AccessibleSectionType
}

// TEXT
export interface TextProps {
  as?: ASElement
  children: ReactNode
  className: string
}

export type GradientTextProps = Record<'from' | 'via' | 'to', string> & {
  children: ReactNode
}

export interface AccessibleTextProps extends TextProps {
  id: string
}

export interface StateTextTypeProps extends TextProps {
  id: string
  ariaLive: DropUndefinedUnion<AriaAttributes['aria-live']>
}

export type GradientTextType = AddDisplayName<({ from, via, to, children }: GradientTextProps) => JSX.Element>
export type AccessibleTextType = AddDisplayName<({ ...Params }: AccessibleTextProps) => JSX.Element>
export type StateTextType = AddDisplayName<({ ...Params }: StateTextTypeProps) => JSX.Element>

export interface NextTextType<T> extends FC<T> {
  Gradient: GradientTextType
  Accessible: AccessibleTextType
  State: StateTextType
}

// SVG
interface PathProps { d: string }
interface TitleProps { title: string }

export type PathSVGType = AddDisplayName<({ d }: PathProps) => ReactElement>
export type WithSVGEventType = AddDisplayName<({ ...Params }: SVGWithEventProps) => ReactElement>
export type TitleSVGType = AddDisplayName<({ title }: TitleProps) => ReactElement>

export interface NextSVGType<T> extends FC<T> {
  Path: PathSVGType
  WithEvent: WithSVGEventType
  Title: TitleSVGType
}

export interface SVGElementProps {
  children: ReactNode
  role: string
  className: string
  ariaHidden: DropUndefined<AriaAttributes, 'aria-hidden'>
  viewBox: string
  labelledby: string // check
}

export interface SVGWithEventProps {
  children: ReactNode
  onClick: () => void
  className: string
  role: string
  viewBox: string
}

export interface IconsProps {
  className: string
}

export interface HeartIconProps extends IconsProps {
  onClick: () => void
}

export interface HamburgerIconProps extends IconsProps {
  ariaHidden: DropUndefined<AriaAttributes, 'aria-hidden'>
}

// NAVIGATION
export interface NavigationProps {
  children: ReactNode
  ariaLabel: DropUndefined<AriaAttributes, 'aria-label'>
  className: string
}

// FOOTER
interface FooterLinkItem {
  name: string
  path: string
}

export type FooterLinks = FooterLinkItem & { links?: FooterLinkItem[] }

export interface FooterProps {
  links: FooterLinks[]
}

export interface FooterLinkProps {
  children: ReactNode
  href: string
}

// User session page
export interface InputProps {
  value?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  auto: string
  placeholder?: string
  type: 'text' | 'email' | 'password'
}

export interface LabelProps {
  id: 'name' | 'email' | 'password'
  name: string
}

export interface SessionPageProps {
  session: {
    title: string
    linkName: string
    linkText: string
  }
}

export type SessionMode = 'login' | 'register'

export interface FormTypes {
  name?: string
  email: string
  password: string
}

export interface SessionRequestProps {
  form: FormTypes
  mode: SessionMode
}

export interface UserSessionTools {
  form: FormTypes
  setInput: (event: ChangeEvent<HTMLInputElement>) => void
  setSubmit: (event: FormEvent<HTMLFormElement>) => void
}

// About page
export interface CreateBlobProps {
  children: ReactElement
  className: string
}

type StarsRange = 1 | 2 | 3 | 4 | 5

// Product item
export interface Product {
  _id: string
  name: string
  image: {
    src: string
  }
  category: string
  description: {
    introduction: string
    body: string
    conclusion: string
  }
  stock: number
  price: number
  discount?: number
  colors: ProductColors[]
  sizes: ClothingSizes[]
  rating: ProductRatingProps
  brand: string
  createdAt: Date
  __v: number
}

// Category page
export type ProductSortFunction = (a: Product, b: Product) => number
type FilterFunction = ((product: Product) => boolean)

export interface CategoryProps {
  products: Product[]
  discounts: number[]
  brands: string[]
  currentCategory: string
}

export interface CategoryNextFilterProps {
  onChange: (filter: FilterFunction | null) => void
  currentCategory: CategoryProps['currentCategory']
}

export type CategorySearchFilterProps = CategoryNextFilterProps
export type CategoryHeaderProps = ChildrenNode
export interface CategoryHeaderInfoProps {
  productsNumber: number
  currentCategory: CategoryProps['currentCategory']
}

export interface CategoryBrandsFilterProps extends CategoryNextFilterProps {
  brands: string[]
}

export interface CategorySortFilterProps {
  onChange: (sortType: SortBy) => void
  sortBy: SortBy
}

export interface CategoryDiscountsFilterProps extends CategoryNextFilterProps {
  discounts: number[]
}

// Product id page
export interface ProductProps {
  product: Product
}

// Product cards
export interface ProductCardProps {
  element: Pick<Product, 'name' | 'rating' | 'price' | 'discount' | 'image'>
}

export interface DiscountInfoProps {
  children: ReactElement[]
  discount?: number
  price: number
}

export type ProductButtonProps = AddOptional<ChildrenNode> & AddOptional<CallbackEvents> & {
  name?: string
  rounded?: string
}

export type ClothingSizes = 'S' | 'M' | 'L' | 'XL' | 'XXL'
export type ProductColors = 'rose 500' | 'orange 600' | 'yellow 400' | 'lime 400' | 'green 500' | 'cyan 600' | 'violet 600' | 'fuchsia 500' | 'pink 600' | 'neutral 900' | 'stone 600' | 'slate 900' | 'white' | 'black'

export type ProductHeaderProps = AliasComponentsProps & Pick<Product, 'rating'>
export type ProductTitleProps = AliasComponentsProps

export interface ProductRatingProps {
  stars: StarsRange
  votes: number
}

export interface HeartProps {
  className?: AliasComponentsProps['className']
}

export type BreadCrumbProps = Pick<Product, 'category' | 'brand' | 'name'> & Pick<AliasComponentsProps, 'className'>
export type ProductHeaderArticleProps = AliasComponentsProps & {
  labelledby: DropUndefined<AriaAttributes, 'aria-labelledby'>
}
export type ProductImageProps = Pick<Product, 'image'> & Pick<AliasComponentsProps, 'className'> & {
  resolution: number
  alt: string
}
export type ProductParagraphProps = Pick<Product, 'description'> & Pick<AliasComponentsProps, 'className'>

export type ProductFigureProps = AliasComponentsProps
export type ProductDescriptionProps = AliasComponentsProps
export type ProductParagraphLabelProps = AliasComponentsProps
export type ProductBrandLogoProps = AliasComponentsProps
export type ProductInfoProps = Pick<Product, 'name' | 'price' | 'rating' | 'discount'> & AliasComponentsProps
export type ProductFormProps = Pick<Product, 'sizes' | 'colors' | 'stock'> & {
  productId: Product['_id']
  product: Pick<Product, 'name' | 'price' | 'discount' | 'image'>
}

export type ProductSectionProps = Pick<AliasComponentsProps, 'children'> & {
  id: string
}

// api/utils
export type GetEndpointResponse = (extra: string) => Promise<any>

export interface GetSessionRequestsResponse {
  url: string
  requestOptions: {
    method: string
    headers: {
      'Content-Type': string
    }
    body: string
  }
}

export interface APIResponse { token: string, user?: object }

// hooks
export interface useNumberInputResult {
  addItem: Callback<void>
  dropItem: Callback<void>
  reset: Callback<void>
  result: number
}

export interface PaginationReducer {
  state: {
    items: Product[]
    page: number
  }
  action: {
    type: string
    chunk?: Product[]
    items?: Product[]
  }
}

type useSwapEventProps = [boolean, () => void]
