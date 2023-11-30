import { useContext } from "react";
import { createContext } from "react";

export const NoteContext = createContext({
    notes: [
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

export const useNote = () => {
    return useContext(NoteContext)
}

export const NoteProvider = NoteContext.Provider