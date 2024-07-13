import { useState } from "react";

const TodoCreate = ({createTodo}) => {
    
    const [title, setTitle] = useState("")

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();
        if(title.trim().length == 0){
            return setTitle("");
        }
        createTodo(title);
        setTitle("");
    }
    
    return (
        <form onSubmit={handleSubmitAddTodo} className="bg-white rounded-md overflow-hidden py-4 flex gap-2 items-center px-4 my-5 dark:bg-gray-800">
            <span className="rounded-full border-2 w-5 h-5 inline-block"> </span>
            <input
                value={title}
                type="text"
                className="w-full text-gray-400 outline-none dark:bg-gray-800"
                placeholder="Escribe una nueva tarea"
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    )
}
export default TodoCreate;