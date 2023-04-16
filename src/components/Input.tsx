import { InputHTMLAttributes, ReactNode } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  placeholder: string
}

export function Input({placeholder, ...rest}: InputProps){
  return (
    <input className="p-3 rounded text-gray-100 bg-gray-900 placeholder:text-gray-400 border border-gray-700 hover:border-gray-600 focus:border-violet-700 outline-none" placeholder={placeholder} {...rest}/>
  )
}