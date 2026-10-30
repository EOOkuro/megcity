import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SITE } from "../data/site.js";
import { MISSION, LEAGUES, INCUBATION, CLUBS, PARTNERS } from "../data/content.js";

export default function Home() {
  useEffect(() => { document.title = SITE.name + " | Soccer for all, from first kick to last"; }, []);
  return (
    <div className="brand-home">
      <section className="hero">
        <div className="hero-image" /><div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Chicago · Kisumu · Migori</p>
          <h1>FIRST KICK<br /><em>TO LAST.</em></h1>
          <p className="hero-copy">{MISSION}</p>
          <div className="hero-actions">
            <Link className="hero-button" to="/leagues">Our leagues <span>↗</span></Link>
            <Link className="text-link" to="/about">About the foundation</Link>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band-head"><h2>OUR LEAGUES</h2><Link className="text-link" to="/leagues">All leagues</Link></div>
        <div className="feature-row">
          {LEAGUES.map((l, i) => (
            <a key={l.name} href={l.url} target="_blank" rel="noreferrer">
              <span className="feature-number">0{i + 1}</span>
              <h3>{l.name.toUpperCase()}</h3>
              <p>{l.blurb}</p>
              <span className="go">Visit site ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="band-head"><h2>INCUBATION</h2><Link className="text-link" to="/incubation">How it works</Link></div>
        <p className="lede" style={{ marginBottom: 24 }}>{INCUBATION.statement}</p>
        <div className="chips">{INCUBATION.places.map((p) => <span className="chip" key={p}>{p}</span>)}</div>
      </section>

      <section className="band">
        <div className="band-head"><h2>CLUBS</h2></div>
        <div className="chips">{CLUBS.map((c) => <span className="chip" key={c}>{c}</span>)}</div>
      </section>

      <section className="band">
        <div className="band-head"><h2>PARTNERS</h2><Link className="text-link" to="/partners">All partners</Link></div>
        <div className="chips">{PARTNERS.map((p) => <span className="chip" key={p.name}>{p.name}</span>)}</div>
      </section>
    </div>
  );
}
