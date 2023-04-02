import { useUserSessionData } from "@/hooks/useUserSessionData"

const registerForm = {
  name: "",
  email: "",
  password: "",
}

export const RegisterForm = () => {
  const { form, setInput, setSubmit } = useUserSessionData({ form: registerForm, mode: 'register'})
  
  return (
    <form className='w-full' onSubmit={setSubmit}>
      <div className='flex flex-col mb-5'>
        <label className='text-start mb-2 text-lg font-medium' htmlFor="name">
          Name:
        </label>
        <input        
          className='p-3 rounded-md border-2 border-solid border-gray-300'
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={setInput}
          required
        />
      </div>
      <div className='flex flex-col mb-5'>
        <label className='text-start mb-2 text-lg font-medium' htmlFor="email">
          Email:
        </label>
        <input
          placeholder="example@email.com"
          className='p-3 rounded-md border-2 border-solid border-gray-300'
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={setInput}
          required
        />
      </div>
      <div className='flex flex-col mb-5'>
        <label className='text-start mb-2 text-lg font-medium' htmlFor="password">
          Password:
        </label>
        <input
          className='p-3 rounded-md border-2 border-solid border-gray-300'
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={setInput}
          required
        />
      </div>
      <button className='p-4 w-full rounded-md dark:bg-white bg-black dark:text-black text-white border-none cursor-pointer hover:dark:bg-gray-400 hover:bg-gray-900 active:dark:bg-white active:bg-black' type="submit">
        Register
      </button>
    </form>
  )
}
