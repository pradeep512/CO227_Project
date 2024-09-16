// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axiosClient from "../../../../../axios-client";

// const UpdateSymptoms = () => {
//   const { patientId, symptomCode } = useParams(); // Get patientId and symptomCode from URL params
//   const [symptomData, setSymptomData] = useState({
//     bilateralLowerLimbSwelling: false,
//     dyspnoea: false,
//     orthopnoea: false,
//     paroxysmalNocturnalDyspnoea: false,
//     fatigue: false,
//     doctorRecommendation: "",
//     symptomDate: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchSymptomData = async () => {
//     if (!patientId || !symptomCode) return;
//     try {
//       setLoading(true);
//       setError(null);

//       // Fetch symptoms data
//       const response = await axiosClient.get(
//         `/api/doctors/patients/${patientId}/symptoms/${symptomCode}`
//       );
//       if (response.data) {
//         setSymptomData(response.data);
//       }
//     } catch (err) {
//       setError(
//         "Failed to fetch symptoms data. Please check the data and try again."
//       );
//       console.error("Error fetching symptoms data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Fetch symptom data automatically on component mount
//     fetchSymptomData();
//   }, [patientId, symptomCode]); // Run this effect when patientId or symptomCode changes

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setSymptomData((prevData) => ({
//       ...prevData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = async () => {
//     if (!patientId || !symptomCode) {
//       setError("Patient ID or Symptom Code is missing.");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError(null);

//       // Update symptoms data
//       const response = await axiosClient.put(
//         `/api/doctors/patients/${patientId}/symptoms/${symptomCode}`,
//         symptomData
//       );
//       if (response.data) {
//         alert("Symptoms updated successfully.");
//       }
//     } catch (err) {
//       setError(
//         "Failed to update symptoms. Please check the data and try again."
//       );
//       console.error("Error updating symptoms:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-8">
//       <h2 className="text-xl font-bold mb-4">Update Symptoms</h2>
//       <p className="mb-4">Patient ID: {patientId}</p>
//       <p className="mb-4">Symptom Code: {symptomCode}</p>

//       <textarea
//         placeholder="Doctor Recommendation"
//         name="doctorRecommendation"
//         value={symptomData.doctorRecommendation}
//         onChange={handleChange}
//         className="w-full px-4 py-2 mb-4 border rounded-md"
//       />

//       <input
//         type="date"
//         name="symptomDate"
//         value={symptomData.symptomDate}
//         onChange={handleChange}
//         className="w-full px-4 py-2 mb-4 border rounded-md"
//       />

//       {/* Checkbox inputs */}
//       {[
//         "bilateralLowerLimbSwelling",
//         "dyspnoea",
//         "orthopnoea",
//         "paroxysmalNocturnalDyspnoea",
//         "fatigue",
//       ].map((symptom) => (
//         <label key={symptom} className="flex items-center mb-2">
//           <input
//             type="checkbox"
//             name={symptom}
//             checked={symptomData[symptom]}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           {symptom.replace(/([A-Z])/g, " $1").toLowerCase()}
//         </label>
//       ))}

//       <button
//         onClick={handleSubmit}
//         className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
//         disabled={loading}
//       >
//         {loading ? (
//           <div className="flex justify-center">
//             <svg
//               className="animate-spin h-5 w-5 text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 0116 0A8 8 0 014 12z"
//               ></path>
//             </svg>
//           </div>
//         ) : (
//           "Update Symptoms"
//         )}
//       </button>

//       {error && <p className="text-red-500 mt-4">{error}</p>}
//     </div>
//   );
// };

// export default UpdateSymptoms;




import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import axiosClient from "../../../../../axios-client";

const UpdateSymptoms = () => {
  const { patientId, symptomCode } = useParams(); // Get patientId and symptomCode from URL params
  const navigate = useNavigate(); // Initialize useNavigate to handle navigation
  const [symptomData, setSymptomData] = useState({
    bilateralLowerLimbSwelling: false,
    dyspnoea: false,
    orthopnoea: false,
    paroxysmalNocturnalDyspnoea: false,
    fatigue: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch symptom data from the server
  const fetchSymptomData = async () => {
    if (!patientId || !symptomCode) return;
    try {
      setLoading(true);
      setError(null);

      // Fetch symptoms data
      const response = await axiosClient.get(
        `/api/doctors/patients/${patientId}/symptoms/${symptomCode}`
      );
      if (response.data) {
        // Set only the symptom fields in the state
        setSymptomData({
          bilateralLowerLimbSwelling: response.data.bilateralLowerLimbSwelling,
          dyspnoea: response.data.dyspnoea,
          orthopnoea: response.data.orthopnoea,
          paroxysmalNocturnalDyspnoea: response.data.paroxysmalNocturnalDyspnoea,
          fatigue: response.data.fatigue,
        });
      }
    } catch (err) {
      setError(
        "Failed to fetch symptoms data. Please check the data and try again."
      );
      console.error("Error fetching symptoms data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch symptom data automatically on component mount
    fetchSymptomData();
  }, [patientId, symptomCode]); // Run this effect when patientId or symptomCode changes

  // Handle form input changes
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSymptomData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!patientId || !symptomCode) {
      setError("Patient ID or Symptom Code is missing.");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Update symptoms data - send only the modified checkbox values
      const response = await axiosClient.put(
        `/api/doctors/patients/${patientId}/symptoms/${symptomCode}`,
        symptomData
      );
      if (response.data) {
        alert("Symptoms updated successfully.");
        navigate(-1); // Navigate back to the previous page
      }
    } catch (err) {
      setError(
        "Failed to update symptoms. Please check the data and try again."
      );
      console.error("Error updating symptoms:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle cancel button click
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Update Symptoms</h2>
     
      {/* Checkbox inputs */}
      <div className="w-full mb-4">
        <label className="block font-semibold mb-2">Symptoms</label>
        {[
          "bilateralLowerLimbSwelling",
          "dyspnoea",
          "orthopnoea",
          "paroxysmalNocturnalDyspnoea",
          "fatigue",
        ].map((symptom) => (
          <label key={symptom} className="flex items-center mb-2">
            <input
              type="checkbox"
              name={symptom}
              checked={symptomData[symptom]}
              onChange={handleChange}
              className="mr-2"
            />
            {symptom.replace(/([A-Z])/g, " $1").toLowerCase()}
          </label>
        ))}
      </div>

      <div className="w-full flex justify-between">
        <button
          onClick={handleSubmit}
          className="w-1/2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all mr-2"
          disabled={loading}
        >
          {loading ? (
            <div className="flex justify-center">
              <svg
                className="animate-spin h-5 w-5 text-white"
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
            </div>
          ) : (
            "Update Symptoms"
          )}
        </button>
        <button
          onClick={handleCancel}
          className="w-1/2 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-all"
        >
          Cancel
        </button>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default UpdateSymptoms;


