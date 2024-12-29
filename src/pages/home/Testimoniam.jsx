import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SectionTitle from "../../component/sectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { ImQuotesLeft } from "react-icons/im";

const Testimoniam = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="my-20">
      <SectionTitle
        subHeading={"----What Our Client Say----"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <div className="py-10 ">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="text-center px-5">
                {/* DaisyUI Dynamic Rating */}
                <div className="rating justify-center mb-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <input
                      key={star}
                      type="radio"
                      name={`rating-${review._id}`}
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked={review.rating === star}
                      readOnly
                    />
                  ))}

                </div>
                <div className="w-full text-8xl  mx-auto flex justify-center ">
                < ImQuotesLeft />
                </div>
                <p className="mt-5 text-gray-600 italic md:w-[800px] mx-auto">{review.details}</p>
                <h3 className="text-2xl font-bold text-yellow-600 mt-3">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimoniam;
