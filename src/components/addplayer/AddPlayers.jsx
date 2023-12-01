import React, { useEffect, useState } from 'react'

function AddPlayers() {
    const [players, setPlayers] = useState([])
    const [player, setPlayer] = useState("")

    const addPlayer = (player) => {
      setPlayers((prev) => [{id: Date.now(), ...player}, ...prev])
    }
    const deletePlayer = (id) => {
      setPlayers((prev) => prev.filter((prevPlayer) => prevPlayer.id !== id))
    }
    const add = (e) => {
      e.preventDefault()

      if(!player) return

      addPlayer({player})
      setPlayer("")
    }

    useEffect(() => {
      const players = JSON.parse(localStorage.getItem("players"))
  
      if (players && players.length > 0){
        setPlayers(players)
      }

    }, [])
  
    useEffect(() => {
      localStorage.setItem("players", JSON.stringify(players))
    }, [players])    


  return (
    <div className='max-w-md mx-auto p-4'>
      <form action=""  className="flex py-4"
      onSubmit={add}>
        <input type="text"
                placeholder="Player Name..."
                className="w-full border border-black/30 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={player}
        onChange={(e) => setPlayer(e.target.value)} />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-blue-500 text-white shrink-0">
                Add
            </button>
      </form>
      <div className="w-full">
        <div className="flex flex-wrap gap-y-3 mb-8">
            {players.map((player) => (
                 <div key={player.id} className={`flex w-full justify-between border border-black/10 rounded-sm px-3 py-1 gap-y-3 shadow-sm
                  shadow-white/50 duration-300  text-black  bg-[#e2fcff]`}>

                      {/* Edit, Save Button */}        
                      <input type="text" className={`border-0 outline-none w-full bg-transparent rounded-sm `}
                      value={player.player} 
                       disabled           
                      />

                      {/* Delete Todo Button */}        
                      <button
                        className="inline-flex w-6 h-6 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                        onClick={() => deletePlayer(player.id)}
                      >
                        ❌ 
                    </button>      
                </div>       
          ))}
        </div>            


            
      </div>
      
    </div>
  )
}

export default AddPlayers