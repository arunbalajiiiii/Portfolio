"use client";
import { useState } from "react";
import Link from "next/link";

function Thumb({ slug }) {
  const [bad, setBad] = useState(false);
  return (
    <Link href={`/work/${slug}`} className="thumb" aria-label="Open case study">
      {bad ? <span>Project image</span> : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`/images/projects/${slug}-desktop.png`} alt="" onError={() => setBad(true)} />
      )}
    </Link>
  );
}

export default function WorkList({ projects }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div className="cards">
      {projects.map((p) => (
        <article key={p.slug} className="card glow" onMouseMove={move}>
          <Thumb slug={p.slug} />
          <h3><Link href={`/work/${p.slug}`}>{p.title}</Link></h3>
          <p className="muted">{p.summary}</p>
          <div className="tags">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
          <div className="acts">
            <Link href={`/work/${p.slug}`} className="more">Case study</Link>
            <a className={`btn ghost small ${p.live ? "" : "off"}`} href={p.live || undefined} aria-disabled={!p.live}>Live Demo</a>
            <a className="btn ghost small" href={p.repo}>GitHub</a>
          </div>
        </article>
      ))}
    </div>
  );
}
