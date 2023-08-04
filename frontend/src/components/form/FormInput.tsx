import type { BaseComponentProps } from '@/schemas'
import type { ChangeEvent } from 'react'

export interface InputProps {
  value?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  auto: string
  placeholder?: string
  type: 'text' | 'email' | 'password'
}

export interface LabelProps {
  id: 'name' | 'email' | 'password'
  name: string
}

export const FormRow: React.FC<Pick<BaseComponentProps, 'children'>> = ({ children }) => (
  <div className='flex flex-col mb-5'>{children}</div>
)

export const Label: React.FC<LabelProps> = ({ id, name }) => (
  <label className='text-start mb-2 text-md lg:text-lg text-gray-800 font-medium' htmlFor={id}>
    {name}
  </label>
)

export const Input: React.FC<InputProps> = ({ value, onChange, auto, placeholder, type }) => (
  <input
    className='p-2 rounded-md border-2 border-solid border-gray-300'
    type={type}
    id={type}
    name={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    autoComplete={auto}
    required
  />
)

export const FormButton: React.FC<{ name: string }> = ({ name }) => (
  <button className='p-3 w-full rounded-md text-white border-none font-semibold cursor-pointer active:bg-primary-600 bg-primary-700 hover:bg-primary-800' type='submit'>
    {name}
  </button>
)
