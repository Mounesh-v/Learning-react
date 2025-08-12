import React, { useEffect, useState } from "react";

const Meal = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
      
      const data = await response.json();
      setFetchedData(data.meals || []);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching meals:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loading}>Loading Canadian meals...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.container}>
        <div style={styles.error}>Error: {error}</div>
        <button 
          onClick={fetchData} 
          style={styles.retryButton}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.headerBlock}>
        <h1 style={styles.title}>Canadian Meals</h1>
        <p style={styles.subtitle}>Discover vibrant flavors from the north</p>
      </div>

      <div style={styles.mealsGrid}>
        {fetchedData.map((item) => {
          const isHovered = hoveredId === item.idMeal;
          return (
            <div 
              key={item.idMeal}
              style={styles.cardWrapper}
              onMouseEnter={() => setHoveredId(item.idMeal)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div 
                style={{
                  ...styles.mealCard,
                  ...(isHovered ? styles.mealCardHover : {})
                }}
              >
                <div style={styles.imageWrap}>
                  <img 
                    src={item.strMealThumb} 
                    alt={item.strMeal} 
                    style={styles.mealImage}
                  />

                  <div style={{
                    ...styles.topChip,
                    ...(isHovered ? styles.topChipHover : {})
                  }}>Canadian</div>

                  <div style={{
                    ...styles.imageOverlay,
                    opacity: isHovered ? 1 : 0
                  }} />

                  <button 
                    style={{
                      ...styles.viewButton,
                      transform: isHovered ? 'translate(-50%, 0) scale(1)' : 'translate(-50%, 10px) scale(0.95)',
                      boxShadow: isHovered ? '0 8px 20px rgba(0,0,0,0.25)' : '0 4px 10px rgba(0,0,0,0.15)'
                    }}
                  >
                    View Recipe
                  </button>
                </div>

                <div style={styles.cardBody}>
                  <h3 style={styles.mealName}>{item.strMeal}</h3>
                  <div style={styles.accentBar} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '24px',
    maxWidth: '1240px',
    margin: '0 auto',
    fontFamily: 'Inter, Segoe UI, Roboto, Arial, sans-serif',
    background: 'linear-gradient(135deg, #fde7f9 0%, #e6f4ff 50%, #e8ffe6 100%)',
    minHeight: '100vh'
  },
  headerBlock: {
    textAlign: 'center',
    marginBottom: '28px'
  },
  title: {
    margin: 0,
    fontSize: '2.8rem',
    fontWeight: 800,
    letterSpacing: '-0.5px',
    backgroundImage: 'linear-gradient(90deg, #ff7a7a, #ffb36b, #6bbcff, #6be2a1)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent'
  },
  subtitle: {
    marginTop: '8px',
    color: '#445',
    opacity: 0.8
  },
  mealsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '22px',
    padding: '8px 0 24px'
  },
  cardWrapper: {
    background: 'linear-gradient(135deg, #ffd2e3, #d8e7ff, #d7ffd6)',
    padding: '1px',
    borderRadius: '16px'
  },
  mealCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    transition: 'transform 0.35s ease, box-shadow 0.35s ease',
    cursor: 'pointer',
    transform: 'translateY(0)'
  },
  mealCardHover: {
    transform: 'translateY(-6px)',
    boxShadow: '0 14px 28px rgba(0,0,0,0.15)'
  },
  imageWrap: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden'
  },
  mealImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transform: 'scale(1)',
    transition: 'transform 0.5s ease'
  },
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)',
    transition: 'opacity 0.35s ease',
    pointerEvents: 'none'
  },
  topChip: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: 'linear-gradient(90deg, #ff7a7a, #ffb36b)',
    color: 'white',
    fontSize: '12px',
    padding: '6px 10px',
    borderRadius: '999px',
    boxShadow: '0 6px 14px rgba(255,122,122,0.35)',
    transform: 'scale(0.98)',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease'
  },
  topChipHover: {
    transform: 'scale(1)',
    boxShadow: '0 8px 20px rgba(255,122,122,0.45)'
  },
  viewButton: {
    position: 'absolute',
    left: '50%',
    bottom: '12px',
    transform: 'translate(-50%, 10px) scale(0.95)',
    background: 'linear-gradient(90deg, #6bbcff, #6be2a1)',
    color: 'white',
    border: 'none',
    borderRadius: '999px',
    padding: '10px 16px',
    fontSize: '0.9rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease'
  },
  cardBody: {
    padding: '14px 14px 18px'
  },
  mealName: {
    margin: 0,
    fontSize: '1.05rem',
    fontWeight: 700,
    color: '#253'
  },
  accentBar: {
    height: '4px',
    width: '60px',
    marginTop: '10px',
    borderRadius: '999px',
    background: 'linear-gradient(90deg, #ff7a7a, #ffb36b, #6bbcff, #6be2a1)'
  },
  loading: {
    textAlign: 'center',
    fontSize: '1.5rem',
    color: '#334',
    padding: '60px'
  },
  error: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#d32f2f',
    padding: '20px',
    backgroundColor: '#ffebee',
    borderRadius: '10px',
    marginBottom: '16px'
  },
  retryButton: {
    display: 'block',
    margin: '0 auto',
    padding: '12px 24px',
    background: 'linear-gradient(90deg, #ff7a7a, #ffb36b)',
    color: 'white',
    border: 'none',
    borderRadius: '999px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'opacity 0.3s ease'
  }
};

export default Meal;
