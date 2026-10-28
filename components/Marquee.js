export default function Marquee({ skills }) {
  return (
    <section className="skills" aria-label="Skills">
      {skills.map((g, n) => {
        const items = [...g.items, ...g.items, ...g.items, ...g.items];
        return (
          <div key={g.group} className="mrow">
            <span className="mlabel">{g.group}</span>
            <div className="mwin">
              <div className={`track ${n % 2 ? "rev" : ""}`}>
                {items.map((s, k) => <span key={k} className="chip">{s}</span>)}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
