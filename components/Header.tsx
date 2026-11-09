export default function Header() {
  return (
    <header className="bg-blue-700 text-white px-8 py-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Perpustakaan Digital
        </h1>

        <div className="flex gap-6">
          <a href="/">Beranda</a>
          <a href="/catalog">Katalog</a>
          <a href="/about">Tentang</a>
        </div>

        <span>Login</span>
      </nav>
    </header>
  );
}