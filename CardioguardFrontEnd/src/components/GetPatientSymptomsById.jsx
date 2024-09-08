import { useState } from "react";
import axiosClient from "../../axios-client"; // Updated path for axiosClient

const PatientSymptomDataById = () => {
  const [patient, setPatient] = useState(null);
  const [symptoms, setSymptoms] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPatientDataById = async () => {
    if (!patientId) {
      setError("Please enter a valid Patient ID");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setPatient(null);
      setSymptoms([]);

      // Fetch patient data
      const patientResponse = await axiosClient.get(`/patients/${patientId}`);
      // Fetch symptoms data
      const symptomsResponse = await axiosClient.get(
        `/doctors/patients/${patientId}/symptoms`
      );

      if (patientResponse.data) {
        setPatient(patientResponse.data);
      } else {
        setError("No patient data found.");
      }

      if (symptomsResponse.data) {
        setSymptoms(symptomsResponse.data);
      } else {
        setError("No symptoms data found.");
      }
    } catch (err) {
      setError(
        "Failed to fetch data. Please check the Patient ID and try again."
      );
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-orange-300">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Patient Symptoms Data
        </h1>

        {/* Input field for patient ID */}
        <input
          type="text"
          placeholder="Enter Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          className="w-full px-4 py-2 border rounded-md mb-4"
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        {/* Button to fetch patient data */}
        <button
          onClick={fetchPatientDataById}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all disabled:opacity-50 mb-4"
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 mx-auto text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 0116 0A8 8 0 014 12z"
              ></path>
            </svg>
          ) : (
            "Get Patient Data"
          )}
        </button>

        {/* Display patient data */}
        {patient && (
          <div className="bg-gray-50 rounded-md p-4 mb-4">
            <h2 className="text-lg font-bold mb-2">Patient Details</h2>
            <p>
              <strong>Patient ID:</strong> {patient.patientId}
            </p>
            <p>
              <strong>NIC:</strong> {patient.nic}
            </p>
            <p>
              <strong>First Name:</strong> {patient.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {patient.lastName}
            </p>
            <p>
              <strong>Gender:</strong> {patient.gender}
            </p>
            <p>
              <strong>Date of Birth:</strong>{" "}
              {new Date(patient.dateOfBirth).toLocaleDateString()}
            </p>
            <p>
              <strong>Email:</strong> {patient.email || "N/A"}
            </p>
          </div>
        )}

        {/* Display symptoms */}
        {symptoms.length > 0 && (
          <div className="bg-gray-50 rounded-md p-4">
            <h2 className="text-lg font-bold mb-2">Symptoms Details</h2>
            {symptoms.map((symptom, index) => (
              <div key={index} className="mb-4">
                <p>
                  <strong>Symptom Code:</strong> {symptom.symptomCode}
                </p>
                <p>
                  <strong>Bilateral Lower Limb Swelling:</strong>{" "}
                  {symptom.bilateralLowerLimbSwelling ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Dyspnoea:</strong> {symptom.dyspnoea ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Orthopnoea:</strong>{" "}
                  {symptom.orthopnoea ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Paroxysmal Nocturnal Dyspnoea:</strong>{" "}
                  {symptom.paroxysmalNocturnalDyspnoea ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Fatigue:</strong> {symptom.fatigue ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Doctor Recommendation:</strong>{" "}
                  {symptom.doctorRecommendation}
                </p>
                <p>
                  <strong>Symptom Date:</strong>{" "}
                  {new Date(symptom.symptomDate).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* No data message */}
        {!patient && !loading && !error && (
          <p className="text-gray-600 text-center">
            No patient data available.
          </p>
        )}
      </div>
    </div>
  );
};

export default PatientSymptomDataById;
