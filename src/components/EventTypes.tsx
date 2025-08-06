const EventTypes = () => {
  const eventTypes = [
    "CHRISTMAS & NYE PARTIES",
    "AWARD CEREMONIES", 
    "HOLIDAYS",
    "BIRTHDAYS",
    "ENGAGEMENT PARTIES",
    "WEDDINGS",
    "CORPORATE & BUSINESS EVENTS",
    "CHRISTENING & B'NAI MITZVAHS",
    "REUNIONS",
    "FUNERALS & MEMORIALS",
    "BABY SHOWERS",
    "QUINCEANERAS",
    "CHRISTMAS DAY",
    "SCAVENGER HUNTS",
    "THANKSGIVING"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h5 className="text-lg font-semibold text-muted-foreground mb-8 tracking-wider">
            LOVED & USED FOR
          </h5>
          
          <div className="flex flex-wrap justify-center gap-4">
            {eventTypes.map((eventType, index) => (
              <a
                key={index}
                href="#"
                className="inline-block px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 hover:underline transition-colors"
              >
                {eventType}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTypes;