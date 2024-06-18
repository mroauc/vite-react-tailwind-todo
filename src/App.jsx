import "./App.css";
import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

function App() {
    return (
      <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
        <header className="container mx-auto px-4">
          <div className="flex justify-between">
            <h1 className="uppercase text-white text-3xl pt-8 font-bold tracking-[0.3em]">ToDo</h1>
            <button><MoonIcon className="fill-orange-950"></MoonIcon></button>
          </div>
          <form className="bg-white rounded-md overflow-hidden py-4 flex gap-2 items-center px-4 my-5">
            <span className="rounded-full border-2 w-5 h-5 inline-block"> </span>
            <input type="text" className="w-full text-gray-400 outline-none" placeholder="Create a new todo..." />
          </form>
        </header>
        <main className="container mx-auto px-4">
          <div className="bg-white rounded-md px-4">
            <article className="flex gap-4 py-4 border-b-gray-400">
              <button className="rounded-full border-2 w-5 h-5"></button>
              <p className="grow">Complete online Javascript</p>
              <button ><CrossIcon></CrossIcon></button>
            </article>
            <article className="flex gap-4 py-4">
              <button className="rounded-full border-2 w-5 h-5"></button>
              <p className="grow">Complete online Javascript</p>
              <button ><CrossIcon></CrossIcon></button>
            </article>
            <article className="flex gap-4 py-4">
              <button className="rounded-full border-2 w-5 h-5"></button>
              <p className="grow">Complete online Javascript</p>
              <button ><CrossIcon></CrossIcon></button>
            </article>
            <article className="flex gap-4 py-4">
              <button className="rounded-full border-2 w-5 h-5"></button>
              <p className="grow">Complete online Javascript</p>
              <button ><CrossIcon></CrossIcon></button>
            </article>
            <article className="flex gap-4 py-4">
              <button className="rounded-full border-2 w-5 h-5"></button>
              <p className="grow">Complete online Javascript</p>
              <button ><CrossIcon></CrossIcon></button>
            </article>
            <section className="flex justify-between py-4 px-4">
              <span className="text-gray-400">5 items left</span>
              <button>Clear Completed</button>
            </section>
            
          </div>
        </main>

        <section className="container mx-auto px-4 mt-8">
          <div className="bg-white p-4 rounded-md flex justify-center gap-4">
            <button className="text-blue-600">All</button>
            <button className="hover:text-blue-600">Active</button>
            <button className="hover:text-blue-600">Completed</button>
          </div>
        </section>

        <section className="text-center mt-6">
          <p>Drag and drop to reorder list</p>
        </section>
      </div>
    );
}

export default App;
