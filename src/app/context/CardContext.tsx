'use client'

import {  ReactNode, createContext, useContext, useState } from "react";

interface CardContext{
  formData: FormDataProps | null
  updateFormData: (data: FormDataProps) => void
  cardFront: boolean
  updateCardFront: () => void
}

const CardContext = createContext({} as CardContext)

interface CardContextProviderProps{
  children: ReactNode
}

interface FormDataProps{
  numberCard: string | null
  nameHolder: string | null
  validate: string | null
  cvv: string | null
}

export function CardContextProvider({children}: CardContextProviderProps){
  const [formData, setFormData] = useState<FormDataProps | null>(null)
  const [cardFront, setCardFront] = useState<boolean>(true)

  function updateFormData(data: FormDataProps){
    setFormData(data)
  }
  function updateCardFront(){
    setCardFront(!cardFront)
  }

  return (
    <CardContext.Provider value={{formData, updateFormData, cardFront, updateCardFront}}>
      {children}
    </CardContext.Provider>
  )
}


export const useCardContext = () => useContext(CardContext)