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

    return (
      <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] dark:bg-gray-900 bg-no-repeat bg-contain bg-gray-300 min-h-screen">
        <Header/>
        <main className="container mx-auto px-4">
          <TodoCreate createTodo={createTodo}/>
          <TodoList todos={filterTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>
          <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}/>
          <TodoFilter changeFilter={changeFilter} filter={filter}/>
        </main>

        <section className="text-center mt-6 dark:text-gray-400">
          <p>Drag and drop to reorder list</p>
        </section>
      </div>
    );
}

export default App;
