const FoodCard = ({ item }) => {
    const { name, image, recipe } = item;


    return (
      <div className="card card-compact bg-base-100 w-96 shadow-xl mt-5 mb-5">
        <figure className="overflow-hidden relative">
          <img
            src={image}
            alt={name}
            className="transition-transform transform hover:scale-110 duration-300"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button  className="btn btn-outline border-0 border-b-4 mt-3 text-black">
              ADD TO CARD
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default FoodCard;
  