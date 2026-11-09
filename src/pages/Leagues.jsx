import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LEAGUES, LEGACY } from "../data/content.js";

export default function Leagues() {
  useEffect(() => { document.title = "Leagues – MegCity Foundation"; }, []);
  return (
    <div className="container prose">
      
      <h1 className="page-title">OUR LEAGUES</h1>
      <p>Each league has its own site for schedules, teams and registration.</p>
      <div className="cards">
        {LEAGUES.map((l) => (
          <a className="card" key={l.name} href={l.url} target="_blank" rel="noreferrer">
            <h3>{l.name.toUpperCase()}</h3><p>{l.blurb}</p><span className="go">Visit site ↗</span>
          </a>
        ))}
      </div>
      <h2>MORE MEGCITY LEAGUE PAGES</h2>
      <p>Earlier league pages and registrations from the MegCity site.</p>
      <p>{LEGACY.map((l) => <Link className="tag" key={l.to} to={l.to}>{l.label}</Link>)}</p>
    </div>
  );
}
