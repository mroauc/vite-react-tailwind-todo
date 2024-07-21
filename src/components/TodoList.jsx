import {Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({todos, removeTodo, updateTodo}) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvider) => (
                <div className="bg-white rounded-t-md px-4 dark:bg-gray-800"
                    ref={droppableProvider.innerRef}
                    {...droppableProvider.droppableProps}
                >
                    {todos.map((todo, index) => {
                        // return <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
                        return (
                            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                                {
                                    (draggableProvider) => (
                                        <TodoItem 
                                            ref={draggableProvider.innerRef}
                                            {...draggableProvider.draggableProps}
                                            {...draggableProvider.dragHandleProps} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}
                                        />)
                                }
                            </Draggable>
                            )
                    })}
                    {droppableProvider.placeholder}
                </div>
            )}
        </Droppable>
    )
}
export default TodoList;