import { useState } from "react";
import { useTodo } from "./TodoContext";
import Names from './namelist.js';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const [player, setPlayer] = useState("")

    const {addTodo} = useTodo()

    const add  = (e) => {
        e.preventDefault()

        if(!todo) return
        if(!player) return

        addTodo({todo, player, completed: false})
        setTodo("")
        setPlayer("")
    }
   const onSelect = (selectitem) => {
        setPlayer(selectitem)
   }
    // const playerlist = JSON.parse(localStorage.getItem("players"))

    return (
        <form onSubmit={add}  className="flex relative">
            <input
                type="number" list="taka"
                placeholder="Collection..."
                className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5 mr-1"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
<datalist id="taka">
    <option value="300"></option>
    <option value="200"></option>
    <option value="100"></option>
</datalist>          
            <input type="text" 
                placeholder="Player Name."
                className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5 mr-1"
                value={player}
                onChange={(e) => setPlayer(e.target.value)}
            />
    <div className=" absolute right-0 top-11 mx-5 px-6 z-10"> 
        {Names.filter((item) => {
            const serchTerm = player.toLowerCase()
            const namelist = item.name.toLowerCase()

            return serchTerm && namelist.startsWith(serchTerm) && namelist !== serchTerm
        }
        ).slice(0,10)
        .map((item) => (
            <div key={item.name} onClick={() => onSelect(item.name)} className='bg-white text-black px-4 w-40 text-left cursor-pointer pb-1'>{item.name}</div>
        )) }
    </div>
   {/* <datalist id="browsers">
    {playerlist ? (
        playerlist.map((player) => (
             <option value={player.player}></option>
         ))
    ): (null)}
   </datalist> */}
            <button type="submit" className="rounded-lg px-4 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
            
        </form>
    );
}

export default TodoForm;