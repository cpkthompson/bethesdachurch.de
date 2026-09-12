import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const values = [
  {
    title: "Our Mission",
    text: "To transform lives through Jesus Christ — leading people to salvation, growth and purpose.",
  },
  {
    title: "Our Vision",
    text: "A thriving multicultural church family raising disciples and impacting Germany and beyond.",
  },
  {
    title: "Our Values",
    text: "Worship, the Word, prayer, community, evangelism and youth empowerment.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Our Church Family"
        subtitle="A loving, welcoming, Spirit-filled family"
        image="/assets/church-family-hero.jpg"
        imageAlt="Bethesda church family gathered together"
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="max-w-3xl text-lg text-cream/75">
          Bethesda Evangelical Church — House of Grace is a multicultural
          evangelical church founded in 2010 in Osnabrück, Germany. We are
          passionate about Jesus Christ, prayer, worship, evangelism,
          discipleship, community and youth empowerment. No matter where you
          come from or what your past looks like — you are welcome here.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-white/10 p-6"
            >
              <h3 className="font-serif text-2xl text-gold">{item.title}</h3>
              <p className="mt-3 text-sm text-cream/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-3xl text-cream">Meet Our Pastor</h2>
            <p className="mt-4 text-cream/70">
              Our pastor is passionate about preaching the Gospel, raising
              disciples and leading people into a deeper relationship with Jesus
              Christ.
            </p>
            <Link
              to="/journey"
              className="mt-6 inline-block text-sm text-gold hover:text-gold-light"
            >
              See Our Journey Since 2010 →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/pastor1.jpg"
              alt="Pastor preaching"
              className="aspect-[3/4] rounded-lg object-cover"
            />
            <img
              src="/assets/pastor-and-wife.jpg"
              alt="Pastor and wife smiling together"
              className="aspect-[3/4] rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
