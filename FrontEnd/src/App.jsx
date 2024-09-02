import IndexPage from "./Pages/IndexPage";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactUsPage from "./Pages/ContactUsPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import RegisterPatientPage from "./Pages/RegisterPatientPage";
import HomeUsersPage from "./Pages/HomeUsersPage";
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
    // let Component;
    // switch (window.location.pathname) {
    //     case "/":
    //         Component = <IndexPage />;
    //         break;
    //     case "/home":
    //         Component = <HomePage />;
    //         break;
    //     case "/about":
    //         Component = <AboutPage />
    //         break;
    //     case "/contact":
    //         Component = <ContactUsPage />
    //         break;
    //     case "/login":
    //         Component = <LoginPage />
    //         break;
    //     case "/register":
    //         Component = <RegisterPage />
    //         break;
    //     case "/registerpatient":
    //         Component = <RegisterPatientPage />
    //         break
    //     default:
    //         Component = <IndexPage />;
    // }
    // return (
    //     <div>
    //         {Component}
    //     </div>
    // )

    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactUsPage />} />
                <Route path="/services" element={<IndexPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/registerpatient" element={<RegisterPatientPage />} />
                <Route path="/homeusers" element={<HomeUsersPage />} />
            </Routes>
            </BrowserRouter>
        </div>
    )

}

export default App
