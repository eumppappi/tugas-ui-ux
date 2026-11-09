
import Button from "./Button";

interface BookCardProps {
  title: string;
  author: string;
  category: string;
  isAvailable: boolean;
}

export default function BookCard({
  title,
  author,
  category,
  isAvailable
}: BookCardProps) {
  return (
    <div className="border rounded-lg p-5 shadow-sm">

      <span className="text-xs font-semibold text-blue-600">
        {category}
      </span>

      <h3 className="text-lg font-bold mt-2">
        {title}
      </h3>

      <p className="text-sm text-gray-600 mb-4">
        Penulis: {author}
      </p>

      <div className="flex justify-between items-center">
        <span className={`text-xs px-2 py-1 rounded ${
          isAvailable
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}>
          {isAvailable ? "Tersedia" : "Dipinjam"}
        </span>

        <Button
          label={isAvailable ? "Pinjam E-Book" : "Reservasi"}
        />
      </div>

    </div>
  );
}
