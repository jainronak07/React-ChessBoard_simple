import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Chessboard from "./App"; // Use the correct component name and default import

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Chessboard /> {/* Use uppercase when using a component */}
  </StrictMode>
);
