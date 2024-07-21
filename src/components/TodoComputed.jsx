const TodoComputed = ({computedItemsLeft, clearCompleted}) => {
    return (
        <section className="flex justify-between py-4 px-4 bg-white rounded-b-md dark:bg-gray-800">
            <span className="text-gray-400">{computedItemsLeft > 1 ? 'Quedan' : 'Queda'} {computedItemsLeft} tareas</span>
            <button onClick={() => clearCompleted()} className="dark:text-gray-400">Borrar Completados</button>
        </section>
    )
}
export default TodoComputed;