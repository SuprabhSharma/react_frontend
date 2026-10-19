import { createContext, useContext, useEffect, useState } from "react";

export const TodoContext = createContext(null)
const TODO_STORAGE_KEY = "todos"

export const useTodo = () => useContext(TodoContext)

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem(TODO_STORAGE_KEY)

        if (!storedTodos) return []

        try {
            const parsedTodos = JSON.parse(storedTodos)
            return Array.isArray(parsedTodos) ? parsedTodos : []
        } catch (error) {
            console.error("Unable to load todos from localStorage.", error)
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

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