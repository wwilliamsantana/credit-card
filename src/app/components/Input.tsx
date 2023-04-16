import { InputHTMLAttributes } from "react"
import {UseFormRegister, FieldValues} from "react-hook-form"
import InputMask from "react-input-mask"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  id: string
  placeholder: string
  register: UseFormRegister<FieldValues>
}

export function Input({placeholder ,id ,register ,...rest}: InputProps){
  return (
    <input {...rest}  className="p-3 rounded text-gray-100 bg-gray-900 placeholder:text-gray-400 border border-gray-700 hover:border-gray-600 focus:border-violet-700 outline-none" placeholder={placeholder}  {...register(id)}  />
  )
}