import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex h-screen">
      <div className=" w-1/2 h-full">
        <img
          className="w-full h-full object-cover"
          src="src/assets/Landing page- scrolling photo.svg"
          alt=""
        />
      </div>
      <div className="w-1/2 h-full bg-homeBg ">
        <div className="pl-[84px] pt-[265px]">
          <div className="flex items-center gap-6">
            <h1 className="text-white text-[80px] font-black  uppercase">
              chess says{" "}
            </h1>
            <span className="text-neutral-800 text-xl font-bold  uppercase ">
              a lot about
            </span>
          </div>
          <h2 className="text-white text-[80px] font-black font-['Nunito'] uppercase">
            who we are
          </h2>
          <Link to="/personal">
            <button className=" flex items-center gap-3 outline-none mt-[102px] text-white px-6 py-[13px] bg-neutral-800 rounded-lg  ">
              Get Started
              <img
                className="w-6 h-6"
                src="src/assets/arrow-right-circle.svg"
                alt="arrow-right"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
