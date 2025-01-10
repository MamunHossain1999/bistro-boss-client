import { Parallax } from "react-parallax";

const Cover = ({ img, title, subtitle }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="Cover image"
      strength={-200}
    >
      <div className="hero h-[500px]">
        <div className="hero-overlay bg-black bg-opacity-30"></div>
        <div className="w-full hero-content flex items-center justify-center h-[400px]">
          <div className="w-10/12 border bg-black bg-opacity-70 text-white text-center py-24">
            <h1 className="mb-5 text-5xl font-bold text-white">{title}</h1>
            {subtitle && (
              <p className="w-10/12 text-center mx-auto">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
