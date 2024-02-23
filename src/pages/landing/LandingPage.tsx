import AppointmentSection from "../../components/landing/appointment/AppointmentSection";
import ContactSection from "../../components/landing/contact/ContactSection";
import ContactReasonSection from "../../components/landing/contact_reason/ContactReasonSection";
import Hero from "../../components/landing/hero/hero";
import ReviewsSection from "../../components/landing/reviews/ReviewsSection";
import ServicesSection from "../../components/landing/services/ServicesSection";
import SataticsSection from "../../components/landing/statistics/Satatics";

export default function LandingPage() {
  return (
    <div className="p-4 md:p-0">
      <Hero />
      <SataticsSection />
      <ServicesSection />
      <AppointmentSection />
      <ReviewsSection />
      <ContactReasonSection />
      <ContactSection />
    </div>
  );
}
