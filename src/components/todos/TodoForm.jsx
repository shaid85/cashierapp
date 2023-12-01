import { useState } from "react";
import { useTodo } from "./TodoContext";

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

    const players = JSON.parse(localStorage.getItem("players"))
    if(players.length = 0){
        players = []
    }

    return (
        <form onSubmit={add}  className="flex">
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
            <input
                type="text" list="browsers"
                placeholder="Player Name."
                className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5 mr-1"
                value={player}
                onChange={(e) => setPlayer(e.target.value)}
            />
  <datalist id="browsers">
  {players.map((player) => (
    <option value={player.player}></option>
  ))}
  </datalist>
            <button type="submit" className="rounded-lg px-4 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;