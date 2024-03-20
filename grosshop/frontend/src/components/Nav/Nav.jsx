import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import "./Nav.scss";

const Navigation = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState("Home");

  useEffect(() => {
    // Aktuelle Seite basierend auf dem Pfad setzen
    const pathName = location.pathname.split("/")[1]; // Annahme: Pfad hat die Form "/pageName"
    setActivePage(pathName.charAt(0).toUpperCase() + pathName.slice(1));
  }, [location]);

  const handlePageClick = (pageName) => {
    setActivePage(pageName);
  };

  return (
    <nav className="nav">
      <Link to="/home">
        <MenuItem
          pageName="Home"
          isActive={activePage === "Home"}
          handleClick={handlePageClick}
        />
      </Link>
      <Link to="/orders">
        <MenuItem
          pageName="Orders"
          isActive={activePage === "Orders"}
          handleClick={handlePageClick}
        />
      </Link>
      <Link
        to="/cart"
        className={`cart-link ${activePage === "Cart" ? "active" : ""}`}
        onClick={() => handlePageClick("Cart")}
      >
        <img src="/Cart-green.svg" alt="Cart" />
      </Link>
      <Link to="/wishlist">
        <MenuItem
          pageName="Wishlist"
          isActive={activePage === "Wishlist"}
          handleClick={handlePageClick}
        />
      </Link>
      <Link to="/profile">
        <MenuItem
          pageName="Profile"
          isActive={activePage === "Profile"}
          handleClick={handlePageClick}
        />
      </Link>
    </nav>
  );
};

export default Navigation;
