import { useUserSessionData } from "@/hooks/useUserSessionData"

const loginForm = {
  email: "",
  password: "",
}

// refactor later
export const LoginForm = () => {
   const { form, setInput, setSubmit } = useUserSessionData({ form: loginForm, mode: 'login'})
   
  return (
    <form className='w-full' onSubmit={setSubmit}>
      <div className='flex flex-col mb-5'>
        <label className='text-start mb-2 text-lg font-medium' htmlFor="email">Email:</label>
        <input
          className='p-3 rounded-md border-2 border-solid border-gray-300'
          type="email"
          id="email"
          name="email"
          placeholder="example@email.com"
          value={form.email}
          onChange={setInput}
          autoComplete='email'
          required
        />
      </div>
      <div className='flex flex-col mb-5'>
        <label className='text-start mb-2 text-lg font-medium' htmlFor="password">Password:</label>
        <input
          className='p-3 rounded-md border-2 border-solid border-gray-300'
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={setInput}
          required
          autoComplete="current-password"
        />
      </div>
      <button className='p-4 w-full rounded-md dark:bg-white bg-black dark:text-black text-white border-none cursor-pointer hover:dark:bg-gray-400 hover:bg-gray-900 active:dark:bg-white active:bg-black' type="submit">Login</button>
    </form>
  )
}
