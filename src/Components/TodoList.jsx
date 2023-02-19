import { useEffect, useState } from "react"
import Todo from "./Todo"

const TodoList = () => {
    const data = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
    const [inputText, setInputText] = useState("")
    const [todos, setTodos] = useState(data)

    useEffect(() => {
        const json = JSON.stringify(todos)
        localStorage.setItem("todos",json)
    }, [todos])

    const handleAddTodo = () => {
        setTodos([
            ...todos,
            {
                content: inputText
            }
        ])
        setInputText("")
    }
    return (
        <div>
            <h1>TodoList</h1>
            <input type="text" value={inputText} onChange={(e) => {setInputText(e.target.value)}}/>
            <button onClick={handleAddTodo}>追加</button>
            <ul style={{listStyle: "none"}}>
                {
                    todos.map((item, index) => {
                        return (
                            <li key={index}>
                                <Todo content={item.content} index={index} todos={todos} setTodos={setTodos}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList