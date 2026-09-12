import { FormEvent, useState } from "react";
import PageHero from "../components/PageHero";

export default function Prayer() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="We Pray With You"
        title="Prayer Request"
        subtitle="Our intercessory team prays over every request received."
      />

      <section className="mx-auto max-w-xl px-4 py-16">
        <blockquote className="mb-10 text-center font-serif text-xl italic text-cream/80">
          &ldquo;We believe God answers prayer.&rdquo;
        </blockquote>

        {submitted ? (
          <div className="rounded-lg border border-gold/30 bg-gold/5 p-8 text-center">
            <p className="text-cream">
              Thank you. Your prayer request has been received. Our team will
              pray with you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm text-cream/70">
                Name (optional)
              </label>
              <input
                id="name"
                name="name"
                className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 text-cream outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm text-cream/70">
                Email (optional)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 text-cream outline-none focus:border-gold"
              />
            </div>
            <div>
              <label
                htmlFor="request"
                className="mb-1 block text-sm text-cream/70"
              >
                Share what&apos;s on your heart
              </label>
              <textarea
                id="request"
                name="request"
                required
                rows={6}
                className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 text-cream outline-none focus:border-gold"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded bg-gold py-3 text-sm font-medium text-charcoal hover:bg-gold-light"
            >
              Submit Prayer Request
            </button>
          </form>
        )}
      </section>
    </>
  );
}
