// import { useEffect, useState } from "react";
// import axiosClient from "../../../axios-client"; // Updated path for axiosClient
// import { useNavigate } from "react-router-dom";

// const FetchAllDoctors = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1); // For pagination
//   const [doctorsPerPage] = useState(10); // Show 10 doctors per page
//   const navigate = useNavigate();

//   // Function to fetch all doctors
//   const fetchAllDoctors = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       // Fetch data from the API
//       const response = await axiosClient.get("/admin/doctors/bulk");

//       // Log the API response to the console
//       console.log("API Response:", response.data); // Debugging line

//       if (response.data) {
//         setDoctors(response.data);
//       } else {
//         setError("No doctors found.");
//       }
//     } catch (err) {
//       setError("Failed to fetch doctors. Please try again.");
//       console.error("Error fetching doctors:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch doctors on component mount automatically
//   useEffect(() => {
//     fetchAllDoctors();
//   }, []); // Empty dependency array to run the effect only once

//   // Get current doctors for pagination
//   const indexOfLastDoctor = currentPage * doctorsPerPage;
//   const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
//   const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

//   // Function to handle row click
//   const handleRowClick = (doctorId) => {
//     navigate(`/admin/doctor-info-change/${doctorId}`); // Adjust this route if necessary
//   };

//   // Handle next page
//   const nextPage = () => {
//     if (currentPage * doctorsPerPage < doctors.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   // Handle previous page
//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="relative">
//       {/* Flex container for title */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-red-600 text-center">Click the doctor to view details</h1>
//       </div>

//       {/* Display error message if any */}
//       {error && <p className="text-red-600 text-center mb-4">{error}</p>}

//       {/* Display doctors in a table if available */}
//       {currentDoctors.length > 0 && (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 border">Doctor ID</th>
//                 <th className="px-4 py-2 border">NIC</th>
//                 <th className="px-4 py-2 border">Surname</th>
//                 <th className="px-4 py-2 border">Last Name</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentDoctors.map((doctor) => (
//                 <tr
//                   key={doctor.doctorId} // Use the correct field name
//                   onClick={() => handleRowClick(doctor.doctorId)}
//                   className="cursor-pointer hover:bg-gray-100"
//                 >
//                   <td className="px-4 py-2 border text-center">
//                     {doctor.doctorId || "N/A"} {/* Use the correct field name */}
//                   </td>
//                   <td className="px-4 py-2 border text-center">
//                     {doctor.nic || "N/A"} {/* Use the correct field name */}
//                   </td>
//                   <td className="px-4 py-2 border text-center">
//                     {doctor.surname || "N/A"}
//                   </td>
//                   <td className="px-4 py-2 border text-center">
//                     {doctor.lastName || "N/A"} {/* Use the correct field name */}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Pagination controls */}
//       <div className="flex justify-between items-center mt-4">
//         <button
//           onClick={prevPage}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded ${
//             currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
//           }`}
//         >
//           Previous
//         </button>

//         <span>
//           Page {currentPage} of {Math.ceil(doctors.length / doctorsPerPage)}
//         </span>

//         <button
//           onClick={nextPage}
//           disabled={currentPage * doctorsPerPage >= doctors.length}
//           className={`px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded ${
//             currentPage * doctorsPerPage >= doctors.length
//               ? "cursor-not-allowed opacity-50"
//               : ""
//           }`}
//         >
//           Next
//         </button>
//       </div>

//       {/* Show message when no doctors are available */}
//       {doctors.length === 0 && !loading && !error && (
//         <p className="text-gray-600 text-center">No doctors available.</p>
//       )}
//     </div>
//   );
// };

// export default FetchAllDoctors;



import { useEffect, useState } from "react";
import axiosClient from "../../../axios-client"; // Updated path for axiosClient
import { useNavigate } from "react-router-dom";

const FetchAllDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const [doctorsPerPage] = useState(10); // Show 10 doctors per page
  const navigate = useNavigate();

  // Function to fetch all doctors
  const fetchAllDoctors = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch data from the API
      const response = await axiosClient.get("/admin/doctors/bulk");

      // Log the API response to the console
      console.log("API Response:", response.data); // Debugging line

      if (response.data) {
        setDoctors(response.data);
      } else {
        setError("No doctors found.");
      }
    } catch (err) {
      setError("Failed to fetch doctors. Please try again.");
      console.error("Error fetching doctors:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch doctors on component mount automatically
  useEffect(() => {
    fetchAllDoctors();
  }, []); // Empty dependency array to run the effect only once

  // Get current doctors for pagination
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  // Function to handle row click
  const handleRowClick = (doctorId) => {
    navigate(`/admin/doctor-info-change/${doctorId}`); // Adjust this route if necessary
  };

  // Function to handle adding a new doctor
  const handleAddDoctor = () => {
    navigate("/admin/add-doctor"); // Navigate to the Add Doctor page
  };

  // Handle next page
  const nextPage = () => {
    if (currentPage * doctorsPerPage < doctors.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="relative">
      {/* Flex container for title and Add Doctor button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-red-600">Doctors List</h1>
        <button
          onClick={handleAddDoctor}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Doctor
        </button>
      </div>

      {/* Display error message if any */}
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}

      {/* Display doctors in a table if available */}
      {currentDoctors.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Doctor ID</th>
                <th className="px-4 py-2 border">NIC</th>
                <th className="px-4 py-2 border">Surname</th>
                <th className="px-4 py-2 border">Last Name</th>
              </tr>
            </thead>
            <tbody>
              {currentDoctors.map((doctor) => (
                <tr
                  key={doctor.doctorId} // Use the correct field name
                  onClick={() => handleRowClick(doctor.doctorId)}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  <td className="px-4 py-2 border text-center">
                    {doctor.doctorId || "N/A"} {/* Use the correct field name */}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {doctor.nic || "N/A"} {/* Use the correct field name */}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {doctor.surname || "N/A"}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {doctor.lastName || "N/A"} {/* Use the correct field name */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded ${
            currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {Math.ceil(doctors.length / doctorsPerPage)}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage * doctorsPerPage >= doctors.length}
          className={`px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded ${
            currentPage * doctorsPerPage >= doctors.length
              ? "cursor-not-allowed opacity-50"
              : ""
          }`}
        >
          Next
        </button>
      </div>

      {/* Show message when no doctors are available */}
      {doctors.length === 0 && !loading && !error && (
        <p className="text-gray-600 text-center">No doctors available.</p>
      )}
    </div>
  );
};

export default FetchAllDoctors;

