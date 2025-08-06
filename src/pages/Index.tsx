import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import EventTypes from "@/components/EventTypes";
import Features from "@/components/Features";
import EventCategories from "@/components/EventCategories";
import NoAppSection from "@/components/NoAppSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <EventTypes />
      <Features />
      <EventCategories />
      <NoAppSection />
    </div>
  );
};

export default Index;
