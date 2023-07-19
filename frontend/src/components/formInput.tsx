import type { ChildrenNode, InputProps, LabelProps } from 'additional'

export const FormRow: React.FC<ChildrenNode> = ({ children }) => (
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
  <button className='p-3 w-full rounded-md bg-black text-white border-none font-semibold cursor-pointer hover:bg-gray-900  active:bg-primary-600 bg-primary-700 hover:bg-primary-800' type='submit'>
    {name}
  </button>
)
