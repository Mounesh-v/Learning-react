import React, { useState } from "react";
import { movies } from "./data.js";

const Movie = () => {
  const [moviesList, setMoviesList] = useState(movies);
  const [activeFilter, setActiveFilter] = useState("All");

  const filterMovies = (category) => {
    setActiveFilter(category);
    if (category === "All") {
      setMoviesList(movies);
    } else {
      setMoviesList(movies.filter((data) => data.category === category));
    }
  };

  const categories = [
    { name: "All", icon: "🎬" },
    { name: "Action", icon: "⚡" },
    { name: "Sci-Fi", icon: "🚀" },
    { name: "Superhero", icon: "🦸" },
    { name: "Fantasy", icon: "🧙" },
    { name: "Romance", icon: "💕" },
    { name: "Drama", icon: "🎭" },
    { name: "Biography", icon: "📖" }
  ];

  return (
    <div className="container-fluid py-5" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", minHeight: "100vh" }}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-white mb-3">
            🎬 Movie Collection
          </h1>
          <p className="lead text-white-50">
            Discover amazing movies across different genres
          </p>
        </div>

        {/* Filter Buttons - Mobile Responsive */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-10">
            <div className="card shadow-lg border-0" style={{ borderRadius: "20px" }}>
              <div className="card-body p-4">
                <h5 className="card-title text-center mb-4 fw-bold text-dark">
                  Filter by Category
                </h5>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => filterMovies(category.name)}
                      type="button"
                      className={`btn btn-lg rounded-pill px-4 py-2 fw-semibold transition-all ${
                        activeFilter === category.name
                          ? "btn-primary shadow-lg"
                          : "btn-outline-primary"
                      }`}
                      style={{
                        minWidth: "120px",
                        transition: "all 0.3s ease",
                        transform: activeFilter === category.name ? "scale(1.05)" : "scale(1)"
                      }}
                    >
                      <span className="me-2">{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Movies Counter */}
        <div className="text-center mb-4">
          <h4 className="text-white">
            <span className="badge bg-light text-dark px-4 py-2 rounded-pill">
              {moviesList.length} Movies Found
            </span>
          </h4>
        </div>

        {/* Movies Grid - Enhanced Mobile Responsive */}
        <div className="row g-4">
          {moviesList.map((data) => (
            <div
              key={data.id}
              className="col-12 col-sm-6 col-md-4 col-xl-3 d-flex"
            >
              <div 
                className="card flex-fill shadow-lg border-0 h-100"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
                }}
              >
                <div className="position-relative">
                  <img
                    src={data.poster_path}
                    className="card-img-top"
                    alt={data.title}
                    style={{ 
                      height: "400px", 
                      objectFit: "cover",
                      transition: "transform 0.3s ease"
                    }}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300x400?text=No+Image";
                    }}
                  />
                  <div 
                    className="position-absolute top-0 end-0 m-3"
                  >
                    <span className="badge bg-primary px-3 py-2 rounded-pill fw-semibold">
                      {data.category}
                    </span>
                  </div>
                </div>
                
                <div className="card-body p-4 d-flex flex-column">
                  <h5 className="card-title fw-bold mb-3 text-dark" style={{ fontSize: "1.1rem" }}>
                    {data.title}
                  </h5>
                  
                  <div className="mt-auto">
                    <div className="d-flex align-items-center justify-content-between">
                      <small className="text-muted fw-semibold">
                        📅 {data.release_date}
                      </small>
                      <div className="d-flex gap-1">
                       {data.stars}
                      </div>
                    </div>
                    
                    <button 
                      className="btn btn-outline-primary btn-sm rounded-pill mt-3 w-100 fw-semibold"
                      style={{ transition: "all 0.3s ease" }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Movies Found State */}
        {moviesList.length === 0 && (
          <div className="text-center py-5">
            <div className="card shadow-lg border-0 d-inline-block" style={{ borderRadius: "20px" }}>
              <div className="card-body p-5">
                <h2 className="text-muted mb-3">🔍</h2>
                <h4 className="text-muted">No movies found</h4>
                <p className="text-muted">Try selecting a different category</p>
                <button 
                  onClick={() => filterMovies("All")}
                  className="btn btn-primary rounded-pill px-4"
                >
                  Show All Movies
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movie;
