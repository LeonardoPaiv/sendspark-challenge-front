import { useState, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { ThemeProvider } from "@emotion/react";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import theme from "./theme";
import { ToastContext } from "./context/ToastContext";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [token, setToken] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    } 
  }, [navigate]);

  const login = (newToken: string, name: string) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("firstName", name);
    setToken(newToken);
    setFirstName(name);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    setToken(null);
    setFirstName(null);
    navigate("/login");
  };

  const success = (value: string) => {
    toast.success(value);
  };

  const error = (value: string) => {
    toast.error(value);
  };

  const info = (value: string) => {
    toast.info(value);
  };

  return (
    <ToastContext.Provider value={{ success, error, info }}>
      <ToastContainer />
      <AuthContext.Provider value={{ token, firstName, login, logout }}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<SignupPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </AuthContext.Provider>
    </ToastContext.Provider>
  );
}

export default App;
