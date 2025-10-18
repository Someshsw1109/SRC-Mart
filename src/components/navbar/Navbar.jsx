import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "../searchBar/SearchBar";
import { useState } from "react";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  const cartItems = useSelector((state) => state.cart);

  const navList = (
    <ul
      className={`flex lg:flex-row flex-col space-y-2 lg:space-y-0 lg:space-x-3 text-white font-medium text-md px-5 ${
        open ? "block" : "hidden lg:flex"
      }`}
    >
      {/* Home */}
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      {/* All Product */}
      <li>
        <Link to={"/allproduct"}>All Product</Link>
      </li>
      {/* Signup */}
      {!user && (
        <li>
          <Link to={"/signup"}>Signup</Link>
        </li>
      )}
      {/* Login */}
      {!user && (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      )}
      {/* User */}
      {user?.role === "user" && (
        <li>
          <Link to={"/user-dashboard"}>User</Link>
        </li>
      )}
      {/* Admin */}
      {user?.role === "admin" && (
        <li>
          <Link to={"/admin-dashboard"}>Admin</Link>
        </li>
      )}
      {/* logout */}
      {user && (
        <li className="cursor-pointer" onClick={logout}>
          logout
        </li>
      )}
      {/* Cart */}
      <li>
        <Link to={"/cart"}>Cart({cartItems.length})</Link>
      </li>
    </ul>
  );

  return (
    <nav className="bg-purple-600 sticky top-0 z-50">
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
        <div className="left py-3 lg:py-0 flex justify-between items-center px-4 lg:px-0">
          <Link to={"/"}>
            <h2 className="font-bold text-white text-2xl text-center">
              SRC-Mart
            </h2>
          </Link>
          <div className="lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div className="right hidden lg:flex items-center">{navList}</div>
        <div className="lg:hidden">{navList}</div>
        <div className="hidden lg:block">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;