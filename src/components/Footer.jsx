import { Link } from "react-router-dom";
import { SITE } from "../data/site.js";
import { MENU } from "../data/menu.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {SITE.name}</p>
      <p>
        {MENU.filter((m) => m.to !== "/").slice(0, 4).map((m, i) => (
          <span key={m.to}>{i > 0 && " · "}<Link to={m.to}>{m.label}</Link></span>
        ))}
        {" · "}<a href={"mailto:" + SITE.email}>Contact</a>
      </p>
      {SITE.sister.url && <p><a href={SITE.sister.url}>{SITE.sister.label} ↗</a></p>}
    </footer>
  );
}
