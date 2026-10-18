import { createContext, useContext, useState } from "react";

export const TodoContext = createContext(null)

export const useTodo = () => useContext(TodoContext)

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos((currentTodos) => [
            ...currentTodos,
            { ...todo, id: crypto.randomUUID() },
        ])
    }

    const updateTodo = (id, updatedTodo) => {
        setTodos((currentTodos) =>
            currentTodos.map((todo) =>
                todo.id === id ? { ...updatedTodo, id } : todo
            )
        )
    }

    const deleteTodo = (id) => {
        setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id))
    }

    const toggleComplete = (id) => {
        setTodos((currentTodos) =>
            currentTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    return (
        <TodoContext.Provider
            value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
        >
            {children}
        </TodoContext.Provider>
    )
}