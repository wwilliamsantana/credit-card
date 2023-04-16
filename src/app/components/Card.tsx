import Image from "next/image"
import flagVisa from "../../assets/flag-visa.svg"
import contactless from "../../assets/contactless.svg"

export function Card(){
  return (
    <div className="bg-[url('../assets/card-background.png')] bg-no-repeat bg-cover w-[268px] h-[168px] py-4 px-6">
              
    <div className="py-4 px-6 ">
      <div className="flex justify-between items-center ">
        <Image src={flagVisa} alt="" width={32}/>
        <Image src={contactless} alt="" width={24}/>
      </div>
      <div className="mt-6 font-semibold text-gray-50">4716 8039 0245 7898</div>
      <div className="flex justify-between items-center mt-3">
        <div className="text-sm text-gray-400">Seu nome aqui</div>
        <div className="text-sm text-gray-400">** / **</div>
      </div>
    </div>
  
  </div>
  )
 
}