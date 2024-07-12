import CrossIcon from "./icons/CrossIcon";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({todo, removeTodo, updateTodo}) => {
    const {id, title, completed} = todo;
    return (
        <article className="flex gap-4 py-4 border-b-gray-500 dark:bg-gray-800">
            <button onClick={() => {updateTodo(id)}} className={`rounded-full border-2 w-5 h-5 ${completed ? 'flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : ''}`}>
                {completed && <IconCheck/>}
            </button>
            <p className={`grow text-gray-600 dark:text-gray-200 ${completed && 'line-through'}`}>{title}</p>
            <button onClick={() => removeTodo(id)}><CrossIcon></CrossIcon></button>
        </article>
    )
}
export default TodoItem;