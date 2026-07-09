import { useEffect } from "react";
import Navbar from "../components/Navbar";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";
import { useReveal } from "../hooks/useReveal";

export default function BookingPage() {
  useReveal();

  // Land at the top of the form page rather than a scrolled position.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="page-book">
        <BookingForm />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
