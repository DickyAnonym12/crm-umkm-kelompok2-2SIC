export const HeroBanner = () => {
    return (
      <section className="relative bg-gray-100 h-[500px] flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">Summer Collection</h1>
          <p className="mt-4 text-lg text-gray-600">Discover our new arrivals</p>
          <button className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800">Shop Now</button>
        </div>
      </section>
    );
  };