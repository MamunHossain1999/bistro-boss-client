import React from "react";

const BgPorallax = () => {
  return (
    <div
      className="hero h-[500px] "
      style={{
        backgroundImage: "url(src/assets/home/chef-service.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex items-center justify-center h-[400px] ">
        <div className="w-full border bg-white text-black text-center  py-24">
          <h1 className="mb-5 text-5xl font-bold">BISTRO BOSS</h1>
          <p className="w-8/12 text-center mx-auto">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BgPorallax;
