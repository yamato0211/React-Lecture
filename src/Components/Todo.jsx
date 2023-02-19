const Todo = ({content, index, todos, setTodos}) => {
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