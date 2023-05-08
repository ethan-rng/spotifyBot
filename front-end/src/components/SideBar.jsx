import { Link } from "react-router-dom";


const SideBar = () => {
    return (
        <div className= "fixed top-0 left-0 h-screen w-16 m-0 \
                        flex flex-col \
                        bg-gray-900 text-white shadow-lg">
          <Link to="/" className="navbar-logo">
            ffff
          </Link>
        </div>
    )
};

export default SideBar;