import React from "react";
import "../styles/Navbar.css";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");

  const handleSearch = async () => {
    await axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => {
        setSearch("");
        navigate(`/recipie/${response.data.meals[0].idMeal}`);
      })
      .catch(() => {
        navigate("/");
        setSearch("");
        alert("No such recipe found!!");
      });
  };

  return (
    <nav className="navbar">
      {/* Center - Title + Search */}
      <div className="nav-center">
        <h1 className="title">Cookery Book</h1>
        <div className="search-bar">
          <span>
            <IoSearch className="nav-search-icon" />
            <input
              type="text"
              placeholder="Search recipes..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </span>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* Right - Home + Contact */}
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
