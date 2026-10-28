"use client";
import { useEffect, useState } from "react";

const phrases = ["Software Developer", "AI & Backend Developer"];

export default function Hero({ name, location, tagline, photo }) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = phrases[i];
    let d = del ? 35 : 70, fn;
    if (!del && txt === full) { d = 1400; fn = () => setDel(true); }
    else if (del && txt === "") { d = 200; fn = () => { setDel(false); setI((i + 1) % phrases.length); }; }
    else fn = () => setTxt(del ? full.slice(0, txt.length - 1) : full.slice(0, txt.length + 1));
    const t = setTimeout(fn, d);
    return () => clearTimeout(t);
  }, [txt, del, i]);

  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const words = tagline.split(" ");

  return (
    <section className="hero glow" onMouseMove={move}>
      <div className="hero-grid">
        <div className="hero-content">
          <p className="kicker">{name}, {location}</p>
          <h1>{words.map((w, k) => <span key={k} className="w" style={{ animationDelay: `${k * 90}ms` }}>{w}&nbsp;</span>)}</h1>
          <p className="typed"><b>{txt}</b><i className="caret" /></p>
          <div className="row">
            <a href="#work" className="btn">View Projects</a>
            <a href="#contact" className="btn ghost">Contact Me</a>
          </div>
        </div>
        {photo && (
          <div className="hero-avatar-wrap">
            <div className="hero-avatar-card">
              <div className="hero-avatar-glow" aria-hidden="true" />
              <div className="hero-avatar-inner">
                <img src={photo} alt={name} className="hero-avatar-img" />
              </div>
              <div className="hero-status-pill">
                <span className="hero-status-dot" />
                <span>Available for Internships</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
