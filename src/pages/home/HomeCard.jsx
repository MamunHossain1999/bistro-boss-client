import React, {  useEffect, useState } from "react";
import SectionTitle from "../../component/sectionTitle/SectionTitle";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const HomeCard = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {user} = useAuth()
  const handleAddToCard = food =>{
    if(user && user.email){
        console.log('adding food to cart ', food)
    }else{
      Swal.fire({
        title: "You are not login",
        text: "please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        // send the user login page
        if (result.isConfirmed) {
          navigate('login', {state:{from: location}})
        }
      });
    }
  }

  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
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
              <button onClick={()=> handleAddToCard(card)} className="btn border-0 border-b-4 border-yellow-300 ">ADD TO CARD</button>
            </div>
          </div>
        </div>
      ))}
     </div>
    </section>
  );
};

export default HomeCard;
