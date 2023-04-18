import { InputHTMLAttributes } from "react"
import InputMask from "react-input-mask"


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  mask: string
}

export function Input({mask,  ...rest}: InputProps){
  return (
    <InputMask mask={mask} {...rest} autoComplete="off" className="p-3 rounded text-gray-100 bg-gray-900 placeholder:text-gray-400 border border-gray-700 hover:border-gray-600 focus:border-violet-700 outline-none" />
  )
}