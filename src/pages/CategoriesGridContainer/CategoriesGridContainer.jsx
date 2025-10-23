import CategoriesGrid from "../components/CategoriesGrid/CategoriesGrid";

export default function CategoriesGridContainer() {
  const categories = [
    { title: "Heladeras", image: "/imgs/cats/fridge.jpg" },
    { title: "Televisores", image: "/imgs/cats/tv.jpg" },
    { title: "Audio", image: "/imgs/cats/audio.jpg" },
    { title: "Cocina", image: "/imgs/cats/kitchen.jpg" },
    { title: "Lavarropas", image: "/imgs/cats/wash.jpg" },
  ];

  const handleSelectCategory = (cat) => {
    console.log("Seleccionaste:", cat.title);
    // acá podrías navegar: navigate(`/categoria/${cat.title.toLowerCase()}`)
  };

  return (
    <section className="px-4 py-6">
      <h1 className="text-lg font-semibold mb-4">Categorías</h1>
      <CategoriesGrid categories={categories} onSelect={handleSelectCategory} />
    </section>
  );
}
