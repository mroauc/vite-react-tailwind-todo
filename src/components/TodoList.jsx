import TodoItem from "./TodoItem";

const TodoList = ({todos, removeTodo, updateTodo}) => {
    return (
        <div className="bg-white rounded-t-md px-4 dark:bg-gray-800">
            {todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
            })}
            
        </div>
    )
}
export default TodoList;