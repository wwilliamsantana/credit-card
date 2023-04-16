import Image from "next/image"
import cardBack from "../assets/card-background.png"

export default function Home() {
  return (
   <div className='grid place-content-center min-h-screen'>
      <main className='p-8 bg-gray-800 grid gap-12 max-w-3xl rounded-lg border-gray-700 border'>

        <div className="flex gap-16 w-full">
          <form className='flex flex-col gap-6 w-full'>
            <section className='flex flex-col gap-1 ' >
              <label htmlFor="NumberCard" className='text-gray-200 text-sm font-semibold'>Número do cartão</label>
              <input type="number" id='NumberCard' className="p-3 rounded text-gray-100 bg-gray-900 placeholder:text-gray-400 border border-gray-700 hover:border-gray-600 focus:border-violet-700 outline-none" placeholder='**** **** ****' />
            </section>

            <section className='flex flex-col gap-1 ' >
              <label htmlFor="NumberCard" className='text-gray-200 text-sm font-semibold'>Número do titular</label>
              <input type="text" id='NumberCard' className="p-3 rounded text-gray-100 bg-gray-900 placeholder:text-gray-400 border border-gray-700 hover:border-gray-600 focus:border-violet-700 outline-none" placeholder='Nome como está no cartão' />
            </section>
        
            <section className="flex gap-4 ">
              <div className='flex flex-col gap-1 flex-1'>
                <label htmlFor="NumberCard" className='text-gray-200 text-sm font-semibold'>Validade</label>
                <input type="text" id='NumberCard' className="p-3 rounded text-gray-100 bg-gray-900 placeholder:text-gray-400 border border-gray-700 hover:border-gray-600 focus:border-violet-700 outline-none " placeholder='mm/aa' />
              </div>
              <div className='flex flex-col gap-1 w-32'>
                <label htmlFor="NumberCard" className='text-gray-200 text-sm font-semibold '>CVV <span>?</span></label>
                <input type="text" id='NumberCard' className="p-3 rounded text-gray-100 bg-gray-900 placeholder:text-gray-400 border border-gray-700 hover:border-gray-600 focus:border-violet-700 outline-none" placeholder='***' />
              </div>     
            </section>
          </form>

        
        </div>
          
      




        <button>Adicionar cartão</button>
      </main>
     
   </div>
  )
}
