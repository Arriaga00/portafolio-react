
const Separador = ({name}) => {
  return (
    <div className="container mx-auto flex items-center p-5">
        <h1 className="text-2xl font-bold mr-4 mb-2 dark:text-[#3a4971]">{name}</h1>
        <hr className="flex-grow border-t border-gray-300 dark:border-[#26304b]" />
    </div>
  )
}

export default Separador