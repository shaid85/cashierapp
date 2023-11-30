import React, { useState } from 'react'
import { useNote } from './NoteContext'

function NoteItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const {updateTodo, deleteTodo, toggleComplete} = useNote()

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }
    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }
    

  return (
    <div 
    className={`flex border border-black/10 rounded-lg px-3 py-1 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black mr-1 ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}>
            <input type="checkbox" className="cursor-pointer"
            checked={todo.completed}
            onChange={toggleCompleted} />
    {/* Edit, Save Button */}        
            <input type="text" className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/20 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
            value={todoMsg} 
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
             />
    {/* Player Button */}        
            <input type="text" className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/0 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
            value={todo.player}        
            readOnly
             />
    {/* Edit, Save Button */}
            <button
                className="hidden /inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
    {/* Delete Todo Button */}        
              <button
                className="hidebtn inline-flex w-6 h-6 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
    </div>
  )
}

export default NoteItem