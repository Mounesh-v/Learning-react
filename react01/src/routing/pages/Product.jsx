import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Product = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const navigate = useNavigate();

  const goAbout = () => {
    navigate("/about");
  };

  const courses = [
    {
      id: "MernS001",
      course_name: "MERN Stack",
      price: 1200,
      duration: "6 months",
      level: "Beginner",
      seats: 25,
    },
    {
      id: "JavaFS002",
      course_name: "Java Full Stack",
      price: 20000,
      duration: "7 months",
      level: "Intermediate",
      seats: 30,
    },
    {
      id: "PyFS003",
      course_name: "Python Full Stack",
      price: 30000,
      duration: "10 months",
      level: "Advanced",
      seats: 20,
    },
    {
      id: "ReactC004",
      course_name: "React Course",
      price: 35000,
      duration: "6 months",
      level: "Beginner",
      seats: 40,
    },
    {
      id: "NodeJS005",
      course_name: "Node.js Backend Development",
      price: 15000,
      duration: "5 months",
      level: "Intermediate",
      seats: 25,
    },
    {
      id: "AngularC006",
      course_name: "Angular Development",
      price: 18000,
      duration: "5 months",
      level: "Intermediate",
      seats: 30,
    },
    {
      id: "VueJS007",
      course_name: "Vue.js Development",
      price: 17000,
      duration: "4 months",
      level: "Beginner",
      seats: 35,
    },
    {
      id: "PHPFS008",
      course_name: "PHP Full Stack",
      price: 22000,
      duration: "8 months",
      level: "Intermediate",
      seats: 28,
    },
    {
      id: "DotNetFS009",
      course_name: ".NET Full Stack",
      price: 25000,
      duration: "9 months",
      level: "Advanced",
      seats: 20,
    },
    {
      id: "DSA010",
      course_name: "Data Structures & Algorithms",
      price: 10000,
      duration: "4 months",
      level: "Intermediate",
      seats: 40,
    },
    {
      id: "AI011",
      course_name: "Artificial Intelligence",
      price: 45000,
      duration: "12 months",
      level: "Advanced",
      seats: 15,
    },
    {
      id: "ML012",
      course_name: "Machine Learning",
      price: 40000,
      duration: "10 months",
      level: "Advanced",
      seats: 20,
    },
    {
      id: "DL013",
      course_name: "Deep Learning",
      price: 50000,
      duration: "12 months",
      level: "Advanced",
      seats: 15,
    },
    {
      id: "DS014",
      course_name: "Data Science",
      price: 42000,
      duration: "10 months",
      level: "Advanced",
      seats: 18,
    },
    {
      id: "CC015",
      course_name: "Cloud Computing",
      price: 35000,
      duration: "8 months",
      level: "Intermediate",
      seats: 25,
    },
    {
      id: "AWS016",
      course_name: "AWS Solutions Architect",
      price: 38000,
      duration: "6 months",
      level: "Advanced",
      seats: 20,
    },
    {
      id: "Azure017",
      course_name: "Microsoft Azure Fundamentals",
      price: 34000,
      duration: "6 months",
      level: "Intermediate",
      seats: 25,
    },
    {
      id: "GCP018",
      course_name: "Google Cloud Platform",
      price: 35000,
      duration: "6 months",
      level: "Intermediate",
      seats: 20,
    },
    {
      id: "DevOps019",
      course_name: "DevOps with CI/CD",
      price: 30000,
      duration: "5 months",
      level: "Intermediate",
      seats: 25,
    },
    {
      id: "Cyber020",
      course_name: "Cyber Security",
      price: 40000,
      duration: "9 months",
      level: "Advanced",
      seats: 15,
    },
    {
      id: "EthHack021",
      course_name: "Ethical Hacking",
      price: 35000,
      duration: "8 months",
      level: "Intermediate",
      seats: 20,
    },
    {
      id: "UIUX022",
      course_name: "UI/UX Design",
      price: 15000,
      duration: "4 months",
      level: "Beginner",
      seats: 35,
    },
    {
      id: "Flutter023",
      course_name: "Flutter App Development",
      price: 20000,
      duration: "5 months",
      level: "Beginner",
      seats: 30,
    },
    {
      id: "Android024",
      course_name: "Android Development (Java/Kotlin)",
      price: 25000,
      duration: "6 months",
      level: "Intermediate",
      seats: 28,
    },
    {
      id: "iOS025",
      course_name: "iOS Development (Swift)",
      price: 28000,
      duration: "6 months",
      level: "Intermediate",
      seats: 25,
    },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.headerBlock}>
        <h1 style={styles.title}>Available Courses</h1>
        <p style={styles.subtitle}>Pick a track and start your journey today</p>
      </header>

      <div style={styles.grid}>
        {courses.map((course) => (
          <div key={course.id} style={styles.cardOuter}>
            <div
              style={{
                ...styles.card,
                ...(hoveredId === course.id ? styles.cardHover : {}),
              }}
              onMouseEnter={() => setHoveredId(course.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div style={styles.cardBody}>
                <h2 style={styles.courseName}>{course.course_name}</h2>

                <div style={styles.metaRow}>
                  <span style={styles.pill}>Duration: {course.duration}</span>
                  <span style={styles.price}>
                    ₹{course.price.toLocaleString()}
                  </span>
                </div>

                <div style={styles.progressBarWrap}>
                  <div style={styles.progressBarFill} />
                </div>

                <button
                  style={{
                    ...styles.ctaButton,
                    ...(hoveredId === course.id ? styles.ctaButtonHover : {}),
                  }}
                >
                  <Link style={styles.linkReset} to={`/product/${course.id}`}>
                    Course Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
        <button class="bg-primary border-2 p-2 my-2 cursor-pointer mx-auto block" onClick={goAbout}>About</button>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    padding: "28px 22px",
    background:
      "linear-gradient(135deg, #fff1f7 0%, #eef6ff 50%, #eafff3 100%)",
    fontFamily: "Inter, Segoe UI, Roboto, Arial, sans-serif",
  },
  headerBlock: {
    textAlign: "center",
    margin: "0 auto 22px",
  },
  title: {
    margin: 0,
    fontSize: "2.4rem",
    fontWeight: 800,
    letterSpacing: "-0.4px",
    backgroundImage:
      "linear-gradient(90deg, #ff7a7a, #ffb36b, #6bbcff, #6be2a1)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  },
  subtitle: {
    marginTop: 8,
    color: "#475569",
    opacity: 0.85,
  },
  grid: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: 20,
  },
  cardOuter: {
    padding: 1,
    borderRadius: 16,
    background: "linear-gradient(135deg, #ffd8e6, #d9e7ff, #d9ffe2)",
  },
  card: {
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 8px 22px rgba(2, 6, 23, 0.08)",
    overflow: "hidden",
    transition: "transform .3s ease, box-shadow .3s ease",
    transform: "translateY(0)",
  },
  cardHover: {
    transform: "translateY(-6px)",
    boxShadow: "0 16px 36px rgba(2, 6, 23, 0.12)",
  },
  cardBody: {
    padding: "18px 16px 20px",
  },
  courseName: {
    margin: 0,
    fontSize: "1.15rem",
    fontWeight: 800,
    color: "#0f172a",
  },
  metaRow: {
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pill: {
    fontSize: 12,
    color: "#0f172a",
    background: "linear-gradient(90deg, #e0f2fe, #dcfce7)",
    borderRadius: 999,
    padding: "6px 10px",
    fontWeight: 600,
  },
  price: {
    fontWeight: 800,
    color: "#0ea5e9",
    background: "linear-gradient(90deg, #e0f2fe, #ffedd5)",
    borderRadius: 10,
    padding: "6px 10px",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5)",
  },
  progressBarWrap: {
    position: "relative",
    marginTop: 14,
    height: 8,
    borderRadius: 999,
    background: "#f1f5f9",
    overflow: "hidden",
  },
  progressBarFill: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "70%",
    background: "linear-gradient(90deg, #ff7a7a, #ffb36b, #6bbcff, #6be2a1)",
  },
  ctaButton: {
    marginTop: 16,
    width: "100%",
    background: "linear-gradient(90deg, #E65C00, #F9D423)",
    color: "#fff",
    border: "none",
    borderRadius: 12,
    padding: "10px 14px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 8px 18px rgba(230,92,0,0.25)",
    transition: "transform .2s ease, box-shadow .2s ease",
  },
  ctaButtonHover: {
    transform: "translateY(-2px) scale(1.01)",
    boxShadow: "0 12px 24px rgba(230,92,0,0.35)",
  },
  linkReset: {
    color: "inherit",
    textDecoration: "none",
    display: "block",
  },
};

export default Product;
