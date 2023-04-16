import Image from "next/image"
import cardBackground from "../assets/card-background.png"
import { ShieldCheckIcon } from "lucide-react"

export default function Home() {
  return (
   <div className='flex justify-center items-center min-h-screen'>
      <main className='p-8 bg-gray-800 grid gap-12  rounded-lg border-gray-700 border'>

        <div className="flex gap-16 items-center">
          <form className='flex flex-col gap-6 '>
            <section className='flex flex-col gap-1 ' >
              <label htmlFor="NumberCard" className='text-gray-200 text-sm font-semibold'>Número do cartão</label>
              <input type="number" id='NumberCard' className="p-3 rounded text-gray-100 bg-gray-900 placeholder:text-gray-400 border border-gray-700 hover:border-gray-600 focus:border-violet-700 outline-none   " placeholder='**** **** ****' />
            </section>

            <section className='flex flex-col gap-1 ' >
              <label htmlFor="NumberCard" className='text-gray-200 text-sm font-semibold'>Número do titular</label>
              <input type="text" id='NumberCard' className="p-3 rounded text-gray-100 bg-gray-900 placeholder:text-gray-400 border border-gray-700 hover:border-gray-600 focus:border-violet-700 outline-none" placeholder='Nome como está no cartão' />
            </section>
        
            <section className="flex gap-4 ">
              <div className='flex flex-col gap-1 flex-1'>
                <label htmlFor="NumberCard" className='text-gray-200 text-sm font-semibold'>Validade</label>
                <input type="number" id='NumberCard' className="p-3 rounded text-gray-100 bg-gray-900 placeholder:text-gray-400 border border-gray-700 hover:border-gray-600 focus:border-violet-700 outline-none " placeholder='mm/aa' />
              </div>
              <div className='flex flex-col gap-1 w-32'>
                <label htmlFor="NumberCard" className='text-gray-200 text-sm font-semibold '>CVV <span>?</span></label>
                <input type="number" id='NumberCard' className="p-3 rounded text-gray-100 bg-gray-900 placeholder:text-gray-400 border border-gray-700 hover:border-gray-600 focus:border-violet-700 outline-none " placeholder='***' />
              </div>     
            </section>
          </form>

          <div className="">
            <Image src={cardBackground} alt="card-background" />
            <div className="text-sm text-gray-200 flex justify-center gap-2">
              <ShieldCheckIcon size={20}  fill="green"/>
              <span>Seus dados estão seguros</span>
            </div>
          </div>
        </div>
          
  
        <button
          className="rounded w-full px-12 py-4 bg-violet-700 text-gray-50 font-semibold text-lg hover:bg-violet-600 outline-none focus:outline-2 focus:outline-gray-50 disabled:opacity-50" 
        >
          Adicionar cartão
        </button>
      </main>
     
   </div>
  )
}
