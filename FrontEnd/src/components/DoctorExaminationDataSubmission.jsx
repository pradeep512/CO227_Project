import React, { useState } from "react";
import axiosClient from "../axiosClient"; // Adjust the import based on your project structure
import { useNavigate } from "react-router-dom";

const DoctorExaminationDataSubmission = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    tachycardiaAtrest: false,
    hypotention: false,
    narrowPulsePressure: false,
    raisedJugularVenousPressure: false,
    displacedApexBeat: false,
    rightVenticularHeave: false,
    pleuralEffusion: false,
    hepatomegaly: false,
    gallopRhythmOnAuscultation: false,
    murmursAssociatedWithValvularHeartDisease: false,
    pedalAndAnkleOedema: false,
    tachypnoea: false,
    ascites: false,
    examinationDate: "",
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
      await axiosClient.post(`/doctors/${patientId}/examines`, formData);
      console.log("Registration successful, navigating to the previous page.");
      navigate(-1); // Navigate to the previous page
    } catch (error) {
      console.error("There was an error with the registration:", error);
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
        Patient Examination Submission Form
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            name="tachycardiaAtrest"
            checked={formData.tachycardiaAtrest}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          />
          <label htmlFor="tachycardiaAtrest" style={{ color: "#34495e" }}>
            Tachycardia at Rest
          </label>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            name="hypotention"
            checked={formData.hypotention}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          />
          <label htmlFor="hypotention" style={{ color: "#34495e" }}>
            Hypotention
          </label>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            name="narrowPulsePressure"
            checked={formData.narrowPulsePressure}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          />
          <label htmlFor="narrowPulsePressure" style={{ color: "#34495e" }}>
            Narrow Pulse Pressure
          </label>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            name="raisedJugularVenousPressure"
            checked={formData.raisedJugularVenousPressure}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          />
          <label
            htmlFor="raisedJugularVenousPressure"
            style={{ color: "#34495e" }}
          >
            Raised Jugular Venous Pressure
          </label>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            name="displacedApexBeat"
            checked={formData.displacedApexBeat}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          />
          <label htmlFor="displacedApexBeat" style={{ color: "#34495e" }}>
            Displaced Apex Beat
          </label>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            name="rightVenticularHeave"
            checked={formData.rightVenticularHeave}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          />
          <label htmlFor="rightVenticularHeave" style={{ color: "#34495e" }}>
            Right Venticular Heave
          </label>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            name="pleuralEffusion"
            checked={formData.pleuralEffusion}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          />
          <label htmlFor="pleuralEffusion" style={{ color: "#34495e" }}>
            Pleural Effusion
          </label>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            name="hepatomegaly"
            checked={formData.hepatomegaly}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          />
          <label htmlFor="hepatomegaly" style={{ color: "#34495e" }}>
            Hepatomegaly
          </label>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            name="gallopRhythmOnAuscultation"
            checked={formData.gallopRhythmOnAuscultation}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          />
          <label
            htmlFor="gallopRhythmOnAuscultation"
            style={{ color: "#34495e" }}
          >
            Gallop Rhythm on Auscultation
          </label>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            name="murmursAssociatedWithValvularHeartDisease"
            checked={formData.murmursAssociatedWithValvularHeartDisease}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          />
          <label
            htmlFor="murmursAssociatedWithValvularHeartDisease"
            style={{ color: "#34495e" }}
          >
            Murmurs Associated with Valvular Heart Disease
          </label>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            name="pedalAndAnkleOedema"
            checked={formData.pedalAndAnkleOedema}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          />
          <label htmlFor="pedalAndAnkleOedema" style={{ color: "#34495e" }}>
            Pedal and Ankle Oedema
          </label>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            name="tachypnoea"
            checked={formData.tachypnoea}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          />
          <label htmlFor="tachypnoea" style={{ color: "#34495e" }}>
            Tachypnoea
          </label>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            name="ascites"
            checked={formData.ascites}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          />
          <label htmlFor="ascites" style={{ color: "#34495e" }}>
            Ascites
          </label>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="examinationDate" style={{ color: "#34495e" }}>
            Examination Date:
            <input
              type="datetime-local"
              name="examinationDate"
              value={formData.examinationDate}
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

export default DoctorExaminationDataSubmission;
