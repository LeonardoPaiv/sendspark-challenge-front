import { useState, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { ThemeProvider } from "@emotion/react";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import theme from "./theme";

function App() {
  const [token, setToken] = useState<string | null>(null);
  const [firstName, setfirstName] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    } else {
        navigate("/login");
    }
  }, [navigate]);

  const login = (newToken: string, name: string) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("firstName", name);
    setToken(newToken);
    setfirstName(name);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    setToken(null);
    setfirstName(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, firstName, login, logout }}>
      <ThemeProvider theme={theme}>
        <Routes>
            <Route path="/" element={<SignupPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
