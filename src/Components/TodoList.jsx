import AddTaskIcon from '@mui/icons-material/AddTask';
import { Button, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Todo from "./Todo";
const TodoList = () => {
    const data = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
    const [inputText, setInputText] = useState("")
    const [todos, setTodos] = useState(data)

    useEffect(() => {
        const json = JSON.stringify(todos)
        localStorage.setItem("todos",json)
    }, [todos])

    const handleAddTodo = () => {
        if(inputText === "") {
            alert("空文字列は追加できません!!")
        } else {
            setTodos([
                ...todos,
                {
                    content: inputText
                }
            ])
        }
        setInputText("")
    }
    return (
        <div>
            <h1>TodoList</h1>
            <Stack direction="row" spacing={2} justifyContent="center">
                <TextField type="text" value={inputText} onChange={(e) => {setInputText(e.target.value)}}/>
                <Button  className=' bg-gradient-to-b from-orange-300 to-orange-500' startIcon={<AddTaskIcon/>} onClick={handleAddTodo} variant="contained">追加</Button>
            </Stack>
            <ul style={{ listStyle: "none" }}>
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