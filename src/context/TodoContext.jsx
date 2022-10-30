import { nanoid } from "nanoid";
import { createContext, useState } from "react";

const TodoContext = createContext()

export function TodoProvider({ children }) {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])

    // create
    function addTodo() {
        let curTodo = { id: nanoid(), task: todo, isDone: false }
        setTodos(prevTodo => [...prevTodo, curTodo])
        setTodo("")
    }

    // update
    function toggleIsDone(id) {
        let toUpdateTodo = todos.find(todo => todo.id === id)
        toUpdateTodo.isDone = !toUpdateTodo.isDone
        let updatedTodos = []
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id !== id) {
                updatedTodos.push(todos[i])
            } else {
                updatedTodos.push(toUpdateTodo)
            }
        }
        setTodos([...updatedTodos])
    }
    function editTodo(id, updatedTask) {
        let toUpdateTodo = todos.find(todo => todo.id === id)
        toUpdateTodo.task = updatedTask
        let updatedTodos = []
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id !== id) {
                updatedTodos.push(todos[i])
            } else {
                updatedTodos.push(toUpdateTodo)
            }
        }
        setTodos([...updatedTodos])
    }

    // delete
    function deleteTodo(id) {
        let updatedTodos = todos.filter(todo => todo.id !== id)
        setTodos([...updatedTodos])

    }
    return (
        <TodoContext.Provider value={{ todos, todo, addTodo, setTodo, toggleIsDone, deleteTodo, editTodo }}>{children}</TodoContext.Provider>
    )
}
export default TodoContext