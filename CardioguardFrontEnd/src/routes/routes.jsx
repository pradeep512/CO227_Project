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

const AppRoutes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/doctors", element: <FetchAllDoctors /> },
  { path: "/contact", element: <ContactUsPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register-patient", element: <RegisterPage /> },
  { path: "/register-user", element: <RegisterUser /> },

  { path: "/tests", element: <Tests /> },
]);

export default AppRoutes;
