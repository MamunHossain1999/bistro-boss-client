import React, { useEffect, useState } from "react";
import SectionTitle from "../../component/sectionTitle/SectionTitle";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const HomeCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleAddToCard = (food) => {
    const { _id, name, image, price } = food; // Destructure from food
    if (user && user.email) {
      console.log("Adding food to cart:", food);
  
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
  
      // data card a post kora
   
      axiosSecure.post("/carts", cartItem)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to cart!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add items to your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("login", { state: { from: location } }); // Navigate to login page
        }
      });
    }
  };
  

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
              <img src={card.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{card.name}</h2>
              <p>{card.recipe}</p>
              <p>$: {card.price}</p>
              <div className="card-actions justify-center">
                <button
                  onClick={() => handleAddToCard(card)}
                  className="btn border-0 border-b-4 border-yellow-300 "
                >
                  ADD TO CARD
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCard;
