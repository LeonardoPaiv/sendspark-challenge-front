import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import SignupPage from "./Pages/SignupPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import { AuthProvider } from "./context/AuthContext";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignupPage />,
  },
  {
    path: 'home',
    element: <Home />
  },
  {
    path: 'login',
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
