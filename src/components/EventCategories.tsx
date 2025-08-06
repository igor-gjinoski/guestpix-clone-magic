import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import weddingImage from "@/assets/wedding-image.jpg";
import businessImage from "@/assets/business-image.jpg";
import celebrationImage from "@/assets/celebration-image.jpg";

const EventCategories = () => {
  const categories = [
    {
      title: "WEDDINGS",
      description: "From the night before to the big day, see every moment of your wedding and treasure the memories forever.",
      image: weddingImage,
      link: "/weddings"
    },
    {
      title: "CELEBRATIONS", 
      description: "From graduations and reunions to baby showers and religious celebrations. Enjoy every moment through the eyes of your guests.",
      image: celebrationImage,
      link: "/celebrations"
    },
    {
      title: "BUSINESS",
      description: "Hosting a corporate or community event? No matter the size, increase event engagement, see the highlights, and gather testimonials.",
      image: businessImage,
      link: "/business"
    },
    {
      title: "CHRISTMAS HOLIDAY PARTIES",
      description: "From corporate Christmas parties to family gatherings. Capture all the festive moments in one gallery no matter the event.",
      image: celebrationImage,
      link: "/christmas-holiday-parties"
    },
    {
      title: "MEMORIALS",
      description: "You and your memorial guests can upload their favorite memories to share and leave written messages of support for you and the family.",
      image: celebrationImage,
      link: "/memorials"
    },
    {
      title: "VACATIONS",
      description: "Capture everyone's holiday memories so no one misses out! It's so easy for you and your travel companions.",
      image: businessImage,
      link: "/vacations"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            What event are you planning?
          </h2>
          <p className="text-lg text-muted-foreground">
            From weddings, celebrations, group holidays and festivals, to small business and corporate events, we've got your guest photos covered!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white w-full"
                >
                  {category.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCategories;