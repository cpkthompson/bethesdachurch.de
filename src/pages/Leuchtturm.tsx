import PageHero from "../components/PageHero";

const calling = [
  "Bringing light to those who do not yet believe.",
  "Opening the eyes of the spiritually blind.",
  "Setting the captives free.",
  "Leading those who live in darkness into God's light.",
];

const pathway = [
  "Teaching God's word",
  "Prayer",
  "Community",
  "Discipleship",
];

export default function Leuchtturm() {
  return (
    <>
      <PageHero
        eyebrow="Youth Ministry"
        title="LEUCHTTURM"
        subtitle="Be A Light. Inspired by Isaiah 42:6–8"
        image="/assets/worship2.jpg"
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-center text-lg text-cream/75">
          A generation called to shine the light of Christ.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-gold">Our Calling</h2>
            <ul className="mt-6 space-y-3">
              {calling.map((item) => (
                <li key={item} className="text-cream/75">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-gold">Our Pathway</h2>
            <p className="mt-2 text-sm text-cream/50">How do we get there?</p>
            <ul className="mt-6 space-y-3">
              {pathway.map((item) => (
                <li
                  key={item}
                  className="rounded border border-white/10 px-4 py-3 text-cream/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
