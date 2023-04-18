import { useCardContext } from "../context/CardContext"



export function CardBack(){
  const {formData} = useCardContext()

  return (
    <div className=" card-back bg-[url('../assets/card-background.png')] bg-no-repeat bg-cover w-[268px] h-[168px] py-4 px-6">
      <div className="py-3 px-3 flex flex-col justify-between items-center h-full w-full">
          <div className="w-full h-6 bg-gray-800 rounded"></div>
          <div className="bg-white h-6 w-[90%] rounded text-xs flex justify-between items-center font-bold px-2">
            <span className="text-sm">{formData?.cvv ? formData?.cvv : "****"}</span>
            CVV
          </div>
      </div>
    </div>
  )
}