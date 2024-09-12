// src/routes/routes.js
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
import PatientDashboard from "../components/PatientHomePageComponents/PatientDashboard";
import PatientMainLayout from "../components/layouts/PatientMainLayout";
import PatientMedicalInfo from "../components/PatientHomePageComponents/PatientMedicalInfo";
import AdminDoctors from "../components/AdminComponents/AdminDoctors";

const AppRoutes = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminMainLayout />, // This layout contains the sidebar and topbar
    children: [
      {
        path: "", // Dashboard page
        element: <AdminDashboard />,
      },
      {
        path:"patients/:patientId", // Patients page
        element: <AdminPatients />,
      },
      {
        path: "doctors", // Patients page
        element: <AdminDoctors />,
      },
      // Add more routes here, such as doctors, prediction, etc.
    ],
  },

  {
    path: "/patient",
    element: <PatientMainLayout />, // This layout contains the sidebar and topbar
    children: [
      {
        path: "", // Dashboard page
        element: <PatientDashboard />,
      },
      {
        path: "patients", // Patients page
        element: <PatientMedicalInfo />,
      },
      // Add more routes here, such as doctors, prediction, etc.
    ],
  },
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/doctors", element: <FetchAllDoctors /> },
  { path: "/contact", element: <ContactUsPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register-patient", element: <RegisterPage /> },
  { path: "/register-user", element: <RegisterUser /> },
  { path: "/admin-dashboard", element: <AdminDashboard /> },
  { path: "/patient-dashboard", element: <PatientDashboard /> },
  { path: "/patient-dashboard", element: <PatientDashboard /> },
 
  { path: "/tests2", element: <Tests /> },
]);

export default AppRoutes;
