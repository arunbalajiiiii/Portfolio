import Link from "next/link";
import { notFound } from "next/navigation";
import DevicePreview from "../../../components/DevicePreview";
import { projects } from "../../../lib/data";

export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
export function generateMetadata({ params }) {
  const p = projects.find((x) => x.slug === params.slug);
  return { title: p ? `${p.title} | Arun Balaji M` : "Project", description: p?.summary };
}

export default function Project({ params }) {
  const i = projects.findIndex((x) => x.slug === params.slug);
  if (i < 0) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];
  return (
    <main className="case">
      <Link href="/#work" className="back">Back to work</Link>
      <h1>{p.title}</h1>
      <p className="lead">{p.tagline}</p>
      <DevicePreview slug={p.slug} />
      <div className="cols">
        <div>
          <h2>Overview</h2>
          <p className="muted">{p.summary}</p>
          <h2>Stack</h2>
          <div className="tags">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
        </div>
        <div>
          <h2>Key features</h2>
          <ul className="list">{p.features.map((b) => <li key={b}>{b}</li>)}</ul>
          <div className="row"><a className={`btn ghost ${p.live ? "" : "off"}`} href={p.live || undefined} aria-disabled={!p.live}>Live Demo</a><a className="btn ghost" href={p.repo}>GitHub</a></div>
        </div>
      </div>
      <Link href={`/work/${next.slug}`} className="nextp">
        <span className="muted">Next project</span>
        <strong>{next.title}</strong>
      </Link>
    </main>
  );
}
