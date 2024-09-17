import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import FetchAllDoctors from "../components/AllDoctors";
import HomePage from "../pages/HomePage";
import Tests from "../pages/Tests";
import ContactUsPage from "../pages/ContactUsPage";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/PatientRegisterPage";
import RegisterUser from "../pages/Register-patient-auth";
import AdminDashboard from "../components/AdminComponents/AdminDashboard";
import AdminPatients from "../components/AdminComponents/AdminPatients";
import AdminMainLayout from "../components/layouts/AdminMainLayout";
import DoctorMainLayout from "../components/layouts/DoctorMainLayout";
import ServicesPage from "../pages/ServicePgae";
import PatientDashboard from "../components/PatientComponents/PatientDashboard";
import PatientMainLayout from "../components/layouts/PatientMainLayout";
import PatientMedicalInfo from "../components/PatientComponents/PatientMedicalInfo";
import AdminDoctors from "../components/AdminComponents/AdminDoctors";
import AdminPatientInfoChange from "../pages/Admin/AdminPatientInfoChange"; // Import the new component
import DoctorDashboard from "../components/DoctorComponents/DoctorDashboard";
import GetDoctorsPatients from "../components/DoctorComponents/DoctorFunctionlities/GetDoctorsPatients";
import MedicalInfo from "../components/DoctorComponents/DoctorFunctionlities/DoctorsPatientDetails/MedicalInfo";
import UpdateSymptoms from "../components/UpdateSymptoms";
import PatientDoctors from "../components/PatientComponents/PatientDoctors";


const AppRoutes = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminMainLayout />, // Admin layout with sidebar and topbar
    children: [
      {
        path: "", // Admin dashboard
        element: <AdminDashboard />,
      },
      {
        path: "patients", // Patients list page
        element: <AdminPatients />,
      },
      {
        path: "patient-info-change/:patientId", // Patient info change page (with dynamic patientId)
        element: <AdminPatientInfoChange />,
      },
      {
        path: "doctors", // Doctors list page
        element: <AdminDoctors />,
      },
      // You can add more admin routes here as needed
    ],
  },
  {
    path: "/patient",
    element: <PatientMainLayout />, // Patient layout with sidebar and topbar
    children: [
      {
        path: "", // Patient dashboard
        element: <PatientDashboard />,
      },
      {
        path: "medicalinfo", // Patient medical info page
        element: <PatientMedicalInfo />,
      },
      {
        path: "doctors", // Doctors list page
        element: <PatientDoctors/>,
      }
      // Add more patient routes here if necessary
    ],
  },
  {
    path: "/doctor",
    element: <DoctorMainLayout />, // Doctor layout with sidebar and topbar
    children: [
      {
        path: "",
        element: <DoctorDashboard />,
      },
      {
        path: "/doctor/patients",
        element: <GetDoctorsPatients />,
      },
      {
        path: "/doctor/patients/:patientId",
        element: <MedicalInfo />,
      },


      {
        path: "/doctor/patients/:patientId/update-symptoms/:symptomCode",
        element: <UpdateSymptoms />, // Replace with your actual UpdateSymptoms component
      },
    ],
  },

  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/doctors", element: <FetchAllDoctors /> },
  { path: "/contact", element: <ContactUsPage /> },
  { path: "/register-patient", element: <RegisterPage /> },
  { path: "/register-user", element: <RegisterUser /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/admin-dashboard", element: <AdminDashboard /> }, // Admin dashboard standalone route
  { path: "/patient-dashboard", element: <PatientDashboard /> }, // Patient dashboard standalone route
  { path: "/tests2", element: <Tests /> }, // Testing page route
]);

export default AppRoutes;
