import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="People celebrating and taking photos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h2 className="text-lg md:text-xl font-medium mb-4 opacity-90">
          Capture the memories forever with snapshive.
        </h2>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Digital Photo Gallery<br />
          and Guestbook
        </h1>
        
        <div className="space-y-4 mb-8">
          <h3 className="text-lg md:text-xl font-medium">
            Save the memories from your event to enjoy for a lifetime
          </h3>
          <h3 className="text-lg md:text-xl font-medium italic">
            Because it only happens once!
          </h3>
        </div>

        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-elegant"
        >
          Get Started
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-60">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;