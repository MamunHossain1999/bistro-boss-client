import React, { useEffect, useState } from "react";
import SectionTitle from "../../component/sectionTitle/SectionTitle";

const HomeCard = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading={"----Should Try----"}
        heading={"CHEF REXOMMENDS"}
      ></SectionTitle>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
     {cards.map((card) => (
        <div className="card card-compact bg-base-100 w-96 shadow-xl ">
          <figure>
            <img
              src={card.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{card.name}</h2>
            <p>{card.recipe}</p>
            <div className="card-actions justify-center">
              <button className="btn border-0 border-b-4 border-yellow-300 ">ADD TO CARD</button>
            </div>
          </div>
        </div>
      ))}
     </div>
    </section>
  );
};

export default HomeCard;
