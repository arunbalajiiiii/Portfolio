import { Newsreader, Hanken_Grotesk } from "next/font/google";
import Link from "next/link";
import { profile } from "../lib/data";
import "./globals.css";

const serif = Newsreader({ subsets: ["latin"], variable: "--serif", weight: ["300", "400", "500"] });
const sans = Hanken_Grotesk({ subsets: ["latin"], variable: "--sans" });

export const metadata = {
  title: `${profile.name} | Software Developer`,
  description: "Computer Science student building AI-assisted software and automation. Open to software development internships.",
  openGraph: { title: `${profile.name} | Software Developer`, description: "Building software that automates real work.", type: "website" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <header className="nav">
          <Link href="/" className="logo">{profile.name}</Link>
          <nav>
            <Link href="/#about">About</Link>
            <Link href="/#skills">Skills</Link>
            <Link href="/#work">Projects</Link>
            <Link href="/#contact">Contact</Link>
            <a href={profile.cv} download className="btn small">Download CV</a>
          </nav>
        </header>
        {children}
        <footer className="foot">
          <span>&copy; 2026 {profile.name}. Software Developer | AI &amp; Backend Development</span>
          <span><a href={profile.linkedin}>LinkedIn</a><a href={profile.github}>GitHub</a>{profile.instagram && <a href={profile.instagram}>Instagram</a>}</span>
        </footer>
      </body>
    </html>
  );
}
