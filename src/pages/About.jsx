import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MISSION, ABOUT, PILLARS, STORY } from "../data/content.js";

export default function About() {
  useEffect(() => { document.title = "About – MegCity Foundation"; }, []);
  return (
    <div className="container prose">
      <h1 className="page-title">Soccer for all</h1>
      <p className="lede"><strong>{MISSION}</strong></p>
      <p>{ABOUT}</p>
      <h2>What we do</h2>
      <div className="cards">
        {PILLARS.map((p) => <div className="card" key={p.name}><h3>{p.name}</h3><p>{p.text}</p></div>)}
      </div>
      <h2>How we got here</h2>
      <div className="story">{STORY.map((t, i) => <p key={i}>{t}</p>)}</div>
      <p><Link className="btn" to="/leagues">See our leagues</Link></p>
    </div>
  );
}
