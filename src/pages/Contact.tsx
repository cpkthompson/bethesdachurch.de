import PageHero from "../components/PageHero";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="We'd love to welcome you to our church family."
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-3">
        <div className="rounded-lg border border-white/10 p-6">
          <h3 className="font-serif text-2xl text-gold">Visit Us</h3>
          <p className="mt-4 text-cream/75">
            Lange Str. 19A
            <br />
            49080 Osnabrück, Germany
          </p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Lange%20Str.%2019A%2C%2049080%20Osnabr%C3%BCck%2C%20Germany"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-gold hover:text-gold-light"
          >
            Get Directions →
          </a>
        </div>

        <div className="rounded-lg border border-white/10 p-6">
          <h3 className="font-serif text-2xl text-gold">Email</h3>
          <a
            href="mailto:besthesdahouseofgrace1010@gmail.com"
            className="mt-4 block text-cream/75 hover:text-gold"
          >
            besthesdahouseofgrace1010@gmail.com
          </a>
          <a
            href="mailto:besthesdahouseofgrace1010@gmail.com"
            className="mt-4 inline-block text-sm text-gold hover:text-gold-light"
          >
            Send Email →
          </a>
        </div>

        <div className="rounded-lg border border-white/10 p-6">
          <h3 className="font-serif text-2xl text-gold">Sunday Service</h3>
          <ul className="mt-4 space-y-2 text-cream/75">
            <li>Youth Service · 11:00</li>
            <li>Main Service · 13:00</li>
          </ul>
        </div>
      </section>
    </>
  );
}
