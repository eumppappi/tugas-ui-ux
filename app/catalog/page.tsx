
import Header from "../../components/Header";
import BookCard from "../../components/BookCard";
import Button from "../../components/Button";

const catalogData = [
  {
    id: 1,
    title: "Metodologi Penelitian Humaniora",
    author: "Dr. Ahmad",
    category: "Riset",
    isAvailable: true
  },
  {
    id: 2,
    title: "Desain Antarmuka Modern",
    author: "Jane Doe",
    category: "UI/UX",
    isAvailable: false
  },
  {
    id: 3,
    title: "Arsitektur Informasi Digital",
    author: "R. Gartner",
    category: "Sistem",
    isAvailable: true
  }
];

export default function CatalogPage() {
  return (
    <main>
      <Header />

      <section className="max-w-6xl mx-auto p-8">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            Katalog Koleksi Digital
          </h1>

          <Button label="Jelajahi Koleksi" variant="secondary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {catalogData.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              category={book.category}
              isAvailable={book.isAvailable}
            />
          ))}
        </div>

      </section>
    </main>
  );
}
