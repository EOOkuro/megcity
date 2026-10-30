import { useEffect } from "react";
import { INCUBATION, CLUBS } from "../data/content.js";

export default function Incubation() {
  useEffect(() => { document.title = "Incubation – MegCity Foundation"; }, []);
  return (
    <div className="container prose">
      <p className="eyebrow-dark">INCUBATION</p>
      <h1 className="page-title">INCUBATION MODEL</h1>
      <p>{INCUBATION.statement}</p>
      <h2>WHERE WE WORK</h2>
      <p>{INCUBATION.places.map((p) => <span className="tag" key={p}>{p}</span>)}</p>
      <h2>CLUBS</h2>
      <p>{CLUBS.map((c) => <span className="tag" key={c}>{c}</span>)}</p>
    </div>
  );
}
