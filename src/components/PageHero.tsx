type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/80 to-charcoal" />
        </>
      )}
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        {eyebrow && (
          <p className="mb-3 text-xs tracking-[0.3em] text-gold uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-cream md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-cream/70">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
