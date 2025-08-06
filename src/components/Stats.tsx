const Stats = () => {
  const stats = [
    {
      number: "100k+",
      label: "Global Events",
      description: "Trusted by over 100k hosts just like you – in over 100 countries."
    },
    {
      number: "1,000,000's",
      label: "of Happy Guests",
      description: "Helping you capture the moments you may have missed – one photo, video, and guestbook message at a time."
    },
    {
      number: "#1",
      label: "World Leading",
      description: "The original digital guest platform – purpose-built to help hosts just like you turn moments into lifelong memories."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </h3>
                <h4 className="text-lg md:text-xl font-semibold text-navy">
                  {stat.label}
                </h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;