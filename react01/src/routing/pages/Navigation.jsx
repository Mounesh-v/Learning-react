import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const Login = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  const Logout = () => {
    setIsLoggedIn(false);
    navigate("/")
  };
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-left">
          <Link to={"/"} className="nav-link home-link">
            Home
          </Link>
        </div>
        <div className="nav-right">
          {isLoggedIn && (
            <>
              <Link to={"/about"} className="nav-link">
                About
              </Link>
              <Link to={"/contact"} className="nav-link">
                Contact
              </Link>
              <Link to={"/product"} className="nav-link">
                Product
              </Link>
              <Link to={"/dashboard"} className="nav-link">
                Dashboard
              </Link>
              <Link to={"/profile"} className="nav-link">
                Profile
              </Link>
              <button className="nav-link" onClick={Logout}>
                Logout
              </button>
            </>
          )}
          {!isLoggedIn && (
            <>
              <button className="nav-link " onClick={Login}>
                Login
              </button>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .navigation {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-left {
          display: flex;
          align-items: center;
        }

        .nav-right {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-weight: 500;
          font-size: 1.1rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .nav-link::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          transition: left 0.3s ease;
          z-index: -1;
        }

        .nav-link:hover::before {
          left: 0;
        }

        .nav-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .home-link {
          font-size: 1.3rem;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .home-link:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 768px) {
          .nav-container {
            flex-direction: column;
            gap: 1rem;
            padding: 0 1rem;
          }

          .nav-right {
            gap: 1rem;
            flex-wrap: wrap;
            justify-content: center;
          }

          .nav-link {
            font-size: 1rem;
            padding: 0.4rem 0.8rem;
          }

          .home-link {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .nav-right {
            gap: 0.5rem;
          }

          .nav-link {
            font-size: 0.9rem;
            padding: 0.3rem 0.6rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
