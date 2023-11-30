import React, { useState, useEffect } from 'react'
import { NoteProvider } from './NoteContext'
import NoteForm from './NoteForm'
import NoteItem from './NoteItem'

function NoteApp() {
    const [notes, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
    }
    const updateTodo = (id,todo) => {
        setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
    }
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
    }
    const toggleComplete = (id) => {
        setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ?  {...prevTodo, completed: !prevTodo.completed }  : prevTodo))
    }

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem("notes"))
    
        if (notes && notes.length > 0){
          setTodos(notes)
        }
      }, [])
    
      useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
      }, [notes])
      let totalnote =0
    if(notes){
       totalnote = notes.reduce(function(tot, arr) { 
        // return the sum with previous value
        return tot + Number(!arr.completed ? arr.todo : 0);
      
        // set initial value as 0
      },0); 
    } 

  return (
    <NoteProvider value={{notes,addTodo,updateTodo,deleteTodo,toggleComplete}}>
        <div className="bg-[#172842] pb-8 pt-2">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
             <h2 className="text-md font-bold text-left mb-3 mt-2">Pending Cost</h2>
                <div className="mb-4">
                    {/* Todo form goes here */} 
                    <NoteForm />
                </div>
                <div className="flex flex-wrap gap-y-3">
                    {/*Loop and Add TodoItem here */}
                    {notes.map((todo) => (
                        <div className="w-1/2" key={todo.id}>
                        <NoteItem todo={todo} />
                        </div>
                    ))}
                    
                </div>
                <div className="w-full mt-3">Panding Cost : {totalnote}</div>
            </div>
        </div>
    </NoteProvider>
  )
}

export default NoteApp