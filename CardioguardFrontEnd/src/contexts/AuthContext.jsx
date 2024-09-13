// AuthContext.jsx
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);
  const navigate = useNavigate();

  const login = (data) => {
    setAuthData(data);
    if (data.roles.includes("ADMIN")) {
      navigate("/admin");
    } else if (data.roles.includes("DOCTOR")) {
      navigate("/doctor");
    } else if (data.roles.includes("USER")) {
      navigate("/patient");
    } else {
      navigate("/login");
    }
  };

  const logout = () => {
    setAuthData(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
