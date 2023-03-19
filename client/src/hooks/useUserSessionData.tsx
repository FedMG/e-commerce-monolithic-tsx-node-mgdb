import { ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

import CryptoJS from 'crypto-js'
import crypto from 'crypto'

import { FormTypes, SessionRequestProps, UserSessionTools } from "additional";
import { setRequestToTheAPI } from "@/pages/api/utils";

export const KEY_TOKEN = 'ecommercencrypt' + Math.random().toString(36).substring(2, 15);
export const SECRET_KEY = crypto.randomBytes(32).toString('hex');

const route = {
  'login': 'login',
  'register': '/',
}

const getSessionRequests = ({ form, mode }: SessionRequestProps) => ({
  url: `https://xpbw7h-3005.csb.app/api/v1/auth/${mode}/`,
  requestOptions: {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  },
});

const setCredentials = async (credentials: SessionRequestProps) => {
  const { url, requestOptions } = getSessionRequests(credentials);
  return await setRequestToTheAPI(url, requestOptions);
};

const useUserSessionData = ({
  form: defaultForm,
  mode,
}: SessionRequestProps): UserSessionTools => {
  const [form, setForm] = useState<FormTypes>(defaultForm);
  const router = useRouter();

  const inputsFormHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();    
    const { token } = await setCredentials({ form, mode });
    
    if (!token) {
      return setForm(defaultForm)
    }
    setForm(defaultForm)
    
    const encryptedToken = CryptoJS.AES.encrypt(JSON.stringify(token), SECRET_KEY).toString()
    localStorage.setItem(KEY_TOKEN, encryptedToken)
    router.push(route[mode]);
  };

  return { form: form, setInput: inputsFormHandler, setSubmit: submitHandler };
};

export { useUserSessionData };
