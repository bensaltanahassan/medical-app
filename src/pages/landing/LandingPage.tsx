import AppointmentSection from "../../components/landing/appointment/AppointmentSection";
import Hero from "../../components/landing/hero/hero";
import ReviewsSection from "../../components/landing/reviews/ReviewsSection";
import ServicesSection from "../../components/landing/services/ServicesSection";
import SataticsSection from "../../components/landing/statistics/Satatics";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <SataticsSection />
      <ServicesSection />
      <AppointmentSection />
      <ReviewsSection />
    </div>
  );
}
