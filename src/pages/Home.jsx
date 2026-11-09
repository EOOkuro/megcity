import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MISSION, ABOUT, PILLARS, LEAGUES, INCUBATION, CLUBS, PARTNERS } from "../data/content.js";

export default function Home() {
  useEffect(() => { document.title = "MegCity Foundation | Soccer for all, from first kick to last"; }, []);
  return (
    <div>
      <section className="hero">
        <div>
          <h1>Soccer for all, from first kick to last.</h1>
          <p className="hero-copy">{MISSION}</p>
          <div className="hero-actions">
            <Link className="hero-button" to="/leagues">See our leagues</Link>
            <Link className="text-link" to="/about">Read our story</Link>
          </div>
        </div>
        <div className="hero-image" role="img" aria-label="Players on a Chicago field" />
      </section>

      <section className="mission">
        <h2>{ABOUT}</h2>
        <div className="pillars">
          {PILLARS.map((p) => <div key={p.name}><h3>{p.name}</h3><p>{p.text}</p></div>)}
        </div>
      </section>

      <section className="band">
        <div className="band-head"><h2>Our leagues</h2><Link className="text-link" to="/leagues">All leagues</Link></div>
        <div className="feature-row">
          {LEAGUES.map((l) => (
            <a key={l.name} href={l.url} target="_blank" rel="noreferrer">
              <h3>{l.name}</h3><p>{l.blurb}</p><span className="go">Visit site</span>
            </a>
          ))}
        </div>
      </section>

      <section className="band alt">
        <div className="band-head"><h2>Incubation</h2><Link className="text-link" to="/incubation">How it works</Link></div>
        <p className="lede">{INCUBATION.statement}</p>
        <div className="chips">{INCUBATION.places.map((p) => <span className="chip" key={p}>{p}</span>)}</div>
      </section>

      <section className="band">
        <h2>Clubs and partners</h2>
        <div className="chips">
          {CLUBS.map((c) => <span className="chip" key={c}>{c}</span>)}
          {PARTNERS.map((p) => <span className="chip" key={p.name}>{p.name}</span>)}
        </div>
      </section>
    </div>
  );
}
