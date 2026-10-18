import { useState } from 'react'
import { useTodo } from './Contexts'
import { TodoItem } from './components'
import './App.css'

function App() {
  const [todo, setTodo] = useState('')
  const { addTodo, todos } = useTodo()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!todo.trim()) return

    addTodo({ todo: todo.trim(), completed: false })
    setTodo('')
  }

  return (
    <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                <form onSubmit={handleSubmit} className="flex">
                    <input
                        type="text"
                        value={todo}
                        onChange={(event) => setTodo(event.target.value)}
                        placeholder="Write a todo..."
                        className="w-full rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-black outline-none placeholder:text-gray-500"
                    />
                    <button
                        type="submit"
                        className="rounded-r-lg bg-orange-600 px-4 py-1.5 font-medium text-white"
                    >
                        Add
                    </button>
                </form>
            </div>
            <div className="flex flex-col gap-y-3">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default App
