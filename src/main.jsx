import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/router";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-7xl mx-auto">
     <HelmetProvider>
      <title>bisto boss</title>
     <RouterProvider router={router} />
     </HelmetProvider>
    </div>
  </React.StrictMode>
);
