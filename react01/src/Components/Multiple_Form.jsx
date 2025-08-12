import React, { useState } from "react";

const Multiple_Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postalCode: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =(e)=>{
    e.preventDefault();
    alert("Your form is Submitted")
    console.log(formData)
    setFormData({
        name: "",
        email: "",
        phone: "",
        postalCode: "",
      })
  }

  // CSS Styles
  const styles = {
    container: {
      padding: "40px",
      maxWidth: "800px",
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
    textarea: {
      padding: "15px 20px",
      borderRadius: "12px",
      border: "2px solid #e9ecef",
      fontSize: "16px",
      width: "100%",
      backgroundColor: "#f8f9fa",
      transition: "all 0.3s ease",
      outline: "none",
      boxSizing: "border-box",
      minHeight: "120px",
      resize: "vertical",
    },
    select: {
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
  };

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>Registration Form</h1>
        <p style={styles.subtitle}>Complete your profile information</p>

        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div style={styles.formGroup}>
            <label style={styles.label}>First Name</label>
            <input
              value={formData.name}
              onChange={onChangeHandler}
              type="text"
              name="name"
              placeholder="Enter your first name"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              value={formData.email}
              name="email"
              onChange={onChangeHandler}
              placeholder="Enter your email address"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Phone Number</label>
            <input
              value={formData.mobile}
              onChange={onChangeHandler}
              type="number"
              name="phone"
              placeholder="Enter your phone number"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Postal Code</label>
            <input
              type="text"
              value={formData.postalCode}
              onChange={onChangeHandler}
              name="postalCode"
              placeholder="Enter your postal code"
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.submitButton}>
            Submit Registration
          </button>
        </form>
      </div>
    </>
  );
};

export default Multiple_Form;
