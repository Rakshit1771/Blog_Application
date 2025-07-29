import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Store/authSlice";

function Navbar() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navItems = [
    // {
    //   name: "Home",
    //   path: "home",
    //   active: authStatus,
    // },
    {
      name: " My Posts",
      path: "mypost",
      active: authStatus,
    },
    {
      name: "Add Post",
      path: "addpost",
      active: authStatus,
    },
    {
      name: "Logout",
      path: "logout",
      active: authStatus,
      onClick: handleLogout,
    },
    {
      name: "Login",
      path: "login",
      active: !authStatus,
    },
    {
      name: "Register",
      path: "register",
      active: !authStatus,
    },
  ];

  return (
    <header className="head">
      <div className="navbar-container">
        <div className="logo">ThoughtVerse</div>
        <nav className="navbar">
          <ul className="nav-items">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    className="nav-button"
                    onClick={() =>
                      item.onClick ? item.onClick() : navigate(item.path)
                    }
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
