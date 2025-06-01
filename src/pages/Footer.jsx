export const Footer = () => {
    return (
      <footer className="bg-black text-white p-6 mt-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="font-bold text-lg">Eren</h3>
            <p className="text-gray-400">Modern fashion for everyone.</p>
          </div>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#">About Us</a>
            <a href="#">Shipping</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="mt-4 md:mt-0">
            <p>Follow us:</p>
            <div className="space-x-2">
              <button>📘</button>
              <button>📸</button>
              <button>🐦</button>
            </div>
          </div>
        </div>
      </footer>
    );
  };