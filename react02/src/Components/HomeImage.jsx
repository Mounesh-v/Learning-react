import React, { useContext } from "react";
import ImageContext from "../Context/ImageContext";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeImage = () => {
  const { images, loading } = useContext(ImageContext);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center bg-light"
        style={{ height: "60vh" }}
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "4rem", height: "4rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      {/* Navbar with categories */}
      <Navbar />

      {/* Heading */}
      <h2
        className="text-center mb-5 fw-bold"
        style={{
          letterSpacing: "2px",
          color: "#212529",
          fontSize: "2rem",
          textTransform: "uppercase",
        }}
      >
        Image Gallery
        <div
          style={{
            width: "80px",
            height: "3px",
            backgroundColor: "#0d6efd",
            margin: "0.5rem auto 0",
          }}
        ></div>
      </h2>

      {/* Image Grid */}
      <div className="row g-4">
        {images.map((data) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={data.id}>
            <div
              className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0,0,0,0.1)";
              }}
            >
              {/* Badge for views */}
              {data.views && (
                <span
                  className="badge bg-primary position-absolute"
                  style={{
                    top: "10px",
                    right: "10px",
                    fontSize: "0.8rem",
                    padding: "0.4rem 0.6rem",
                    borderRadius: "8px",
                  }}
                >
                  👁 {data.views.toLocaleString()}
                </span>
              )}

              {/* Image */}
              <img
                src={data.largeImageURL}
                className="card-img-top"
                alt={data.tags}
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderTopLeftRadius: "0.75rem",
                  borderTopRightRadius: "0.75rem",
                }}
              />

              {/* Card Body */}
              <div className="card-body d-flex flex-column justify-content-between">
                {data.user && (
                  <p
                    className="text-muted text-center mb-3"
                    style={{ fontSize: "0.9rem" }}
                  >
                    📷 Photographer: {data.user}
                  </p>
                )}
                <div className="d-flex justify-content-center">
                  <a
                    href={data.pageURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm rounded-pill px-4"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeImage;
