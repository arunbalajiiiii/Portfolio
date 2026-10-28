import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import WorkList from "../components/WorkList";
import ContactForm from "../components/ContactForm";
import { profile, skills, projects } from "../lib/data";

export default function Home() {
  const edu = profile.education;
  return (
    <main>
      <Hero name={profile.name} location={profile.location} tagline={profile.tagline} photo={profile.photo} />

      <section id="about" className="sec">
        <h2>About</h2>
        <div className="cols">
          <div className="prose">
            <p>{profile.about}</p>
            <div className="tags">{profile.aboutSkills.map((s) => <span key={s}>{s}</span>)}</div>
          </div>
          <div>
            {profile.experience.map((e) => (
              <div key={e.org} className="role">
                <time>{e.when}</time>
                <h3>{e.title}, <span className="acc">{e.org}</span></h3>
                <p className="muted">{e.text}</p>
              </div>
            ))}
            <div className="role">
              <time>Graduating {edu.year}</time>
              <h3>{edu.degree}</h3>
              <p className="muted">{edu.school}, {edu.place}.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="sec nopad"><h2 className="padx">Skills</h2></section>
      <Marquee skills={skills} />

      <section id="work" className="sec">
        <h2>Projects</h2>
        <WorkList projects={projects} />
      </section>

      <section id="achievements" className="sec">
        <div className="cols">
          <div>
            <h2>Certifications</h2>
            <div className="tags">{profile.certifications.map((c) => <span key={c}>{c}</span>)}</div>
          </div>
          <div>
            <h2>Achievements</h2>
            <ul className="list">{profile.achievements.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
        </div>
      </section>

      <section id="contact" className="sec contact">
        <h2>Let's build something useful.</h2>
        <div className="cols">
          <div className="prose">
            <p>I'm open to opportunities to contribute to real products.</p>
            <p>{profile.name}<br />{profile.location}</p>
            <p>
              <a className="acc" href={`mailto:${profile.email}`}>{profile.email}</a><br />
              <a className="acc" href={profile.linkedin}>LinkedIn</a>, <a className="acc" href={profile.github}>GitHub</a>
            </p>
            <div className="row"><a className="btn ghost" href={profile.cv} download>Download CV</a></div>
          </div>
          <ContactForm to={profile.email} />
        </div>
      </section>
    </main>
  );
}
