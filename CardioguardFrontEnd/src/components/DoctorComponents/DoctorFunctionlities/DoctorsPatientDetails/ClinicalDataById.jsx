// import React, { useState, useEffect, useCallback } from "react";
// import axiosClient from "../../../../../axios-client";
// import { useParams } from "react-router-dom";

// const ClinicalDataById = () => {
//   const { patientId } = useParams();
//   const [clinicalData, setClinicalData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [expandedRows, setExpandedRows] = useState({}); // State to track expanded rows

//   // Wrap fetchClinicalData in useCallback
//   const fetchClinicalData = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       setClinicalData([]);

//       // Fetch clinical data
//       const clinicalDataResponse = await axiosClient.get(
//         `/doctors/patients/${patientId}/clinical-data`
//       );

//       console.log(clinicalDataResponse.data); // To check the structure

//       if (clinicalDataResponse.data && clinicalDataResponse.data.length > 0) {
//         // Sort the clinical data by clinicalDate in descending order
//         const sortedData = clinicalDataResponse.data.sort(
//           (a, b) => new Date(b.clinicalDate) - new Date(a.clinicalDate)
//         );
//         setClinicalData(sortedData);
//       } else {
//         setError("No clinical data found.");
//       }
//     } catch (err) {
//       setError(
//         "Failed to fetch clinical data. Please check the Patient ID and try again."
//       );
//       console.error("Error fetching clinical data:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, [patientId]); // Include patientId as a dependency

//   useEffect(() => {
//     // Automatically fetch data on component load
//     fetchClinicalData();
//   }, [fetchClinicalData]); // Include fetchClinicalData in the dependency array

//   // Toggle the expanded state of a row
//   const toggleRowExpansion = (index) => {
//     setExpandedRows((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index], // Toggle the state
//     }));
//   };

//   return (
//     <div className="w-full bg-white shadow-lg rounded-lg p-8">
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-bold text-left ml-4">
//           Patient Clinical Data
//         </h1>
//         <p className="font-semibold pr-4">Patient ID : {patientId}</p>
//       </div>

//       {/* Error message */}
//       {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//       {/* Display clinical data */}
//       {clinicalData.length > 0 && (
//         <div className="bg-gray-50 rounded-md p-4">
//           <div className="overflow-y-auto" style={{ maxHeight: "500px" }}>
//             <table className="min-w-full table-auto">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-4 py-2">Date(M/D/Y)</th>
//                   <th className="px-4 py-2 w-2/3">Details</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {clinicalData.map((data, index) => (
//                   <React.Fragment key={index}>
//                     {/* Main row */}
//                     <tr
//                       className="bg-white border-b cursor-pointer"
//                       onClick={() => toggleRowExpansion(index)} // Toggle on click
//                     >
//                       <td className="px-4 py-2 align-top">
//                         {new Date(data.clinicalDate).toLocaleDateString()}
//                       </td>
//                       <td className="px-4 py-2 text-gray-700">
//                         {expandedRows[index] ? "Hide Details" : "Show Details"}
//                       </td>
//                     </tr>

//                     {/* Expanded row details */}
//                     {expandedRows[index] && (
//                       <tr className="bg-gray-100 border-b">
//                         <td colSpan="2" className="px-4 py-2">
//                           <div className="flex">
//                             <div className="w-1/2 pr-4">
//                               <ul>
//                                 <li>
//                                   Diagnosis of Heart Disease:{" "}
//                                   <span
//                                     className={`${
//                                       data.diagnosisOfHeartDisease
//                                         ? "text-red-500"
//                                         : "text-green-500"
//                                     }`}
//                                   >
//                                     {data.diagnosisOfHeartDisease
//                                       ? "Yes"
//                                       : "No"}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Presence of Anemia:{" "}
//                                   <span
//                                     className={`${
//                                       data.presenceOfAnemia
//                                         ? "text-red-500"
//                                         : "text-green-500"
//                                     }`}
//                                   >
//                                     {data.presenceOfAnemia ? "Yes" : "No"}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Creatinine Phosphokinase:{" "}
//                                   <span className="font-semibold">
//                                     {data.creatininePhosphokinase}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Diabetes:{" "}
//                                   <span
//                                     className={`${
//                                       data.diabetes
//                                         ? "text-red-500"
//                                         : "text-green-500"
//                                     }`}
//                                   >
//                                     {data.diabetes ? "Yes" : "No"}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Ejection Fraction:{" "}
//                                   <span className="font-semibold">
//                                     {data.ejectionFraction}%
//                                   </span>
//                                 </li>
//                               </ul>
//                             </div>
//                             <div className="w-1/2">
//                               <ul>
//                                 <li>
//                                   Blood Pressure:{" "}
//                                   <span className="font-semibold">
//                                     {data.bloodPressure}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Platelets:{" "}
//                                   <span className="font-semibold">
//                                     {data.platelets}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Serum Creatinine:{" "}
//                                   <span className="font-semibold">
//                                     {data.serumCreatinine}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Serum Sodium:{" "}
//                                   <span className="font-semibold">
//                                     {data.serumSodium}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Smoking:{" "}
//                                   <span
//                                     className={`${
//                                       data.smoking
//                                         ? "text-red-500"
//                                         : "text-green-500"
//                                     }`}
//                                   >
//                                     {data.smoking ? "Yes" : "No"}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Follow-Up Period (Days):{" "}
//                                   <span className="font-semibold">
//                                     {data.followUpPeriodDays}
//                                   </span>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </React.Fragment>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}

//       {/* No data message */}
//       {!clinicalData.length && !loading && !error && (
//         <p className="text-gray-600 text-center">No clinical data available.</p>
//       )}
//     </div>
//   );
// };

// export default ClinicalDataById;






// import React, { useState, useEffect, useCallback } from "react";
// import axiosClient from "../../../../../axios-client";
// import { useParams } from "react-router-dom";

// const ClinicalDataById = () => {
//   const { patientId } = useParams();
//   const [clinicalData, setClinicalData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [expandedRows, setExpandedRows] = useState({});

//   const fetchClinicalData = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       setClinicalData([]);

//       const clinicalDataResponse = await axiosClient.get(
//         `/doctors/patients/${patientId}/clinical-data`
//       );

//       if (clinicalDataResponse.data && clinicalDataResponse.data.length > 0) {
//         const sortedData = clinicalDataResponse.data.sort(
//           (a, b) => new Date(b.clinicalDate) - new Date(a.clinicalDate)
//         );
//         setClinicalData(sortedData);
//       } else {
//         setError("No clinical data found.");
//       }
//     } catch (err) {
//       setError(
//         "Failed to fetch clinical data. Please check the Patient ID and try again."
//       );
//       console.error("Error fetching clinical data:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, [patientId]);

//   useEffect(() => {
//     fetchClinicalData();
//   }, [fetchClinicalData]);

//   const toggleRowExpansion = (index) => {
//     setExpandedRows((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   // Delete record function
//   const deleteRecord = async (id) => {
//     try {
//       await axiosClient.delete(`/doctors/delete/clinical-data/patient/{patientId}/{clinicalDataId}`);
//       // Remove the deleted record from the state
//       setClinicalData((prevData) => prevData.filter((data) => data.id !== id));
//     } catch (err) {
//       console.error("Error deleting clinical data:", err);
//     }
//   };

//   // Update record function (you need to implement the update logic)
//   const updateRecord = (id) => {
//     // Logic to update the record
//     console.log("Update record with ID:", id);
//   };

//   return (
//     <div className="w-full bg-white shadow-lg rounded-lg p-8">
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-bold text-left ml-4">
//           Patient Clinical Data
//         </h1>
//         <p className="font-semibold pr-4">Patient ID : {patientId}</p>
//       </div>

//       {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//       {clinicalData.length > 0 && (
//         <div className="bg-gray-50 rounded-md p-4">
//           <div className="overflow-y-auto" style={{ maxHeight: "500px" }}>
//             <table className="min-w-full table-auto">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-4 py-2">Date(M/D/Y)</th>
//                   <th className="px-4 py-2 w-2/3">Details</th>
//                   <th className="px-4 py-2">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {clinicalData.map((data, index) => (
//                   <React.Fragment key={index}>
//                     {/* Main row */}
//                     <tr className="bg-white border-b">
//                       <td
//                         className="px-4 py-2 align-top cursor-pointer"
//                         onClick={() => toggleRowExpansion(index)}
//                       >
//                         {new Date(data.clinicalDate).toLocaleDateString()}
//                       </td>
//                       <td
//                         className="px-4 py-2 text-gray-700 cursor-pointer"
//                         onClick={() => toggleRowExpansion(index)}
//                       >
//                         {expandedRows[index] ? "Hide Details" : "Show Details"}
//                       </td>
//                       <td className="px-4 py-2 text-gray-700">
//                         <div className="flex space-x-2">
//                           <button
//                             className="bg-red-500 text-white px-2 py-1 rounded"
//                             onClick={(e) => {
//                               e.stopPropagation(); // Prevent row toggle
//                               deleteRecord(data.id);
//                             }}
//                           >
//                             Delete
//                           </button>
//                           <button
//                             className="bg-blue-500 text-white px-2 py-1 rounded"
//                             onClick={(e) => {
//                               e.stopPropagation(); // Prevent row toggle
//                               updateRecord(data.id);
//                             }}
//                           >
//                             Update
//                           </button>
//                         </div>
//                       </td>
//                     </tr>

//                     {expandedRows[index] && (
//                       <tr className="bg-gray-100 border-b">
//                         <td colSpan="3" className="px-4 py-2">
//                           <div className="flex">
//                             {/* Display additional details here */}
//                             <div className="w-1/2 pr-4">
//                               <ul>
//                                 <li>
//                                   Diagnosis of Heart Disease:{" "}
//                                   <span
//                                     className={`${
//                                       data.diagnosisOfHeartDisease
//                                         ? "text-red-500"
//                                         : "text-green-500"
//                                     }`}
//                                   >
//                                     {data.diagnosisOfHeartDisease
//                                       ? "Yes"
//                                       : "No"}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Presence of Anemia:{" "}
//                                   <span
//                                     className={`${
//                                       data.presenceOfAnemia
//                                         ? "text-red-500"
//                                         : "text-green-500"
//                                     }`}
//                                   >
//                                     {data.presenceOfAnemia ? "Yes" : "No"}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Creatinine Phosphokinase:{" "}
//                                   <span className="font-semibold">
//                                     {data.creatininePhosphokinase}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Diabetes:{" "}
//                                   <span
//                                     className={`${
//                                       data.diabetes
//                                         ? "text-red-500"
//                                         : "text-green-500"
//                                     }`}
//                                   >
//                                     {data.diabetes ? "Yes" : "No"}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Ejection Fraction:{" "}
//                                   <span className="font-semibold">
//                                     {data.ejectionFraction}%
//                                   </span>
//                                 </li>
//                               </ul>
//                             </div>
//                             <div className="w-1/2">
//                               <ul>
//                                 <li>
//                                   Blood Pressure:{" "}
//                                   <span className="font-semibold">
//                                     {data.bloodPressure}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Platelets:{" "}
//                                   <span className="font-semibold">
//                                     {data.platelets}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Serum Creatinine:{" "}
//                                   <span className="font-semibold">
//                                     {data.serumCreatinine}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Serum Sodium:{" "}
//                                   <span className="font-semibold">
//                                     {data.serumSodium}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Smoking:{" "}
//                                   <span
//                                     className={`${
//                                       data.smoking
//                                         ? "text-red-500"
//                                         : "text-green-500"
//                                     }`}
//                                   >
//                                     {data.smoking ? "Yes" : "No"}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Follow-Up Period (Days):{" "}
//                                   <span className="font-semibold">
//                                     {data.followUpPeriodDays}
//                                   </span>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </React.Fragment>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}

//       {!clinicalData.length && !loading && !error && (
//         <p className="text-gray-600 text-center">No clinical data available.</p>
//       )}
//     </div>
//   );
// };

// export default ClinicalDataById;






import React, { useState, useEffect, useCallback } from "react";
import axiosClient from "../../../../../axios-client";
import { useParams } from "react-router-dom";

const ClinicalDataById = () => {
  const { patientId } = useParams();
  const [clinicalData, setClinicalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedRows, setExpandedRows] = useState({});

  const fetchClinicalData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      setClinicalData([]);

      const clinicalDataResponse = await axiosClient.get(
        `/doctors/patients/${patientId}/clinical-data`
      );

      console.log(clinicalDataResponse.data); // Log the data structure to find the correct identifier

      if (clinicalDataResponse.data && clinicalDataResponse.data.length > 0) {
        const sortedData = clinicalDataResponse.data.sort(
          (a, b) => new Date(b.clinicalDate) - new Date(a.clinicalDate)
        );
        setClinicalData(sortedData);
      } else {
        setError("No clinical data found.");
      }
    } catch (err) {
      setError(
        "Failed to fetch clinical data. Please check the Patient ID and try again."
      );
      console.error("Error fetching clinical data:", err);
    } finally {
      setLoading(false);
    }
  }, [patientId]);

  useEffect(() => {
    fetchClinicalData();
  }, [fetchClinicalData]);

  const toggleRowExpansion = (index) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Delete record function with updated URL
  const deleteRecord = async (clinicalDataId) => {
    try {
      await axiosClient.delete(`/doctors/delete/clinical-data/patient/${patientId}/${clinicalDataId}`);
      // Remove the deleted record from the state
      setClinicalData((prevData) => prevData.filter((data) => data.clinicalDataId !== clinicalDataId)); // Use the correct identifier
    } catch (err) {
      console.error("Error deleting clinical data:", err);
    }
  };

  // Update record function (you need to implement the update logic)
  const updateRecord = (id) => {
    // Logic to update the record
    console.log("Update record with ID:", id);
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-left ml-4">
          Patient Clinical Data
        </h1>
        <p className="font-semibold pr-4">Patient ID : {patientId}</p>
      </div>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      {clinicalData.length > 0 && (
        <div className="bg-gray-50 rounded-md p-4">
          <div className="overflow-y-auto" style={{ maxHeight: "500px" }}>
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Date(M/D/Y)</th>
                  <th className="px-4 py-2 w-2/3">Details</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {clinicalData.map((data, index) => (
                  <React.Fragment key={index}>
                    {/* Main row */}
                    <tr className="bg-white border-b">
                      <td
                        className="px-4 py-2 align-top cursor-pointer"
                        onClick={() => toggleRowExpansion(index)}
                      >
                        {new Date(data.clinicalDate).toLocaleDateString()}
                      </td>
                      <td
                        className="px-4 py-2 text-gray-700 cursor-pointer"
                        onClick={() => toggleRowExpansion(index)}
                      >
                        {expandedRows[index] ? "Hide Details" : "Show Details"}
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        <div className="flex space-x-2">
                          <button
                            className="bg-red-500 text-white px-2 py-1 rounded"
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent row toggle
                              deleteRecord(data.clinicalDataId); // Use the correct field name here
                            }}
                          >
                            Delete
                          </button>
                          <button
                            className="bg-blue-500 text-white px-2 py-1 rounded"
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent row toggle
                              updateRecord(data.clinicalDataId); // Use the correct field name here
                            }}
                          >
                            Update
                          </button>
                        </div>
                      </td>
                    </tr>

                    {expandedRows[index] && (
                      <tr className="bg-gray-100 border-b">
                        <td colSpan="3" className="px-4 py-2">
                          <div className="flex">
                            {/* Display additional details here */}
                            <div className="w-1/2 pr-4">
                              <ul>
                                <li>
                                  Diagnosis of Heart Disease:{" "}
                                  <span
                                    className={`${
                                      data.diagnosisOfHeartDisease
                                        ? "text-red-500"
                                        : "text-green-500"
                                    }`}
                                  >
                                    {data.diagnosisOfHeartDisease
                                      ? "Yes"
                                      : "No"}
                                  </span>
                                </li>
                                <li>
                                  Presence of Anemia:{" "}
                                  <span
                                    className={`${
                                      data.presenceOfAnemia
                                        ? "text-red-500"
                                        : "text-green-500"
                                    }`}
                                  >
                                    {data.presenceOfAnemia ? "Yes" : "No"}
                                  </span>
                                </li>
                                <li>
                                  Creatinine Phosphokinase:{" "}
                                  <span className="font-semibold">
                                    {data.creatininePhosphokinase}
                                  </span>
                                </li>
                                <li>
                                  Diabetes:{" "}
                                  <span
                                    className={`${
                                      data.diabetes
                                        ? "text-red-500"
                                        : "text-green-500"
                                    }`}
                                  >
                                    {data.diabetes ? "Yes" : "No"}
                                  </span>
                                </li>
                                <li>
                                  Ejection Fraction:{" "}
                                  <span className="font-semibold">
                                    {data.ejectionFraction}%
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/2">
                              <ul>
                                <li>
                                  Blood Pressure:{" "}
                                  <span className="font-semibold">
                                    {data.bloodPressure}
                                  </span>
                                </li>
                                <li>
                                  Platelets:{" "}
                                  <span className="font-semibold">
                                    {data.platelets}
                                  </span>
                                </li>
                                <li>
                                  Serum Creatinine:{" "}
                                  <span className="font-semibold">
                                    {data.serumCreatinine}
                                  </span>
                                </li>
                                <li>
                                  Serum Sodium:{" "}
                                  <span className="font-semibold">
                                    {data.serumSodium}
                                  </span>
                                </li>
                                <li>
                                  Smoking:{" "}
                                  <span
                                    className={`${
                                      data.smoking
                                        ? "text-red-500"
                                        : "text-green-500"
                                    }`}
                                  >
                                    {data.smoking ? "Yes" : "No"}
                                  </span>
                                </li>
                                <li>
                                  Follow-Up Period (Days):{" "}
                                  <span className="font-semibold">
                                    {data.followUpPeriodDays}
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {!clinicalData.length && !loading && !error && (
        <p className="text-gray-600 text-center">No clinical data available.</p>
      )}
    </div>
  );
};

export default ClinicalDataById;
