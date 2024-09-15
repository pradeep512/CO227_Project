// // src/routes/routes.js
// import { createBrowserRouter } from "react-router-dom";
// import AboutPage from "../pages/AboutPage";
// import FetchAllDoctors from "../components/AllDoctors";
// import HomePage from "../pages/HomePage";
// import Tests from "../pages/Tests";
// import ContactUsPage from "../pages/ContactUsPage";
// import LoginPage from "../pages/Login";
// import RegisterPage from "../pages/PatientRegisterPage";
// import RegisterUser from "../pages/Register-patient-auth";
// import AdminDashboard from "../components/AdminComponents/AdminDashboard";
// import AdminPatients from "../components/AdminComponents/AdminPatients";
// import AdminMainLayout from "../components/layouts/AdminMainLayout";
// import PatientDashboard from "../components/PatientHomePageComponents/PatientDashboard";
// import PatientMainLayout from "../components/layouts/PatientMainLayout";
// import PatientMedicalInfo from "../components/PatientHomePageComponents/PatientMedicalInfo";
// import AdminDoctors from "../components/AdminComponents/AdminDoctors";

// const AppRoutes = createBrowserRouter([
//   {
//     path: "/admin",
//     element: <AdminMainLayout />, // This layout contains the sidebar and topbar
//     children: [
//       {
//         path: "", // Dashboard page
//         element: <AdminDashboard />,
//       },
//       {
//         path:"patients/:patientId", // Patients page
//         element: <AdminPatients />,
//       },
//       {
//         path: "doctors", // Patients page
//         element: <AdminDoctors />,
//       },
//       // Add more routes here, such as doctors, prediction, etc.
//     ],
//   },

//   {
//     path: "/patient",
//     element: <PatientMainLayout />, // This layout contains the sidebar and topbar
//     children: [
//       {
//         path: "", // Dashboard page
//         element: <PatientDashboard />,
//       },
//       {
//         path: "patients", // Patients page
//         element: <PatientMedicalInfo />,
//       },
//       // Add more routes here, such as doctors, prediction, etc.
//     ],
//   },
//   { path: "/", element: <HomePage /> },
//   { path: "/about", element: <AboutPage /> },
//   { path: "/doctors", element: <FetchAllDoctors /> },
//   { path: "/contact", element: <ContactUsPage /> },
//   { path: "/login", element: <LoginPage /> },
//   { path: "/register-patient", element: <RegisterPage /> },
//   { path: "/register-user", element: <RegisterUser /> },
//   { path: "/admin-dashboard", element: <AdminDashboard /> },
//   { path: "/patient-dashboard", element: <PatientDashboard /> },
//   { path: "/patient-dashboard", element: <PatientDashboard /> },
 
//   { path: "/tests2", element: <Tests /> },
// ]);

// export default AppRoutes;


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
import ServicesPage from "../pages/ServicePgae";
import PatientDashboard from "../components/PatientHomePageComponents/PatientDashboard";
import PatientMainLayout from "../components/layouts/PatientMainLayout";
import PatientMedicalInfo from "../components/PatientHomePageComponents/PatientMedicalInfo";
import AdminDoctors from "../components/AdminComponents/AdminDoctors";
import AdminPatientInfoChange from "../pages/Admin/AdminPatientInfoChange"; // Import the new component
import DoctorMainLayout from "../components/layouts/DoctorMainLayout";
import DoctorDashboard from "../components/DoctorComponents/DoctorDashboard";
import DoctorDoctors from "../components/DoctorComponents/DoctorDoctors";
import DoctorPatients from "../components/DoctorComponents/DoctorPatients";
import CreateDoctorForm from "../components/AdminComponents/AddingDoctor"; // Adjust the path as needed


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
        path: "patients", // Patient medical info page
        element: <PatientMedicalInfo />,
      },
      // Add more patient routes here if necessary
    ],
  },
  {
    path: "/doctor",
    element: <DoctorMainLayout />, // Doctor layout with sidebar and topbar
    children: [
      {
        path: "", // Doctor dashboard
        element: <DoctorDashboard />,
      },
      {
        path: "patients", // Doctor medical info page
        element: <DoctorPatients />,
      },
      {
        path: "doctors", // Doctors list page
        element: <DoctorDoctors />,
      },
      // Add more doctor routes here if necessary
    ],
  },
  
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },

  { path: "/about", element: <AboutPage /> },
  { path: "/doctors", element: <FetchAllDoctors /> },
  { path: "/contact", element: <ContactUsPage /> },
  { path: "/register-patient", element: <RegisterPage /> },
  { path: "/register-user", element: <RegisterUser /> },
  { path: "/services", element: <ServicesPage/>},
  { path: "/admin-dashboard", element: <AdminDashboard /> }, // Admin dashboard standalone route
  { path: "/patient-dashboard", element: <PatientDashboard /> }, // Patient dashboard standalone route
  { path: "/tests2", element: <Tests /> }, // Testing page route
]);

export default AppRoutes;

