import PageHero from "../components/PageHero";

const schedule = [
  { day: "Friday", time: "18:00", activity: "Friday Prayer" },
  { day: "Saturday", time: "", activity: "Youth Prayer" },
  { day: "Saturday", time: "", activity: "Bible Study" },
  { day: "Saturday", time: "", activity: "In-House Prayer" },
  { day: "Saturday", time: "", activity: "Prayer on Zoom" },
  { day: "Sunday", time: "11:00", activity: "Youth Service" },
  { day: "Sunday", time: "13:00", activity: "Main Service" },
];

export default function Weekly() {
  return (
    <>
      <PageHero
        title="Weekly Activities"
        subtitle="Come worship and grow with us."
      />

      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="space-y-4">
          {schedule.map((item) => (
            <div
              key={`${item.day}-${item.activity}`}
              className="flex items-center justify-between rounded-lg border border-white/10 px-6 py-4"
            >
              <div>
                <p className="font-medium text-cream">{item.activity}</p>
                <p className="text-sm text-cream/50">{item.day}</p>
              </div>
              {item.time && (
                <span className="font-serif text-xl text-gold">{item.time}</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-gold/30 bg-gold/5 p-6">
          <h3 className="font-serif text-xl text-gold">Join on Zoom</h3>
          <p className="mt-2 text-cream/70">
            Meeting ID: <span className="text-cream">7532078373</span>
          </p>
          <p className="text-cream/70">
            Password: <span className="text-cream">497658</span>
          </p>
        </div>
      </section>
    </>
  );
}
