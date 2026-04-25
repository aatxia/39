function MangaCard({id, title, description, image, onDelete}){
        return( 
        <div className="bg-gray-800 text-white border-4 border-solid border-[#475569] rounded-lg p-4 w-full flex flex-col h-full">
            <img src={image} alt={title} className="w-full h-80 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-300 text-sm mb-4 grow line-clamp-5">{description}</p>
            <button 
                onClick={() => onDelete(id)} 
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors mt-auto"
            >
                Delete
            </button>
        </div>
    )
}

export default MangaCard;