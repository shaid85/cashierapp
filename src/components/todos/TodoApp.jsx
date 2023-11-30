import React, { useState, useEffect } from 'react'
import { TodoProvider } from './TodoContext'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

function TodoApp() {
    const [todos, setTodos] = useState([])

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
        const todos = JSON.parse(localStorage.getItem("todos"))
    
        if (todos && todos.length > 0){
          setTodos(todos)
        }
      }, [])
    
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
      }, [todos])

      let totalcash=0
if(todos){
     totalcash = todos.reduce(function(tot, arr) { 
        // return the sum with previous value
        return tot + Number(arr.todo);
      
        // set initial value as 0
      },0); 
}
 
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
        <div className="bg-[#172842] pb-8 pt-2">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">Cashier App </h1>
                <div className="mb-4">
                    {/* Todo form goes here */} 
                    <TodoForm />
                </div>
                <div className="flex flex-wrap gap-y-3">
                    {/*Loop and Add TodoItem here */}
                    {todos.map((todo) => (
                        <div className="w-1/2" key={todo.id}>
                        <TodoItem todo={todo} />
                        </div>
                    ))}
                    
                </div>
                <div className="w-full mt-3">Total Collection: {totalcash}</div>
            </div>
        </div>
    </TodoProvider>
  )
}

export default TodoApp