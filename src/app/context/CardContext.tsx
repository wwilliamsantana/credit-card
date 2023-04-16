'use client'

import {  ReactNode, createContext, useContext, useState } from "react";

interface CardContext{
  formData: FormDataProps | null
  updateFormData: (data: FormDataProps) => void
}

const CardContext = createContext({} as CardContext)

interface CardContextProviderProps{
  children: ReactNode
}

interface FormDataProps{
  numberCard: number
  nameHolder: string
  validate: number
  cvv: number
}

export function CardContextProvider({children}: CardContextProviderProps){
  const [formData, setFormData] = useState<FormDataProps | null>(null)

  function updateFormData(data: FormDataProps){
    setFormData(data)
  }

  return (
    <CardContext.Provider value={{formData, updateFormData}}>
      {children}
    </CardContext.Provider>
  )
}


export const useCardContext = () => useContext(CardContext)