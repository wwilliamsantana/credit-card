
import { ShieldCheckIcon } from "lucide-react"
import { FormContainer } from "./components/Form"
import { Card } from "./components/Card"



export default function Home() {
    
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <main className='p-8 bg-gray-800 grid gap-12  rounded-lg border-gray-700 border'>

          <div className="flex gap-16 items-center">
            <FormContainer/>
            <section>
              <Card/>
              <div className="text-sm text-gray-200 flex justify-center gap-2">
                <ShieldCheckIcon size={20}  fill="green"/>
                <span>Seus dados estão seguros</span>
              </div>
            </section>
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
