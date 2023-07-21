import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

import CryptoJS from 'crypto-js'
import crypto from 'crypto'

import { setRequestToTheAPI } from '@/pages/api/utils'
import { isString } from '@/utils'

type SessionMode = 'login' | 'register'

interface FormTypes {
  name?: string
  email: string
  password: string
}

interface SessionRequestProps {
  form: FormTypes
  mode: SessionMode
}

interface UserSessionTools {
  form: FormTypes
  setInput: (event: ChangeEvent<HTMLInputElement>) => void
  setSubmit: (event: FormEvent<HTMLFormElement>) => void
}

interface GetSessionRequestsResponse {
  url: string
  requestOptions: {
    method: string
    headers: {
      'Content-Type': string
    }
    body: string
  }
}

interface APIResponse { token: string, user?: object }

export const KEY_TOKEN = 'ecommercencrypt' + Math.random().toString(36).substring(2, 15)
export const SECRET_KEY = crypto.randomBytes(32).toString('hex')

const route = {
  login: 'login',
  register: '/'
}

const getSessionRequests = ({ form, mode }: SessionRequestProps): GetSessionRequestsResponse => ({
  url: `https://xpbw7h-3005.csb.app/api/v1/auth/${mode}/`,
  requestOptions: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  }
})

const setCredentials = async (credentials: SessionRequestProps): Promise<APIResponse> => {
  const { url, requestOptions } = getSessionRequests(credentials)
  return await setRequestToTheAPI(url, requestOptions)
}

const useUserSessionData = ({ form: defaultForm, mode }: SessionRequestProps): UserSessionTools => {
  const [form, setForm] = useState<FormTypes>(defaultForm)
  const router = useRouter()

  const inputsFormHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    setCredentials({ form, mode }).then(async ({ token }) => {
      if (token !== null && isString(token)) {
        setForm(defaultForm)
        return
      }

      setForm(defaultForm)

      const encryptedToken = CryptoJS.AES.encrypt(JSON.stringify(token), SECRET_KEY).toString()
      localStorage.setItem(KEY_TOKEN, encryptedToken)
      await router.push(route[mode])
    }).catch(() => {
      throw new Error('The authentication hasn\'t been possible')
    })
  }

  return { form, setInput: inputsFormHandler, setSubmit: submitHandler }
}

export { useUserSessionData }
