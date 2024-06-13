import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center px-4 lg:px-8 py-4 bg-gray-300">
      {/* Left section */}
      <div className="text-lg md:text-l lg:text-l font-bold mx-8">
        <span className="hidden lg:inline">Reskill Frontend App</span>
      </div>
      
      {/* Right section */}
      <div className="text-sm md:text-base lg:text-lg  mx-8">
        <p className="inline-block mr-4">Page 1</p>
        <p className="inline-block mr-4">Page 2</p>
        <p className="inline-block mr-4">Page 3</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg" onClick={() => navigate("/posts")}>
          Home
        </button>
      </div>
    </header>
  );
};

export default Header;
