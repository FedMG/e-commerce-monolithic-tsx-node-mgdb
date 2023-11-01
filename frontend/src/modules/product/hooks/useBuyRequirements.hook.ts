import { useState } from 'react'

type IntialState = { isLogged: null | boolean; message: null | string }
const intialState = { isLogged: null, message: null }

export const useBuyRequirements = () => {
  // later replace with loggin context
  const [status, setStatus] = useState<IntialState>(intialState)

  const buyNowMessageHandler = (): void => {
    const isUserLogged = false
    if (!isUserLogged) {
      setStatus({ isLogged: false, message: 'You must sign in to buy a product.' })
      return
    }
    return
  }

  const closeMessageHandler = (): void => {
    setStatus({
      isLogged: null,
      message: null
    })
  }

  return { close: closeMessageHandler, buyNow: buyNowMessageHandler, status }
}
