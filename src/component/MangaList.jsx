import { useState } from 'react';
import MangaCard from './MangaCard';
function MangaList(){
    const [mangaList, setMangaList] = useState([
        {
            id: 1,
            title: 'Jujutsu Kaisen',
            description: 'A dark fantasy action series that follows Yuji Itadori, a high school student with extraordinary physical strength',
            image: 'https://upload.wikimedia.org/wikipedia/uk/2/26/Jujutsu_Kaisen_volume1_cover.jpg'
          },
          {
            id: 2,
            title: 'Death Note',
            description: 'A high school student discovers a supernatural notebook that can kill anyone whose name is written in it and attempts to create a world free of crime.',
            image: 'https://static.yakaboo.ua/media/catalog/product/9/7/9781421539645_0.jpg'
          },
          {
            id: 3,
            title: 'Blue Lock',
            description: 'A high-stakes sports survival series where 300 young strikers compete in a grueling training facility to become Japan\'s ultimate "egoist" striker.',
            image: 'https://upload.wikimedia.org/wikipedia/en/c/c6/Blue_Lock_manga_volume_1.png'
          },
          {
            id: 4,
            title: 'The Apothecary Diaries',
            description: 'Set in a fictional Imperial China, a sharp-witted apothecary named Maomao uses her medical knowledge to solve mysteries within the Empero\'s palace.',
            image: 'https://m.media-amazon.com/images/M/MV5BNjAxMmFjZjgtYjM1ZS00NzdmLTliZDktZmIyMzU5YTBlNDBmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
          }
        ]);
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
        const [image, setImage] = useState('');

    const handleDelete = (id) => {
        setMangaList(mangaList.filter((manga) => manga.id !== id));
    };
    const handleAdd = () => {
        const newManga = {
            id: Date.now(),
            title: title,
            description: description,
            image: image
        }
        setMangaList([...mangaList, newManga]);
        setTitle('');
        setDescription('');
        setImage('');
    };
return(
   <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">My manga collection</h1>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8 flex flex-col gap-4 max-w-md mx-auto">
                <h2 className="text-xl text-white font-bold mb-2">Add new manga</h2>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500" 
                />
                <input 
                    type="text" 
                    placeholder="Image URL" 
                    value={image} 
                    onChange={(e) => setImage(e.target.value)}
                    className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500" 
                />
                <textarea 
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500 resize-none h-24" 
                />
                <button 
                    onClick={handleAdd}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                    Add to collection
                </button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {mangaList.map((manga) => (
                    <MangaCard 
                        key={manga.id} 
                        id={manga.id} 
                        title={manga.title} 
                        description={manga.description} 
                        image={manga.image} 
                        onDelete={handleDelete} 
                    />
                ))}
            </div>
        </div>
    
)
}
export default MangaList;