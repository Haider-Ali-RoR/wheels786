import { Routes, Route } from "react-router-dom";
import App from "./App";
import BookingPage from "./pages/BookingPage";

/** Route table shared by the client (main.tsx) and the prerenderer (entry-server.tsx). */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/book" element={<BookingPage />} />
    </Routes>
  );
}
