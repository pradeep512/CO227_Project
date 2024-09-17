// import React, { useState, useEffect, useCallback } from "react";
// import { useParams } from "react-router-dom";
// import axiosClient from "../../../../../axios-client";

// const ExaminationDataById = () => {
//   const { patientId } = useParams();
//   const [clinicalData, setClinicalData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [expandedRows, setExpandedRows] = useState({}); // State to track expanded rows

//   // Use useCallback to memoize fetchClinicalData
//   const fetchClinicalData = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       setClinicalData([]);

//       // Fetch clinical data
//       const clinicalDataResponse = await axiosClient.get(
//         `/doctors/${patientId}/examines`
//       );

//       if (clinicalDataResponse.data) {
//         setClinicalData(clinicalDataResponse.data);
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
//   }, [patientId]); // Add patientId as a dependency

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
//         <h1 className="text-2xl font-bold text-left ml-4">Examination Data</h1>
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
//                   <th className="px-4 py-2">Examination Date</th>
//                   <th className="px-4 py-2">Details</th>
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
//                       <td className="px-4 py-2">
//                         {data.examinationDate
//                           ? new Date(data.examinationDate).toLocaleDateString()
//                           : "N/A"}
//                       </td>
//                       <td className="px-4 py-2">
//                         {expandedRows[index] ? "Hide Details" : "Show Details"}
//                       </td>
//                     </tr>

//                     {/* Expanded row details */}
//                     {expandedRows[index] && (
//                       <tr className="bg-gray-100 border-b">
//                         <td colSpan="2" className="px-4 py-2">
//                           <ul>
//                             <li>
//                               Tachycardia at Rest:{" "}
//                               <span
//                                 className={`${
//                                   data.tachycardiaAtrest
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.tachycardiaAtrest ? "Yes" : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Hypotension:{" "}
//                               <span
//                                 className={`${
//                                   data.hypotention
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.hypotention ? "Yes" : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Raised Jugular Venous Pressure:{" "}
//                               <span
//                                 className={`${
//                                   data.raisedJugularVenousPressure
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.raisedJugularVenousPressure
//                                   ? "Yes"
//                                   : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Displaced Apex Beat:{" "}
//                               <span
//                                 className={`${
//                                   data.displacedApexBeat
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.displacedApexBeat ? "Yes" : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Right Ventricular Heave:{" "}
//                               <span
//                                 className={`${
//                                   data.rightVenticularHeave
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.rightVenticularHeave ? "Yes" : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Pleural Effusion:{" "}
//                               <span
//                                 className={`${
//                                   data.pleuralEffusion
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.pleuralEffusion ? "Yes" : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Hepatomegaly:{" "}
//                               <span
//                                 className={`${
//                                   data.hepatomegaly
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.hepatomegaly ? "Yes" : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Gallop Rhythm on Auscultation:{" "}
//                               <span
//                                 className={`${
//                                   data.gallopRhythmOnAuscultation
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.gallopRhythmOnAuscultation ? "Yes" : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Pedal and Ankle Oedema:{" "}
//                               <span
//                                 className={`${
//                                   data.pedalAndAnkleOedema
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.pedalAndAnkleOedema ? "Yes" : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Tachypnoea:{" "}
//                               <span
//                                 className={`${
//                                   data.tachypnoea
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.tachypnoea ? "Yes" : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Ascites:{" "}
//                               <span
//                                 className={`${
//                                   data.ascites
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.ascites ? "Yes" : "No"}
//                               </span>
//                             </li>
//                           </ul>
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
//         <p className="text-gray-600 text-center">
//           No examination data available.
//         </p>
//       )}
//     </div>
//   );
// };

// export default ExaminationDataById;




import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../../../../axios-client";

const ExaminationDataById = () => {
  const { patientId } = useParams();
  const [clinicalData, setClinicalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedRows, setExpandedRows] = useState({});

  // Use useCallback to memoize fetchClinicalData
  const fetchClinicalData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      setClinicalData([]);

      // Fetch clinical data
      const clinicalDataResponse = await axiosClient.get(
        `/doctors/${patientId}/examines`
      );

      if (clinicalDataResponse.data) {
        setClinicalData(clinicalDataResponse.data);
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
  }, [patientId]); // Add patientId as a dependency

  useEffect(() => {
    // Automatically fetch data on component load
    fetchClinicalData();
  }, [fetchClinicalData]); // Include fetchClinicalData in the dependency array

  // Toggle the expanded state of a row
  const toggleRowExpansion = (index) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the state
    }));
  };

  // Delete record function
  const deleteRecord = async (examinationId) => {
    try {
      await axiosClient.delete(`/doctors/${patientId}/examines/${examinationCode}`);
      // Remove the deleted record from the state
      setClinicalData((prevData) => prevData.filter((data) => data.examinationId !== examinationId)); // Adjust the identifier if necessary
    } catch (err) {
      console.error("Error deleting examination data:", err);
    }
  };

  // Update record function (you need to implement the update logic)
  const updateRecord = (examinationId) => {
    // Logic to update the record
    console.log("Update record with ID:", examinationId);
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-left ml-4">Examination Data</h1>
        <p className="font-semibold pr-4">Patient ID : {patientId}</p>
      </div>

      {/* Error message */}
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      {/* Display clinical data */}
      {clinicalData.length > 0 && (
        <div className="bg-gray-50 rounded-md p-4">
          <div className="overflow-y-auto" style={{ maxHeight: "500px" }}>
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Examination Date</th>
                  <th className="px-4 py-2">Details</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {clinicalData.map((data, index) => (
                  <React.Fragment key={index}>
                    {/* Main row */}
                    <tr className="bg-white border-b">
                      <td
                        className="px-4 py-2 cursor-pointer"
                        onClick={() => toggleRowExpansion(index)} // Toggle on click
                      >
                        {data.examinationDate
                          ? new Date(data.examinationDate).toLocaleDateString()
                          : "N/A"}
                      </td>
                      <td
                        className="px-4 py-2 cursor-pointer"
                        onClick={() => toggleRowExpansion(index)} // Toggle on click
                      >
                        {expandedRows[index] ? "Hide Details" : "Show Details"}
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        <div className="flex space-x-2">
                          <button
                            className="bg-red-500 text-white px-2 py-1 rounded"
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent row toggle
                              deleteRecord(data.examinationId); // Replace with the correct field
                            }}
                          >
                            Delete
                          </button>
                          <button
                            className="bg-blue-500 text-white px-2 py-1 rounded"
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent row toggle
                              updateRecord(data.examinationId); // Replace with the correct field
                            }}
                          >
                            Update
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Expanded row details */}
                    {expandedRows[index] && (
                      <tr className="bg-gray-100 border-b">
                        <td colSpan="3" className="px-4 py-2">
                          <ul>
                            <li>
                              Tachycardia at Rest:{" "}
                              <span
                                className={`${
                                  data.tachycardiaAtrest
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {data.tachycardiaAtrest ? "Yes" : "No"}
                              </span>
                            </li>
                            <li>
                              Hypotension:{" "}
                              <span
                                className={`${
                                  data.hypotention
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {data.hypotention ? "Yes" : "No"}
                              </span>
                            </li>
                            <li>
                              Raised Jugular Venous Pressure:{" "}
                              <span
                                className={`${
                                  data.raisedJugularVenousPressure
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {data.raisedJugularVenousPressure
                                  ? "Yes"
                                  : "No"}
                              </span>
                            </li>
                            <li>
                              Displaced Apex Beat:{" "}
                              <span
                                className={`${
                                  data.displacedApexBeat
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {data.displacedApexBeat ? "Yes" : "No"}
                              </span>
                            </li>
                            <li>
                              Right Ventricular Heave:{" "}
                              <span
                                className={`${
                                  data.rightVenticularHeave
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {data.rightVenticularHeave ? "Yes" : "No"}
                              </span>
                            </li>
                            <li>
                              Pleural Effusion:{" "}
                              <span
                                className={`${
                                  data.pleuralEffusion
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {data.pleuralEffusion ? "Yes" : "No"}
                              </span>
                            </li>
                            <li>
                              Hepatomegaly:{" "}
                              <span
                                className={`${
                                  data.hepatomegaly
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {data.hepatomegaly ? "Yes" : "No"}
                              </span>
                            </li>
                            <li>
                              Gallop Rhythm on Auscultation:{" "}
                              <span
                                className={`${
                                  data.gallopRhythmOnAuscultation
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {data.gallopRhythmOnAuscultation ? "Yes" : "No"}
                              </span>
                            </li>
                            <li>
                              Pedal and Ankle Oedema:{" "}
                              <span
                                className={`${
                                  data.pedalAndAnkleOedema
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {data.pedalAndAnkleOedema ? "Yes" : "No"}
                              </span>
                            </li>
                            <li>
                              Tachypnoea:{" "}
                              <span
                                className={`${
                                  data.tachypnoea
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {data.tachypnoea ? "Yes" : "No"}
                              </span>
                            </li>
                            <li>
                              Ascites:{" "}
                              <span
                                className={`${
                                  data.ascites
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {data.ascites ? "Yes" : "No"}
                              </span>
                            </li>
                          </ul>
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

      {/* No data message */}
      {!clinicalData.length && !loading && !error && (
        <p className="text-gray-600 text-center">
          No examination data available.
        </p>
      )}
    </div>
  );
};

export default ExaminationDataById;

