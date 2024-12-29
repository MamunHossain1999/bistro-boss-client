const MenuItems = ({ item }) => {
    const { name, image, price, recipe } = item;
  
    return (
   <div>
       <div className="w-10/12 mx-auto  flex flex-col md:flex-row gap-4 my-3 items-center">
        {/* Image Section */}
        <img
          className="w-full md:w-20 h-20 object-cover rounded-tr-3xl rounded-br-3xl rounded-bl-3xl"
          src={image}
          alt={name}
        />
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="uppercase font-bold text-lg">
            {name} <span className="text-gray-400">----------</span>
          </h2>
          <p className="text-sm text-gray-600">{recipe}</p>
        </div>
  
        {/* Price Section */}
        <p className="text-yellow-600 font-bold text-lg">${price}</p>
        
      </div>
     
   </div>
    );
  };
  
  export default MenuItems;
  