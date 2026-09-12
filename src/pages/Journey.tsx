import PageHero from "../components/PageHero";

const milestones = [
  {
    year: "2010",
    title: "The Beginning",
    text: "Bethesda Evangelical Church – House of Grace was founded with a vision to transform lives through Jesus Christ.",
    image: "/assets/family2.jpg",
  },
  {
    year: "2012",
    title: "Growing in Faith",
    text: "The church began growing steadily through prayer, worship and evangelism.",
    image: "/assets/worship1.jpg",
  },
  {
    year: "2015",
    title: "Expanding Ministries",
    text: "Expansion of ministries and stronger community outreach.",
    image: "/assets/outreach.jpg",
  },
  {
    year: "2018",
    title: "Multicultural Worship",
    text: "Growth in multicultural worship and discipleship.",
    image: "/assets/worship2.jpg",
  },
  {
    year: "2022",
    title: "A Family of Faith",
    text: "Baptisms, weddings and new disciples — God added daily to the church.",
    image: "/assets/baptism.jpg",
  },
  {
    year: "2026",
    title: "Shining Brighter",
    text: "A thriving church family raising disciples and impacting lives in Germany and beyond.",
    image: "/assets/church-family-2025-journey.webp",
  },
];

export default function Journey() {
  return (
    <>
      <PageHero
        title="Our Journey Since 2010"
        subtitle="Fifteen years of God's faithfulness in Osnabrück."
      />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-12">
          {milestones.map((item, i) => (
            <article
              key={item.title}
              className={`grid gap-6 md:grid-cols-2 md:items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
            >
              <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <p className="text-sm text-gold">{item.year}</p>
                <h3 className="mt-1 font-serif text-3xl text-cream">
                  {item.title}
                </h3>
                <p className="mt-3 text-cream/70">{item.text}</p>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className={`aspect-video rounded-lg object-cover ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}
              />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
