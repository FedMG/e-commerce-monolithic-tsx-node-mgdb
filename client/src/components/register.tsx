import { useUserSessionData } from '@/hooks/useUserSessionData'
import { FormButton, FormRow, Input, Label } from './formInput'

const registerForm = {
  name: '',
  email: '',
  password: ''
}

export const RegisterForm = (): React.ReactElement => {
  const { form, setInput, setSubmit } = useUserSessionData({ form: registerForm, mode: 'register' })

  return (
    <form className='w-full' onSubmit={setSubmit}>
      <FormRow>
        <Label id='name' name='Name:' />
        <Input type='text' placeholder='Your name' value={form.name} onChange={setInput} auto='username' />
      </FormRow>

      <FormRow>
        <Label id='email' name='Email:' />
        <Input type='email' placeholder='example@email.com' value={form.email} onChange={setInput} auto='email' />
      </FormRow>

      <FormRow>
        <Label id='password' name='Password:' />
        <Input type='password' value={form.password} onChange={setInput} auto='current-password' />
      </FormRow>

      <FormButton name="Register" />
    </form>
  )
}
