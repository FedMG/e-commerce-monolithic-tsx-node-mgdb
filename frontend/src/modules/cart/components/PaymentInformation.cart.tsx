import { BanknotesIcon, CreditCardIcon, PAYMENTS_LOGO } from '@/assets'

export const PaymentInformation = () => (
  <>
    <div className='pt-2 pb-6'>
      <h5 className='text-gray-700 text-md font-medium pb-2'>Credit Card</h5>
      <div className='pl-0 flex flex-wrap items-center gap-4'>
        {PAYMENTS_LOGO['visa']}
        {PAYMENTS_LOGO['mastercard']}
        <CreditCardIcon />
      </div>
    </div>

    <div className='pt-2 pb-6'>
      <h5 className='text-gray-700 text-md font-medium pb-2'>Debit Card</h5>
      <div className='pl-0 flex flex-wrap items-center gap-4'>
        {PAYMENTS_LOGO['visa']}
        {PAYMENTS_LOGO['mastercard']}
        <CreditCardIcon />
      </div>
    </div>

    <div className='pt-2 pb-6'>
      <h5 className='text-gray-700 text-md font-medium pb-2'>Cryptocurrencies</h5>
      <div className='pl-0 flex flex-wrap items-center gap-4'>
        {PAYMENTS_LOGO['bitcoin']}
        {PAYMENTS_LOGO['ethereum']}

      </div>
    </div>

    <div className='pt-2 pb-6'>
      <h5 className='text-gray-700 text-md font-medium pb-2'>Virtual Wallet</h5>
      <div className='pl-0 flex flex-wrap items-center gap-4'>
        {PAYMENTS_LOGO['mercado pago']}
      </div>
    </div>

    <div className='pt-2 pb-6'>
      <h5 className='text-gray-700 text-md font-medium pb-2'>Cash</h5>
      <div className='pl-1 flex flex-wrap items-center gap-4'>
        <BanknotesIcon />
      </div>
    </div>
  </>
)
