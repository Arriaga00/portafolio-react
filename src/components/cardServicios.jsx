

const cardServicios = ({nombre, descripcion}) => {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full h-32">
    <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
      <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
      <div className="flex-grow">
        <h2 className="text-white title-font font-medium \">{nombre}</h2>
        <p className="text-gray-600">{descripcion}</p>
      </div>
    </div>
  </div>
  )
}

export default cardServicios