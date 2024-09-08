import { useState } from "react";
import axiosClient from "../../axios-client"; // Updated path for axiosClient
import { useNavigate } from "react-router-dom";

const FetchAllPatients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Function to fetch all patients
  const fetchAllPatients = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch data from the API
      const response = await axiosClient.get("/admin/patients/bulk");

      if (response.data) {
        setPatients(response.data);
      } else {
        setError("No patients found.");
      }
    } catch (err) {
      setError("Failed to fetch patients. Please try again.");
      console.error("Error fetching patients:", err);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle row click
  const handleRowClick = (patientId) => {
    navigate(`/findbypatientId?patientId=${patientId}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-orange-300">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-6">
          Fetch All Patients
        </h1>

        {/* Button to fetch all patients */}
        <button
          onClick={fetchAllPatients}
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
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          ) : (
            "Fetch All Patients"
          )}
        </button>

        {/* Display error message if any */}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        {/* Display patients in a table if available */}
        {patients.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Patient ID</th>
                  <th className="px-4 py-2 border">NIC</th>
                  <th className="px-4 py-2 border">First Name</th>
                  <th className="px-4 py-2 border">Last Name</th>
                  <th className="px-4 py-2 border">Gender</th>
                  <th className="px-4 py-2 border">Date of Birth</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr
                    key={patient.patientId}
                    onClick={() => handleRowClick(patient.patientId)}
                    className="cursor-pointer hover:bg-gray-100"
                  >
                    <td className="px-4 py-2 border text-center">
                      {patient.patientId}
                    </td>
                    <td className="px-4 py-2 border text-center">
                      {patient.nic}
                    </td>
                    <td className="px-4 py-2 border text-center">
                      {patient.firstName}
                    </td>
                    <td className="px-4 py-2 border text-center">
                      {patient.lastName}
                    </td>
                    <td className="px-4 py-2 border text-center">
                      {patient.gender}
                    </td>
                    <td className="px-4 py-2 border text-center">
                      {new Date(patient.dateOfBirth).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Show message when no patients are available */}
        {patients.length === 0 && !loading && !error && (
          <p className="text-gray-600 text-center">No patients available.</p>
        )}
      </div>
    </div>
  );
};

export default FetchAllPatients;
