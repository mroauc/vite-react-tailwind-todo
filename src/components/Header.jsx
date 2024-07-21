import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const initialStateDarkMode = localStorage.getItem('theme') == 'dark';

const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);
  useEffect(() => {
    // trabaja con el nuevo valor de darkMode
    if(darkMode){
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
    else{
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [darkMode]);

  return (
      <header className="container mx-auto px-4 md:max-w-xl">
        <div className="flex justify-between">
          <h1 className="text-white text-3xl pt-8 font-bold">TAREAS</h1>
          <button onClick={() => setDarkMode(!darkMode)}>
            {
              darkMode ? <SunIcon className="fill-white"></SunIcon> : <MoonIcon className="fill-white"></MoonIcon>
            }
          </button>
        </div>
      </header>
  )
}
export default Header;