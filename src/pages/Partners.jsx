import { useEffect } from "react";
import { PARTNERS } from "../data/content.js";

export default function Partners() {
  useEffect(() => { document.title = "Partners – MegCity Foundation"; }, []);
  return (
    <div className="container prose">
      
      <h1 className="page-title">PARTNERS</h1>
      <div className="cards">
        {PARTNERS.map((p) => (
          <a className="card" key={p.name} href={p.url} target="_blank" rel="noreferrer">
            <h3>{p.name.toUpperCase()}</h3><p>{p.note}</p><span className="go">Visit site ↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
