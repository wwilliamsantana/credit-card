'use client'

import { ReactNode, createContext, useContext, useState } from "react";

interface CardContext{
  userId: number
}

const CardContext = createContext({} as CardContext)

interface CardContextProviderProps{
  children: ReactNode
}

export function CardContextProvider({children}: CardContextProviderProps){
  const [userId, setUserId] = useState(89)

  return (
    <CardContext.Provider value={{userId}}>
      {children}
    </CardContext.Provider>
  )
}


export const useCardContext = () => useContext(CardContext)