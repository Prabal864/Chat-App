import { Link } from "react-router-dom";
import { LandingWindow } from "../../components/spline/LandingWindow";
import DropDown from "../../components/dopDown/DropDown";

const Dashboard = () => {
    
  return (
    <div className="h-screen bg-gray-100 flex flex-col relative">
      {/* Header */}
      <header className="relative bg-transparent text-white py-4 shadow-gray-400 shadow-md z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-5xl font-bold">ChatApp</h1>
          <div className="absolute left-0 ">
            <DropDown/>
          </div>
          <nav className="flex space-x-4">
            <Link
              to="/signup"
              className="bg-white hover:bg-[#1d6478] hover:text-white text-black px-4 py-2 rounded-md font-bold text-lg"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-gray-200 hover:bg-gray-300 text-sky-900 px-4 py-2 rounded-md font-bold text-lg"
            >
              Log In
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="absolute" >
        <LandingWindow/>
      </div>
      {/* Footer */}
      <footer className= "bg-transparent absolute bottom-0 w-full text-white py-4 z-10 ">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 ChatApp. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
