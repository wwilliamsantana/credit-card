'use client'
import Image from "next/image"
import flagVisa from "../../assets/flag-visa.svg"
import contactless from "../../assets/contactless.svg"
import { useCardContext } from "../context/CardContext"

export function Card(){
  const {formData} = useCardContext()

  return (
    <div className=" card-front bg-[url('../assets/card-background.png')] bg-no-repeat bg-cover w-[268px] h-[168px] py-4 px-6">
              
    <div className="py-3 px-3">
      <div className="flex justify-between items-center ">
        <Image src={flagVisa} alt="" width={32}/>
        <Image src={contactless} alt="" width={24}/>
      </div>
      <span className="mt-4 font-semibold text-gray-50 block">
        {formData?.numberCard ? formData.numberCard : "* * * * * * * * * * * * * * * *"}
      </span>
      <div className="flex justify-between mt-2 gap-1" >
        <span className="text-sm  text-gray-400 flex-1 line-clamp-2">
          {formData?.nameHolder ? formData?.nameHolder : "Seu nome"}
          </span>
        <span className="text-sm text-gray-400 ">
          {formData?.validate ? formData?.validate : " **/** "}
        </span>
      </div>
    </div>
  
  </div>
  )
 
}