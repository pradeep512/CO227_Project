
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axiosClient from "../../../axios-client"; // Adjust the path as per your project structure

// const AdminPatientInfoChange = () => {
//   const { patientId } = useParams(); // Get patientId from URL
//   const [patient, setPatient] = useState(null); // Store patient data
//   const [loading, setLoading] = useState(true); // Handle loading state
//   const [error, setError] = useState(null); // Handle error state

//   // Fetch patient details when component mounts or patientId changes
//   useEffect(() => {
//     const fetchPatientData = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // Use the correct API URL with patientId
//         const response = await axiosClient.get(`/admin/patient/${patientId}`);
//         setPatient(response.data); // Store patient data in state
//       } catch (err) {
//         setError("Failed to fetch patient data.");
//         console.error("Error fetching patient data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (patientId) {
//       fetchPatientData();
//     }
//   }, [patientId]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="text-red-600">{error}</p>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Patient Information</h1>
//       {patient ? (
//         <div>
//           <p><strong>Patient ID:</strong> {patient.patientId}</p>
//           <p><strong>NIC:</strong> {patient.nic}</p>
//           <p><strong>Name:</strong> {patient.firstName} {patient.lastName}</p>
//           <p><strong>Gender:</strong> {patient.gender}</p>
//           <p><strong>Date of Birth:</strong> {new Date(patient.dateOfBirth).toLocaleDateString()}</p>
//           <p><strong>Email:</strong> {patient.email}</p>
//           {/* Add more patient fields as needed */}
//         </div>
//       ) : (
//         <p>No patient found.</p>
//       )}
//     </div>
//   );
// };

// export default AdminPatientInfoChange;



import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosClient from "../../../axios-client"; // Adjust the path as per your project structure
import PatientExaminationDataById from "../../components/AdminComponents/PatientExaminationData";
import PatientClinicalDataById from "../../components/AdminComponents/PatientClinicalData";
import PatientSymptomDataById from "../../components/AdminComponents/PatientSymptomsData";

const AdminPatientInfoChange = () => {
  const { patientId } = useParams(); // Get patientId from URL
  const [patient, setPatient] = useState(null); // Store patient data
  const [loading, setLoading] = useState(true); // Handle loading state
  const [error, setError] = useState(null); // Handle error state
  const navigate = useNavigate(); // For navigation (e.g., after deleting or updating)

  // Fetch patient details when component mounts or patientId changes
  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Use the correct API URL with patientId
        const response = await axiosClient.get(`/admin/patient/${patientId}`);
        setPatient(response.data); // Store patient data in state
      } catch (err) {
        setError("Failed to fetch patient data.");
        console.error("Error fetching patient data:", err);
      } finally {
        setLoading(false);
      }
    };

    if (patientId) {
      fetchPatientData();
    }
  }, [patientId]);

  // Handle delete patient
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this patient?");
    if (!confirmDelete) return;

    try {
      await axiosClient.delete(`/admin/delete/patient/${patientId}`);
      alert("Patient deleted successfully.");
      navigate("/admin/patients"); // Navigate back to the patients list after deletion
    } catch (error) {
      console.error("Error deleting patient:", error);
      setError("Failed to delete patient.");
    }
  };

  // Handle update patient (navigate to update page)
  const handleUpdate = () => {
    navigate(`/admin/patient-update/${patientId}`); // Assuming you have a separate route/page for updating patient details
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Patient Information</h1>
      {patient ? (
        <div>
          <p><strong>Patient ID:</strong> {patient.patientId}</p>
          <p><strong>NIC:</strong> {patient.nic}</p>
          <p><strong>Name:</strong> {patient.firstName} {patient.lastName}</p>
          <p><strong>Gender:</strong> {patient.gender}</p>
          <p><strong>Date of Birth:</strong> {new Date(patient.dateOfBirth).toLocaleDateString()}</p>
          <p><strong>Email:</strong> {patient.email}</p>
          {/* Add more patient fields as needed */}

          {/* Buttons for updating and deleting the patient */}
          <div className="mt-6">
            <button
              onClick={handleUpdate}
              className="bg-blue-500 text-white px-4 py-2 mr-4 rounded hover:bg-blue-600"
            >
              Update Details
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete Patient
            </button>
          </div>
        </div>
      ) : (
        <p>No patient found.</p>
      )}

      <div>
        <PatientExaminationDataById patientId={patientId} />
        <PatientClinicalDataById patientId={patientId} />
        <PatientSymptomDataById patientId={patientId} />
      </div>
    </div>
  );
};

export default AdminPatientInfoChange;

