import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <App />
    <ScrollToTop />
  </HelmetProvider>
);
