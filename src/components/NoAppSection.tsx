import { Button } from "@/components/ui/button";

const NoAppSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* What's New Section */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-muted-foreground mb-4 tracking-wider">
            WHAT'S NEW:
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Hola, Bonjour, Hallo!
          </h2>
          
          <h3 className="text-xl md:text-2xl font-semibold text-navy mb-6">
            Host and Guest Experience Now Available in Spanish, French & German!
          </h3>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            We want all our hosts and your special guests to have a localized experience.
          </p>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            That's why we're thrilled to announce our latest update: the GUESTPIX™ host and guest interface are now available in Spanish, French, and German!
          </p>
        </div>

        {/* No App Section */}
        <div className="text-center">
          <h6 className="text-sm font-semibold text-muted-foreground mb-8 tracking-wider">
            IT'S AS EASY AS
          </h6>
          
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
            NO APP & NO GUEST REGISTRATION
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With GUESTPIX™ there's no need to ask all guests to download a photo sharing app or register! Your GUESTPIX™ event QR code / private link is how they add their best photos, videos and guestbook messages. Everyone will instantly enjoy the memories and you can download everything in a click.
            </p>
            
            <h4 className="text-xl font-semibold text-navy mb-8">
              2 mins to set up, it's so easy!
            </h4>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-navy mb-6">
                HOW MANY GUESTS AT YOUR EVENT?
              </h3>
              
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold"
              >
                Buy Now
              </Button>
            </div>
            
            <div className="bg-gradient-soft p-8 rounded-lg">
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                There's magic in life's unforgettable moments. In the celebrations and laughter shared together. In saying "yes" to new adventures and reaching new milestones. Life's simply better when enjoyed together.
              </p>
              
              <h4 className="text-xl font-semibold text-navy mt-6">
                Don't miss a moment!
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoAppSection;