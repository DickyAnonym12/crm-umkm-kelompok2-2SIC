export const HeaderGuest = () => {
    return (
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="text-2xl font-bold">Eren</div>
        <nav className="space-x-4">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">Shop</a>
          <a href="#" className="hover:text-blue-500">Blog</a>
          <a href="#" className="hover:text-blue-500">Contact</a>
        </nav>
        <div className="space-x-4">
          <button>🧑</button>
          <button>❤️</button>
          <button>🛒</button>
        </div>
      </header>
    );
  };