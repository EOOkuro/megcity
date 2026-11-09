import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MENU } from "../data/menu.js";
import { SITE } from "../data/site.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link to="/" className="wordmark" aria-label={SITE.name + " home"} onClick={() => setOpen(false)}>
        <img src="/logo.png" alt="MegCity" />
      </Link>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
      <nav className={open ? "nav is-open" : "nav"}>
        <ul>
          {MENU.map((m) => (
            <li key={m.to}><NavLink to={m.to} end={m.to === "/"} onClick={() => setOpen(false)}>{m.label}</NavLink></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
