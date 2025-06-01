export const ProductCard = ({ name, price, image, isNew }) => {
    return (
      <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md">
        <img src={image} alt={name} className="w-full h-60 object-cover" />
        <div className="p-4">
          <h2 className="font-semibold text-lg">{name}</h2>
          <p className="text-gray-500">${price}</p>
          {isNew && <span className="text-sm bg-green-500 text-white px-2 py-1 rounded-full">New</span>}
        </div>
      </div>
    );
  };