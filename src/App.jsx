import { DragDropContext, Draggable } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const initialStateTodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
console.log(initialStateTodos);

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function App() {

    const [todos, setTodos] = useState(initialStateTodos);
    const createTodo = (title) => {
      const newTodo = {
        id: Date.now(),
        title,
        completed: false
      }
      setTodos([...todos, newTodo])
    }

    const removeTodo = (id) => {
      setTodos(todos.filter(todo => {return todo.id != id}));
    }

    const updateTodo = (id) => {
      setTodos(todos.map(todo => todo.id == id ? {...todo, completed: !todo.completed} : todo));
    }

    const clearCompleted = () => {
      setTodos(todos.filter(todo => !todo.completed));
    }

    const [filter, setFilter] = useState("all");

    const filterTodos = () => {
      switch (filter) {
        case 'all':
          return todos;
        case 'active':
          return todos.filter(todo => !todo.completed);
        case 'completed':
          return todos.filter(todo => todo.completed);      
        default:
          return todos;
      }
    }

    const changeFilter = (filter) => setFilter(filter);

    const computedItemsLeft = todos.filter(todo => {return !todo.completed}).length;

    useEffect(() =>{
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDragEnd = (result) => {
      const {destination, source} = result;
      if(!destination) return;
      if (source.index === destination.index && source.droppableId === destination.droppableId)
          return;
      setTodos((prevTasks) =>
          reorder(prevTasks, source.index, destination.index)
      );
    };

    return (
      <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] dark:bg-gray-900 bg-no-repeat width bg-contain bg-gray-300 min-h-screen md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:md:bg-[url('./assets/images/bg-desktop-light.jpg')]">
        <Header/>
        <main className="container mx-auto px-4 md:max-w-xl md:shadow-2xl">
          <TodoCreate createTodo={createTodo}/>
          <DragDropContext onDragEnd={handleDragEnd}>
            <TodoList todos={filterTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>
          </DragDropContext>
          <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}/>
          <TodoFilter changeFilter={changeFilter} filter={filter}/>
        </main>

        <section className="text-center mt-6 dark:text-gray-400">
          <p>Arrastra y suelta para ordenar las tareas</p>
          <p>MⓇA</p>
        </section>
      </div>
    );
}

export default App;
