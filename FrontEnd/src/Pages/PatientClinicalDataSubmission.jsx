import React, { useState } from "react";
import axiosClient from "../axiosClient"; // Adjust the import based on your project structure
import { useNavigate } from "react-router-dom";

const PatientDetailsSubmit = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    diagnosisOfHeartDisease: false,
    presenceOfAnemia: false,
    creatininePhosphokinase: "",
    diabetes: false,
    ejectionFraction: "",
    bloodPressure: "",
    platelets: "",
    serumCreatinine: "",
    serumSodium: "",
    smoking: false,
    followUpPeriodDays: "",
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Log the form data for debugging
    console.log("Patient details submitted:", formData);

    try {
      // Assume patientId is obtained or defined elsewhere
      const patientId = 1;
      await axiosClient.post(
        `/doctors/patients/${patientId}/clinical-data`,
        formData
      );
      console.log("Submission successful, navigating to the previous page.");
      navigate(-1); // Navigate to the previous page
    } catch (error) {
      console.error("There was an error with the submission:", error);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "20px",
        padding: "20px",
        backgroundColor: "#f2f2f2",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ color: "#2c3e50", marginBottom: "20px" }}>
        Patient Details Submission Form
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            name="diagnosisOfHeartDisease"
            checked={formData.diagnosisOfHeartDisease}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          />
          <label htmlFor="diagnosisOfHeartDisease" style={{ color: "#34495e" }}>
            Diagnosis of Heart Disease
          </label>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            name="presenceOfAnemia"
            checked={formData.presenceOfAnemia}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          />
          <label htmlFor="presenceOfAnemia" style={{ color: "#34495e" }}>
            Presence of Anemia
          </label>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="creatininePhosphokinase" style={{ color: "#34495e" }}>
            Creatinine Phosphokinase:
            <input
              type="number"
              name="creatininePhosphokinase"
              value={formData.creatininePhosphokinase}
              onChange={handleChange}
              style={{
                padding: "5px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
          </label>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            name="diabetes"
            checked={formData.diabetes}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          />
          <label htmlFor="diabetes" style={{ color: "#34495e" }}>
            Diabetes
          </label>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="ejectionFraction" style={{ color: "#34495e" }}>
            Ejection Fraction:
            <input
              type="number"
              name="ejectionFraction"
              value={formData.ejectionFraction}
              onChange={handleChange}
              style={{
                padding: "5px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
          </label>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="bloodPressure" style={{ color: "#34495e" }}>
            Blood Pressure:
            <input
              type="number"
              name="bloodPressure"
              value={formData.bloodPressure}
              onChange={handleChange}
              style={{
                padding: "5px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
          </label>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="platelets" style={{ color: "#34495e" }}>
            Platelets:
            <input
              type="number"
              name="platelets"
              value={formData.platelets}
              onChange={handleChange}
              style={{
                padding: "5px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
          </label>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="serumCreatinine" style={{ color: "#34495e" }}>
            Serum Creatinine:
            <input
              type="number"
              name="serumCreatinine"
              value={formData.serumCreatinine}
              onChange={handleChange}
              style={{
                padding: "5px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
          </label>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="serumSodium" style={{ color: "#34495e" }}>
            Serum Sodium:
            <input
              type="number"
              name="serumSodium"
              value={formData.serumSodium}
              onChange={handleChange}
              style={{
                padding: "5px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
          </label>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            name="smoking"
            checked={formData.smoking}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          />
          <label htmlFor="smoking" style={{ color: "#34495e" }}>
            Smoking
          </label>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="followUpPeriodDays" style={{ color: "#34495e" }}>
            Follow-Up Period (Days):
            <input
              type="number"
              name="followUpPeriodDays"
              value={formData.followUpPeriodDays}
              onChange={handleChange}
              style={{
                padding: "5px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
          </label>
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#27ae60",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PatientDetailsSubmit;
