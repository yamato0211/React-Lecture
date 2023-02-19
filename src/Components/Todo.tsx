import { TodoType } from "./TodoList"

type Props = {
    content: string,
    index: number,
    todos: TodoType[],
    setTodos: (x: TodoType[]) => void
}

const Todo = ({content, index, todos, setTodos} : Props) => {
    const handleTodoDelete = () => {
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }
    return (
        <div>
            <p>{content}</p>
            <button onClick={handleTodoDelete}>完了</button>
        </div>
    )
}

export default Todo