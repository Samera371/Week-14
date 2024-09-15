import "./index.css"; // Import the CSS file for global styling

import App from "./App.tsx"; // Import the main App component
import { StrictMode } from "react"; // Import StrictMode from React for highlighting potential problems in an application
import { createRoot } from "react-dom/client"; // Import createRoot from React DOM for rendering the application

// Create a root container and render the App component within it
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* StrictMode is a tool for highlighting potential problems in an application */}
    <App /> {/* Render the main App component */}
  </StrictMode>
);
