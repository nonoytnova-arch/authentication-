import { useState } from "react";

const categories = [
  "All Categories",
  "Alexa Skills",
  "Amazon Devices",
  "Amazon Fashion",
  "Books",
  "Electronics",
  "Furniture",
  "Grocery",
  "Home & Kitchen",
  "Mobiles",
  "Prime Video"
];

function Navbar() {
  const [category, setCategory] = useState("All");

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt="Amazon"
      />
      </div>

      {/* Location */}
      <div className="nav-location">
        <small>Hello</small>
        <strong>Select your address</strong>
      </div>

      {/* Search */}
      <div className="nav-search">
        <select
          className="search-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <input
          type="text"
          className="search-input"
          placeholder="Search Amazon.in"
        />

        <button className="search-btn">🔍</button>

      </div>

      {/* Country */}
      <div className="nav-country">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
          alt="India"
        />
        <span>EN</span>
      </div>

      {/* Account */}
      <div className="nav-item">
        <small>Hello, sign in</small>
        <strong>Account & Lists</strong>
      </div>

      {/* Orders */}
      <div className="nav-item">
        <small>Returns</small>
        <strong>& Orders</strong>
      </div>

      {/* Cart */}
      <div className="nav-cart">
        🛒 <strong>Cart</strong>
      </div>
    </header>
  );
}

export default Navbar;
