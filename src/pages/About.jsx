import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MISSION } from "../data/content.js";

export default function About() {
  useEffect(() => { document.title = "About – MegCity Foundation"; }, []);
  return (
    <div className="container prose">
      <p className="eyebrow-dark">ABOUT</p>
      <h1 className="page-title">SOCCER FOR ALL</h1>
      <p>{MISSION}</p>
      <div className="cards">
        <Link className="card" to="/leagues"><h3>LEAGUES</h3><p>Leagues for every age, from first kick to last.</p><span className="go">See leagues →</span></Link>
        <Link className="card" to="/incubation"><h3>INCUBATION</h3><p>We help soccer grow in Chicago, Kisumu and Migori.</p><span className="go">How it works →</span></Link>
        <Link className="card" to="/partners"><h3>PARTNERS</h3><p>Schools and organizations that play with us.</p><span className="go">Our partners →</span></Link>
      </div>
    </div>
  );
}
