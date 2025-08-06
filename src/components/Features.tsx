import { Button } from "@/components/ui/button";
import phoneMockup from "@/assets/phone-mockup.png";

const Features = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Main Feature Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
            We instantly create a private event QR code for you that saves all full resolution photos to your live event photo gallery or albums.
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-8">
            No App. No Fuss.
          </h3>
          
          <h6 className="text-sm font-semibold text-muted-foreground mb-8 tracking-wider">
            USE IT FOR PHOTOS + VIDEOS + GUESTBOOK + SLIDESHOW
          </h6>
          
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            How it Works
          </Button>
        </div>

        {/* Device Showcase */}
        <div className="flex justify-center mb-16">
          <img 
            src={phoneMockup} 
            alt="Phone showing guestpix interface" 
            className="max-w-md w-full h-auto"
          />
        </div>

        {/* Gallery Description */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Receive Unforgettable Memories In Your Digital Event Gallery or Albums
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Capture the best moments from your guests in your <strong>digital event gallery,</strong> or have everything <strong>organized in Albums.</strong>
          </p>
          
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            No matter what event you're hosting, you'll receive guest <strong>photos, videos and guestbook messages.</strong> You can even stream your photos at the event by activating the <strong>slideshow feature!</strong>
          </p>
          
          <p className="text-muted-foreground mb-8">
            You have 12 months to download your zip file containing all your content in original-resolution to enjoy forever.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-navy mb-6">
            You and your guests will love how easy it is! No need to download an app for photo sharing - a QR Code or a private link is all you need to share
          </h3>
          
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            How it Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;