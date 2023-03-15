import { ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

import { FormTypes, SessionRequestProps, UserSessionTools } from "additional";
import { setRequestToTheAPI } from "@/pages/api/utils";

const getSessionRequests = ({ form, mode }: SessionRequestProps) => ({
  url: `https://1et100-3005.preview.csb.app/api/v1/auth/${mode}/`,
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
    console.log(form);

    const res = await setCredentials({ form, mode });
    console.log("res:", res);
    if (res.ok) {
      setForm(defaultForm);
      console.log(res);
      //   const {} = res
      //   localStorage.setItem('token', user.token )

      const isLogin = mode === "login" ? "/" : "login";
      router.push(`auth/${isLogin}`);
    } else {
      setForm(defaultForm);
      localStorage.removeItem("token");
    }
  };

  return { form: form, setInput: inputsFormHandler, setSubmit: submitHandler };
};

export { useUserSessionData };
