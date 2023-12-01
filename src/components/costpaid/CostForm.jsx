import { useState } from "react";
import { useCostContext } from "./CostContext";


function CostForm() {
    const [cost, setCost] = useState("")
    const [player, setPlayer] = useState("")

    const {addCost} = useCostContext()

    const add  = (e) => {
        e.preventDefault()

        if(!cost) return
        if(!player) return

        addCost({cost, player})
        setCost("")
        setPlayer("")
    }


    return (
        <form onSubmit={add}  className="flex">
            <input
                type="number" list="taka"
                placeholder="Cost..."
                className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5 mr-1"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
            />
    <datalist id="taka">
    <option value="200"></option>
    <option value="100"></option>
  </datalist>          
            <input
                type="text" list="browsers"
                placeholder="Player Name."
                className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5 mr-1"
                value={player}
                onChange={(e) => setPlayer(e.target.value)}
            />
  <datalist id="browsers">
    <option value="Pran"></option>
    <option value="Safaed"></option>
    <option value="Sajjad"></option>
    <option value="Shohag"></option>
    <option value="Robi"></option>
    <option value="Suvo"></option>
    <option value="Nabil"></option>
    <option value="Syeed"></option>
    <option value="Doctor"></option>
  </datalist>
            <button type="submit" className="rounded-lg px-4 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default CostForm;