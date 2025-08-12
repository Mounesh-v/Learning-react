import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");

  // CSS Styles
  const styles = {
    container: {
      padding: "40px",
      maxWidth: "600px",
      margin: "0 auto",
      backgroundColor: "#ffffff",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      border: "1px solid #e9ecef",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#2c3e50",
      textAlign: "center",
      marginBottom: "10px",
      textTransform: "uppercase",
      letterSpacing: "2px",
    },
    subtitle: {
      fontSize: "1.1rem",
      color: "#7f8c8d",
      textAlign: "center",
      marginBottom: "40px",
      fontStyle: "italic",
    },
    formGroup: {
      marginBottom: "25px",
    },
    label: {
      display: "block",
      fontSize: "1rem",
      fontWeight: "600",
      color: "#34495e",
      marginBottom: "8px",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    input: {
      padding: "15px 20px",
      borderRadius: "12px",
      border: "2px solid #e9ecef",
      fontSize: "16px",
      width: "100%",
      backgroundColor: "#f8f9fa",
      transition: "all 0.3s ease",
      outline: "none",
      boxSizing: "border-box",
    },
    inputFocus: {
      borderColor: "#3498db",
      backgroundColor: "#ffffff",
      boxShadow: "0 0 0 4px rgba(52, 152, 219, 0.1)",
      transform: "translateY(-2px)",
    },
    inputBlur: {
      borderColor: "#e9ecef",
      backgroundColor: "#f8f9fa",
      boxShadow: "none",
      transform: "translateY(0)",
    },
    submitButton: {
      width: "100%",
      padding: "15px 30px",
      backgroundColor: "#3498db",
      color: "#ffffff",
      border: "none",
      borderRadius: "12px",
      fontSize: "1.1rem",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "1px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginTop: "20px",
    },
    submitButtonHover: {
      backgroundColor: "#2980b9",
      transform: "translateY(-2px)",
      boxShadow: "0 5px 15px rgba(52, 152, 219, 0.3)",
    },
  };

  const handleFocus = (e) => {
    Object.assign(e.target.style, styles.inputFocus);
  };

  const handleBlur = (e) => {
    Object.assign(e.target.style, styles.inputBlur);
  };

  const handleButtonMouseEnter = (e) => {
    Object.assign(e.target.style, styles.submitButtonHover);
  };

  const handleButtonMouseLeave = (e) => {
    Object.assign(e.target.style, styles.submitButton);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(name+" "+ "Submitted Successfully")
  };

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>Contact Form</h1>
        <p style={styles.subtitle}>Get in touch with us today</p>

        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
              style={styles.input}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {console.log(name)}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Enter your email address"
              style={styles.input}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {console.log(email)}
          </div>

          <button
            type="submit"
            style={styles.submitButton}
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
