import { useEffect } from "react";
import { FEDOS } from "../data/content.js";

export default function FedOs() {
  useEffect(() => { document.title = "FedOs – MegCity Foundation"; }, []);
  return (
    <div className="container prose">
      <p className="eyebrow-dark">PLATFORM</p>
      <h1 className="page-title">FEDOS</h1>
      <p>FedOs is the platform we are building to run our leagues: accounts for players and guardians, registration, and league administration.</p>
      {FEDOS.url && <p><a className="btn" href={FEDOS.url} target="_blank" rel="noreferrer">Open FedOs</a></p>}
    </div>
  );
}
