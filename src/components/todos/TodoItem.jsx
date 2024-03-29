import React, { useState } from 'react'
import { useTodo } from './TodoContext'

function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }
    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }
    
    const alertcall = () => {
        if(todo.completed){
            alert("He Paid. Can delete only.")
        }else{
            alert("Click Show Edit on Top")
        }
    }

    const deleteitem = (id) => {
        let result = confirm("Want to delete?");
        if (result) {
            deleteTodo(id)
        }        
    }

  return (
    <div 
    className={`flex border border-black/10 rounded-lg px-2 py-1 gap-x-2 shadow-sm shadow-white/50 duration-300  text-black mr-1 ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}>
            <input type="checkbox" className={`${
                todo.completed ? "hidebox" : ""
            } hidebtn cursor-pointer boxdisable`}
            checked={todo.completed}
            onChange={toggleCompleted} 
            
            />
            <span className={`overbox ${
                todo.completed ? "tikbox" : ""
            }`} onClick={alertcall}>
            {todo.completed ? "✅" : "⬜"}</span>
    {/* Edit, Save Button */}        
            <input type="text" className={`border w-10 outline-none  bg-transparent rounded-lg ${
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
                onClick={() => deleteitem(todo.id)}
            >
                ❌
            </button>
    </div>
  )
}

export default TodoItem