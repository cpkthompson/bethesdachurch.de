import PageHero from "../components/PageHero";

const ministries = [
  {
    title: "Men's Ministry",
    intro:
      "The Men's Ministry at Bethesda House of Grace is a vibrant community where men of all ages come together to deepen their faith and support one another.",
    points: [
      "Study God's Word in community",
      "Grow in faith and brotherhood",
      "Serve the local community",
      "Discover God's purpose",
    ],
  },
  {
    title: "Women's Ministry",
    intro:
      "The Women's Ministry at Bethesda House of Grace is a vibrant community where women of all ages come together to deepen their faith and support one another.",
    points: [
      "Faithfulness in God's work",
      "Reconciliation",
      "Restoration",
      "Spiritual growth",
    ],
  },
  {
    title: "Prayer Ministry",
    intro:
      "The Prayer Ministry is the spiritual backbone of Bethesda House of Grace. We believe prayer changes things and God moves in response to the cries of His people.",
    points: [
      "Pray for healing",
      "Intercede for nations",
      "Pray for the church",
      "Worship and prayer",
    ],
  },
];

export default function Ministries() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Our Ministries"
        subtitle="Find your place in the family of God."
      />

      <section className="mx-auto max-w-6xl space-y-12 px-4 py-16">
        {ministries.map((ministry) => (
          <article
            key={ministry.title}
            className="rounded-lg border border-white/10 p-8"
          >
            <h3 className="font-serif text-3xl text-gold">{ministry.title}</h3>
            <p className="mt-4 max-w-3xl text-cream/75">{ministry.intro}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {ministry.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-cream/70">
                  <span className="text-gold">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </>
  );
}
