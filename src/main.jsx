import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="max-w-7xl mx-auto">
        <HelmetProvider>
          <title>bisto boss</title>
          <RouterProvider router={router} />
        </HelmetProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>
);
