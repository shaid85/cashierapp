import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: Date.now(),
            todo: "300",
            player: "Shaid",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider