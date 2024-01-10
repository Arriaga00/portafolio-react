
const Separador = ({name}) => {
  return (
    <div className="container mx-auto flex items-center p-5">
        <h1 className="text-2xl font-bold mr-4 mb-2">{name}</h1>
        <hr className="flex-grow border-t border-gray-300" />
    </div>
  )
}

export default Separador