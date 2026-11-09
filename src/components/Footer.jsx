import { SITE } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p><strong>{SITE.name}</strong></p>
        <p>Soccer for all, from first kick to last.</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
      <div>
        <p>
          {SITE.social.map((s) => <a key={s.label} href={s.url} target="_blank" rel="noreferrer">{s.label}</a>)}
          <a href={"mailto:" + SITE.email}>Contact</a>
        </p>
        {SITE.sister.url && <p><a href={SITE.sister.url}>{SITE.sister.label}</a></p>}
      </div>
    </footer>
  );
}
