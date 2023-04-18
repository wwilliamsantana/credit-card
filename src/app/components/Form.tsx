'use client'

import { Input } from "./Input";
import {HelpCircle} from "lucide-react"
import { useCardContext } from "../context/CardContext";
import { useEffect, useState } from "react";

export function FormContainer(){
  const {updateFormData, updateCardFront} = useCardContext()
  const [numberCard, setNumberCard] = useState<string | null>(null)
  const [nameHolder, setNameHolder] = useState<string | null>(null)
  const [validate, setValidate] = useState<string | null>(null)
  const [cvv, setCvv] = useState<string | null>(null)


  useEffect(() => {
    updateFormData({numberCard, nameHolder, validate, cvv})
  }, [numberCard, nameHolder, validate, cvv])
  
  

  return (
  <form className='flex flex-col gap-6 '>
    <section className='flex flex-col gap-1 ' >
      <label htmlFor="NumberCard" className='text-gray-200 text-sm font-semibold'>Número do cartão</label>
      <Input mask="9999 9999 9999 9999" placeholder="**** **** **** ****" id="NumberCard" onChange={e => setNumberCard(e.target.value)} />
    </section>

    <section className='flex flex-col gap-1 ' >
      <label htmlFor="NameHolder" className='text-gray-200 text-sm font-semibold'>Número do titular</label>
      
      <Input mask="" placeholder='Nome como está no cartão'  id="nameHolder" onChange={e => setNameHolder(e.target.value)}/>
    </section>

    <section className="flex gap-4 ">
      <div className='flex flex-col gap-1 flex-1'>
        <label htmlFor="validate" className='text-gray-200 text-sm font-semibold'>Validade</label>
        <Input mask="99/9999"  placeholder='mm/aa'  id="validate" onChange={e => setValidate(e.target.value)}  />
      </div>
      <div className='flex flex-col gap-1 w-32'>
        <label htmlFor="cvv" className='text-gray-200 text-sm font-semibold flex items-center gap-1'>
          CVV 
         <HelpCircle size={16} fill="white" color="black"/>
        </label>
        <Input mask="9999" id='cvv' placeholder='****' onChange={e => setCvv(e.target.value)} onFocus={updateCardFront} onBlur={updateCardFront}/> 
      </div>     
    </section>
</form>
  )
}