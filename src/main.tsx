import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import SignupPage from "./Pages/SignupPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignupPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
