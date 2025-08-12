import React, { useContext, useState } from "react";
import ImageContext from "../Context/ImageContext";

const Navbar = () => {
  const { FetchedCategory, FetchImages, setQuery } = useContext(ImageContext);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    setQuery(searchText); // update query state
    FetchImages(searchText); // fetch images based on input
  };

  return (
    <div className="container text-center my-4">
      {/* Category Buttons */}
      <div className="mb-4">
        {[
          { name: "Backgrounds", value: "background", color: "primary" },
          { name: "Fashion", value: "fashion", color: "secondary" },
          { name: "Nature", value: "nature", color: "success" },
          { name: "Science", value: "science", color: "danger" },
          { name: "Feelings", value: "feelings", color: "warning" },
          { name: "Music", value: "music", color: "info" },
          { name: "Travel", value: "travel", color: "dark" },
          { name: "Animals", value: "animals", color: "info" },
          { name: "Food", value: "food", color: "dark" }
        ].map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => FetchedCategory(cat.value)}
            className={`btn btn-outline-${cat.color} mx-1`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="d-flex justify-content-center">
        <div className="input-group" style={{ maxWidth: "500px" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search for images..."
            aria-label="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            <i className="bi bi-search"></i> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
