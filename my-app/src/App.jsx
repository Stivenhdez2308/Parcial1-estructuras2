import { useState } from "react";

export default function ImageGallery() {
  const [images, setImages] = useState([
    { id: 28, title: "Paisaje" },
    { id: 103, title: "Tranquilidad" },
    { id: 65, title: "Atardecer" }
  ]);
  const [search, setSearch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newId, setNewId] = useState("");

  const addImage = () => {
    if (newId && newTitle) {
      setImages([...images, { id: newId, title: newTitle }]);
      setNewId("");
      setNewTitle("");
    }
  };

  const filteredImages = images.filter((image) =>
    image.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Buscar por título"
        className="border p-2 w-full mb-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="ID de imagen"
          className="border p-2 flex-1"
          value={newId}
          onChange={(e) => setNewId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Título"
          className="border p-2 flex-1"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2" onClick={addImage}>
          Agregar
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {filteredImages.map((image) => (
          <a
            key={image.id}
            href={`https://picsum.photos/id/${image.id}/500/300`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`https://picsum.photos/id/${image.id}/200/150`}
              alt={image.title}
              className="w-full h-auto border"
            />
            <p className="text-center text-sm mt-1">{image.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
