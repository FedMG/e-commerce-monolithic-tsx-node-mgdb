import { BadgeUpTo, OnProducts, TextContainer } from './CoverFeatures.home'
import type { Cover } from '@/models'

export type CoverLayout = {
  props: Pick<Cover, 'category' | 'brand' | 'discount'>
  highlight: string
}

export const FirstCover = ({ props: { category, brand, discount }, highlight }: CoverLayout) => (
  <>
    <TextContainer className='absolute right-[0%] bottom-[8%] sm:right-[2%] lg:right-[6%] lg:bottom-[8%]'>
      <span>Special Spring on</span>
      <span className={highlight}>{category}</span>
    </TextContainer>

    <TextContainer className='absolute left-[1%] sm:left-[3%] bottom-[8%] text-justify'>
      <BadgeUpTo className={highlight}>{discount}% OFF</BadgeUpTo>
      <OnProducts className={`text-md sm:text-2xl md:text-4xl ${highlight}`}>{brand}</OnProducts>
    </TextContainer>
  </>
)

export const SecondCover = ({ props: { category, brand, discount }, highlight }: CoverLayout) => (
  <>
    <TextContainer className='absolute left-[3%] top-[1%] md:left-[5%] md:top-[5%]'>
      <span>Special offers on</span>
      <span className={highlight}>{category}</span>
    </TextContainer>

    <TextContainer className='absolute right-[3%] top-[0%] md:right-[5%] md:top-[2%] lg:top-[5%] lg:right-[10%] text-justify gap-y-[1.2px] md:gap-y-2'>
      <span className='flex flex-col gap-y-[1.2px] md:gap-y-2 lg:gap-y-3'>
        <BadgeUpTo className={highlight}>{discount}% OFF</BadgeUpTo>
        <BadgeUpTo className={highlight}>6 Installments</BadgeUpTo>
      </span>

      <OnProducts className={`text-md sm:text-lg md:text-4xl ${highlight}`}>{brand}</OnProducts>
    </TextContainer>
  </>
)

export const ThirdCover = ({ props: { category, brand, discount }, highlight }: CoverLayout) => (
  <>
    <TextContainer className='absolute left-[3%] md:left-[4%] lg:left-[5%] bottom-[4%]'>
      <span>The latest in</span>
      <span>
        <span className={highlight}>{brand}</span> sportswear
      </span>
    </TextContainer>

    <TextContainer className='absolute right-[0%] lg:right-[1%] bottom-[4%] text-justify'>
      <BadgeUpTo className={`${highlight} bg-gray-50 max-w-fit max-h-fit`}>
        {discount}% OFF
      </BadgeUpTo>
      <span>
        on
        <span className={highlight}> {category}</span>
      </span>
    </TextContainer>
  </>
)

export const FourthCover = ({ props: { category, brand, discount }, highlight }: CoverLayout) => (
  <>
    <TextContainer className='absolute left-[1%] top-[0%] md:top-[2%] lg:top-[4%]'>
      <span>The best on</span>
      <span className={highlight}>{category}</span>
      <OnProducts className={highlight}>{brand}</OnProducts>
    </TextContainer>

    <TextContainer className='absolute right-[0%] bottom-[4%] text-justify'>
      <span className='flex flex-col gap-y-[1.2px] md:gap-y-2 lg:gap-y-3'>
        <BadgeUpTo className={highlight}>{discount}% OFF</BadgeUpTo>
        <BadgeUpTo className={highlight}>3 Installments</BadgeUpTo>
      </span>
      <span>on yellow products</span>
    </TextContainer>
  </>
)

export const FifthCover = ({ props: { category, brand, discount }, highlight }: CoverLayout) => (
  <>
    <TextContainer className='absolute left-[3%] bottom-[8%]'>
      <span>Featured on</span>
      <span className={highlight}>{category}</span>
    </TextContainer>

    <TextContainer className='absolute right-[3%] bottom-[8%]'>
      <BadgeUpTo className={highlight}>{discount}% OFF</BadgeUpTo>
      <OnProducts className={highlight}>{brand}</OnProducts>
    </TextContainer>
  </>
)
