import { FormButton, FormRow, Input, Label } from '@/components'
import { useUserSessionData } from '../hooks'

const loginForm = {
  email: '',
  password: ''
}

export const LoginForm = (): React.ReactElement => {
  const { form, setInput, setSubmit } = useUserSessionData({ form: loginForm, mode: 'login' })

  return (
    <form className='w-full' onSubmit={setSubmit}>
      <FormRow>
        <Label id='email' name='Email:' />
        <Input type='email' placeholder='example@email.com' value={form.email} onChange={setInput} auto='email' />
      </FormRow>

      <FormRow>
        <Label id='password' name='Password:' />
        <Input type='password' value={form.password} onChange={setInput} auto='current-password' />
      </FormRow>

      <FormButton name='Login' />
    </form>
  )
}
