import PageHero from "../components/PageHero";

const photos = [
  { src: "/assets/pastor-upload12.jpg", alt: "Pastor" },
  { src: "/assets/prayer-upload1.jpg", alt: "Prayer" },
  { src: "/assets/prayer-upload2.jpg", alt: "Prayer" },
  { src: "/assets/church-family-upload3.jpg", alt: "Church Family" },
  { src: "/assets/church-family-upload4.jpg", alt: "Church Family" },
  { src: "/assets/church-family-upload5.jpg", alt: "Church Family" },
  { src: "/assets/church-family-upload6.jpg", alt: "Church Family" },
  { src: "/assets/church-family-upload7.jpg", alt: "Church Family" },
  { src: "/assets/worship-upload8.jpg", alt: "Worship" },
  { src: "/assets/worship-upload9.jpg", alt: "Worship" },
  { src: "/assets/worship-upload10.jpg", alt: "Worship" },
  { src: "/assets/outreach-upload11.jpg", alt: "Outreach" },
  { src: "/assets/pastor1.jpg", alt: "Pastor" },
  { src: "/assets/worship1.jpg", alt: "Worship" },
  { src: "/assets/family.jpg", alt: "Church Family" },
  { src: "/assets/pastor2.jpg", alt: "Pastor" },
  { src: "/assets/worship2.jpg", alt: "Worship" },
  { src: "/assets/baptism.jpg", alt: "Prayer" },
  { src: "/assets/family2.jpg", alt: "Church Family" },
  { src: "/assets/outreach.jpg", alt: "Outreach" },
];

export default function Gallery() {
  return (
    <>
      <PageHero title="Gallery" />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <figure key={photo.src} className="group overflow-hidden rounded-lg">
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
