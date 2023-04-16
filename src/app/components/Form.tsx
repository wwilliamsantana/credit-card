'use client'

import { Input } from "./Input";
import {HelpCircle} from "lucide-react"

export function FormContainer(){
  return (
  <form className='flex flex-col gap-6 '>
    <section className='flex flex-col gap-1 ' >
      <label htmlFor="NumberCard" className='text-gray-200 text-sm font-semibold'>Número do cartão</label>
     
      <Input type="number" placeholder="**** **** ****" id="NumberCard"/>
    </section>

    <section className='flex flex-col gap-1 ' >
      <label htmlFor="NameHolder" className='text-gray-200 text-sm font-semibold'>Número do titular</label>
      
      <Input type="text" id='NameHolder' placeholder='Nome como está no cartão'/>
    </section>

    <section className="flex gap-4 ">
      <div className='flex flex-col gap-1 flex-1'>
        <label htmlFor="validate" className='text-gray-200 text-sm font-semibold'>Validade</label>
        <Input type="number" id='validate' placeholder='mm/aa' />
      </div>
      <div className='flex flex-col gap-1 w-32'>
        <label htmlFor="cvv" className='text-gray-200 text-sm font-semibold flex items-center gap-1'>
          CVV 
         <HelpCircle size={16} fill="white" color="black"/>
        </label>
        <Input type="number" id='cvv' placeholder='***'/> 
      </div>     
    </section>
</form>
  )
}