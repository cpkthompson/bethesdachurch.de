import { Link } from "react-router-dom";

const pillars = [
  { title: "Worship", text: "Encountering God in Spirit and truth." },
  { title: "The Word", text: "Rooted in Scripture and discipleship." },
  { title: "Community", text: "Doing life together as a family." },
  { title: "Evangelism", text: "Sharing the hope of Christ with all." },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[85vh] overflow-hidden">
        <img
          src="/assets/worship1.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
        <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-4 py-24">
          <p className="text-xs tracking-[0.35em] text-gold uppercase">
            Welcome to
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight text-cream md:text-7xl">
            Bethesda Evangelical Church
            <span className="block text-gold">House of Grace</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/75">
            A loving and welcoming church passionate about God and people. No
            matter where you come from or what your past looks like — you are
            welcome here.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded bg-gold px-6 py-3 text-sm font-medium text-charcoal hover:bg-gold-light"
            >
              Visit Us
            </Link>
            <Link
              to="/prayer"
              className="rounded border border-cream/30 px-6 py-3 text-sm text-cream hover:border-gold hover:text-gold"
            >
              Prayer Request
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs tracking-[0.3em] text-gold uppercase">
            About Our Church
          </p>
          <h2 className="mt-3 font-serif text-4xl text-cream">
            A family rooted in Christ.
          </h2>
          <p className="mt-4 text-cream/70">
            We are a loving and welcoming church. Our community is passionate
            about God and people. No matter where you come from or what your
            past looks like, you are welcome here.
          </p>
          <ul className="mt-6 space-y-2 text-cream/80">
            <li>God&apos;s love for everyone</li>
            <li>The power of prayer</li>
            <li>A life transformed through Jesus Christ</li>
          </ul>
          <Link
            to="/about"
            className="mt-6 inline-block text-sm text-gold hover:text-gold-light"
          >
            Learn More →
          </Link>
        </div>
        <img
          src="/assets/church-family-2025.jpg"
          alt="Bethesda church family gathered in worship"
          className="aspect-[4/3] w-full rounded-lg object-cover"
        />
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-center text-xs tracking-[0.3em] text-gold uppercase">
            What we live for
          </p>
          <h2 className="mt-3 text-center font-serif text-4xl text-cream">
            Passionate about Jesus &amp; people
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-white/10 p-6 text-center"
              >
                <h3 className="font-serif text-2xl text-gold">{item.title}</h3>
                <p className="mt-3 text-sm text-cream/65">{item.text}</p>
              </div>
            ))}
          </div>
          <blockquote className="mx-auto mt-16 max-w-2xl text-center">
            <p className="font-serif text-xl italic text-cream/80">
              &ldquo;For all have sinned and fall short of the glory of God.&rdquo;
            </p>
            <cite className="mt-2 block text-xs tracking-[0.2em] text-gold not-italic uppercase">
              — Romans 3:23
            </cite>
          </blockquote>
        </div>
      </section>
    </>
  );
}
