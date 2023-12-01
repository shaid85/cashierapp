import { useCostContext } from './CostContext'


function CostItem({cost}) {

    const {deleteCost} = useCostContext()
 
  return (
    <div 
    className={`flex border border-black/10 rounded-lg px-3 py-1 gap-x-3 shadow-sm
     shadow-white/50 duration-300  text-black mr-1 bg-[#ccbed7]`}>

    {/* Edit, Save Button */}        
            <input type="text" className={`border-0 outline-none w-10 bg-transparent rounded-lg `}
            value={cost.cost} 
                        
             />
    {/* Player Button */}        
            <input type="text" className={`border-0 outline-none w-full bg-transparent rounded-lg`}
            value={cost.player}        
            readOnly
             />

    {/* Delete Todo Button */}        
              <button
                className="hidebtn inline-flex w-6 h-6 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteCost(cost.id)}
            >
                ❌ 
            </button>
    </div>
  )
}

export default CostItem