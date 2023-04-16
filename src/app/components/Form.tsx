'use client'

import { useForm } from "react-hook-form";
import { Input } from "./Input";
import {HelpCircle} from "lucide-react"
import { useCardContext } from "../context/CardContext";
import { useEffect } from "react";

export function FormContainer(){
  const {register, watch} = useForm()
  const {updateFormData} = useCardContext()

  const numberCard = watch("numberCard")
  const nameHolder = watch("nameHolder")
  const validate = watch("validate")
  const cvv = watch("cvv")

  
  useEffect(() => {
    updateFormData({numberCard, nameHolder, validate, cvv})
  }, [numberCard, nameHolder, validate, cvv])
  

  return (
  <form className='flex flex-col gap-6 '>
    <section className='flex flex-col gap-1 ' >
      <label htmlFor="NumberCard" className='text-gray-200 text-sm font-semibold'>Número do cartão</label>
      <Input type="number" placeholder="**** **** ****"  register={register} id="numberCard" maxLength={18} required minLength={5}/>
    </section>

    <section className='flex flex-col gap-1 ' >
      <label htmlFor="NameHolder" className='text-gray-200 text-sm font-semibold'>Número do titular</label>
      
      <Input type="text" placeholder='Nome como está no cartão' register={register} id="nameHolder" />
    </section>

    <section className="flex gap-4 ">
      <div className='flex flex-col gap-1 flex-1'>
        <label htmlFor="validate" className='text-gray-200 text-sm font-semibold'>Validade</label>
        <Input type="text" placeholder='mm/aa' register={register} id="validate"  />
      </div>
      <div className='flex flex-col gap-1 w-32'>
        <label htmlFor="cvv" className='text-gray-200 text-sm font-semibold flex items-center gap-1'>
          CVV 
         <HelpCircle size={16} fill="white" color="black"/>
        </label>
        <Input type="number" id='cvv' placeholder='***' register={register} maxLength={4} required  minLength={1}/> 
      </div>     
    </section>
</form>
  )
}