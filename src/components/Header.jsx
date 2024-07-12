import MoonIcon from "./icons/MoonIcon";

const Header = () => {
    return (
        <header className="container mx-auto px-4">
          <div className="flex justify-between">
            <h1 className="uppercase text-white text-3xl pt-8 font-bold tracking-[0.3em]">ToDo</h1>
            <button><MoonIcon className="fill-white"></MoonIcon></button>
          </div>
        </header>
    )
}
export default Header;