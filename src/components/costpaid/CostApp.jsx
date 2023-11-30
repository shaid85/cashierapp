import React, { useState, useEffect  } from 'react'
import { CostProvider } from './CostContext'
import CostItem from './CostItem'
import CostForm from './CostForm'

function CostApp() {
    const [costs, setCosts] = useState([])

    const addCost = (cost) => {
      setCosts((prev) => [{id: Date.now(), ...cost}, ...prev])
    }
    const deleteCost = (id) => {
      setCosts((prev) => prev.filter((prevCost) => prevCost.id !== id))
    }

    useEffect(() => {
      const costs = JSON.parse(localStorage.getItem("costs"))
  
      if (costs && costs.length > 0){
        setCosts(costs)
      }
    }, [])
  
    useEffect(() => {
      localStorage.setItem("costs", JSON.stringify(costs))
    }, [costs])

    let totalcost=0
  if(costs){
     totalcost = costs.reduce(function(tot, arr) { 
      // return the sum with previous value
      return tot + Number(arr.cost);
    
      // set initial value as 0
    },0); 
  }

  return (
    <CostProvider value={{costs,addCost,deleteCost}}>
        <div className="bg-[#172842] pb-8 py-2">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h2 className="text-md font-bold text-left mb-3 mt-2">Cost Paid</h2>
                <div className="mb-4">
                    {/* Todo form goes here */} 
                    <CostForm />
                </div>
                <div className="flex flex-wrap gap-y-3">
                    {/*Loop and Add TodoItem here */}
                    {costs.map((cost) => (
                        <div className="w-1/2" key={cost.id}>
                        <CostItem cost={cost} />
                        </div>
                    ))}
                    
                </div>
                <div className="w-full mt-3">Total Cost: {totalcost}</div>
            </div>
        </div>
    </CostProvider>
  )
}

export default CostApp