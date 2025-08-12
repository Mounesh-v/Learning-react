import React, { useEffect, useState } from "react";

const DataFectchingApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const api = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await api.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid py-5" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", minHeight: "100vh" }}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-white mb-3">
            📡 API Data Fetching
          </h1>
          <p className="lead text-white-50 mb-4">
            Fetching posts from JSONPlaceholder API
          </p>
          
          {/* Fetch Button */}
          <button 
            onClick={fetchData}
            disabled={loading}
            className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-semibold shadow-lg"
            style={{ transition: "all 0.3s ease" }}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Fetching...
              </>
            ) : (
              <>
                🔄 Refresh Data
              </>
            )}
          </button>
        </div>

        {/* Data Counter */}
        <div className="text-center mb-4">
          <h4 className="text-white">
            <span className="badge bg-light text-dark px-4 py-2 rounded-pill">
              {data.length} Posts Loaded
            </span>
          </h4>
        </div>

        {/* Posts Grid - Responsive Layout */}
        <div className="row g-4">
          {data.map((post) => (
            <div key={post.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div 
                className="card h-100 shadow-lg border-0"
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
                <div className="card-header bg-primary text-white text-center py-3">
                  <h5 className="mb-0 fw-bold">Post #{post.id}</h5>
                </div>
                
                <div className="card-body p-4 d-flex flex-column">
                  <h6 className="card-title fw-bold mb-3 text-dark" style={{ fontSize: "1.1rem" }}>
                    {post.title}
                  </h6>
                  
                  <p className="card-text text-muted flex-grow-1" style={{ 
                    lineHeight: "1.6",
                    wordWrap: "break-word",
                    overflowWrap: "break-word"
                  }}>
                    {post.body}
                  </p>
                  
                  <div className="mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">
                        📝 User ID: {post.userId}
                      </small>
                      <span className="badge bg-success rounded-pill">
                        Active
                      </span>
                    </div>
                    
                    <button 
                      className="btn btn-outline-primary btn-sm rounded-pill mt-3 w-100 fw-semibold"
                      style={{ transition: "all 0.3s ease" }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-light" style={{ width: "3rem", height: "3rem" }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="text-white mt-3">Loading posts...</p>
          </div>
        )}

        {/* No Data State */}
        {!loading && data.length === 0 && (
          <div className="text-center py-5">
            <div className="card shadow-lg border-0 d-inline-block" style={{ borderRadius: "20px" }}>
              <div className="card-body p-5">
                <h2 className="text-muted mb-3">📭</h2>
                <h4 className="text-muted">No posts available</h4>
                <p className="text-muted">Click the button above to fetch posts</p>
                <button 
                  onClick={fetchData}
                  className="btn btn-primary rounded-pill px-4"
                >
                  Fetch Posts
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataFectchingApi;
