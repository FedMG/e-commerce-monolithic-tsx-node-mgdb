import {
  CheckIcon,
  CheckSecurityIcon,
  PlusIcon,
  WarningIcon,
  WarningSecurityIcon,
  WatchIcon
} from '@/assets'
import { generateRandomNumber } from '@/utils'

// later replace and implement with the API and refactor it
const vendorRating = ['Subpar', 'Middling', 'Good', 'Great', 'Excellent', 'Outstanding']

const BADGES = Object.freeze({
  check: {
    defaultBadge: <CheckIcon />,
    securityBadge: <CheckSecurityIcon />,
    watchBadge: <WatchIcon />
  },
  warning: {
    defaultBadge: <WarningIcon />,
    securityBadge: <WarningSecurityIcon />,
    watchBadge: <WatchIcon />
  }
})

export const VendorInformation = () => {
  const rating = generateRandomNumber({
    minRange: 0,
    maxRange: vendorRating.length - 1
  })

  const maxRange = rating < 2 ? 1000 : rating < 4 ? 6000 : 10000
  const productSold = generateRandomNumber({ maxRange })

  const { defaultBadge, securityBadge, watchBadge } =
    rating < 2 ? BADGES['warning'] : BADGES['check']

  const { color, vendorScore } =
    rating < 2
      ? { color: 'text-orange-500', vendorScore: generateRandomNumber({ maxRange: 39 }) }
      : rating < 4
      ? {
          color: 'text-green-500',
          vendorScore: generateRandomNumber({ minRange: 40, maxRange: 75 })
        }
      : {
          color: 'text-green-700',
          vendorScore: generateRandomNumber({ minRange: 76, maxRange: 100 })
        }

  return (
    <div className='flex flex-col space-y-2'>
      <table className='border-2 bg-gray-200 rounded-lg border-gray-300 border-collapse'>
        <tbody>
          <tr>
            <td className='border py-2 border-gray-100'>
              <span className='text-gray-700 flex items-center gap-x-2'>
                <span className='flex items-center text-gray-800 text-lg font-bold w-fit max-w-fit'>
                  <PlusIcon className='w-5 h-5' />
                  {productSold}
                </span>{' '}
                products sold
              </span>
            </td>

            <td className='border pl-2 py-2 border-gray-100'>
              <span className='text-gray-700 font-medium flex items-center gap-x-2'>
                Score:
                <span className={`flex items-center gap-x-1 font-bold text-lg ${color}`}>
                  {vendorScore}
                  {defaultBadge}
                </span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <span className='text-gray-700 flex items-center gap-x-2'>
        <span>{vendorRating[rating]} seller</span>
        <span className={color}>{defaultBadge}</span>
      </span>
      <span className='text-gray-700 flex items-center gap-x-2'>
        <span>{vendorRating[rating]} service</span>
        <span className={color}>{defaultBadge}</span>
      </span>
      <p className='text-gray-700 flex items-center gap-x-1'>
        <span>{vendorRating[rating]}</span> shipment on time
        <span className={`${color} w-fit max-w-fit`}>{watchBadge}</span>
      </p>
      <p className='text-gray-700 flex items-center gap-x-1'>
        <span>{vendorRating[rating]}</span> shipment in conditions
        <span className={`${color} w-fit max-w-fit`}>{securityBadge}</span>
      </p>
      {/* <p className='whitespace-normal no-truncate flex'>
        <span className='flex flex-wrap gap-x-1'>
          <span>{vendorRating[rating]}</span> Shipment on time and in{' '}
          <span className='lowercase'>{vendorRating[rating]}</span> condition
          <span className={`${color} w-fit max-w-fit`}>{securityBadge}</span>
        </span>
      </p> */}
    </div>
  )
}
