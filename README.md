# portfolio_site

Yasin Jones's software-engineer portfolio website — built from scratch (plain
HTML/CSS/JS, no framework), deployed live on GitHub Pages.

- **Live:** https://foetstech.github.io/portfolio_site/
- **Repo:** github.com/foetstech/portfolio_site
- **Deploy:** run `./deploy.sh "commit message"` from this directory — stages, commits,
  pushes in one step. GitHub Pages rebuilds automatically on push to `main`.
- **Structure:** `index.html` (single page: hero, about, experience, projects, contact)
  + `assets/css/style.css`, `assets/js/typed.js` (hero typing animation),
  `assets/img/favicon.svg`.
- **Contact:** on-site form wired to Formspree (foets.tech@gmail.com), mailto kept as
  fallback.
- **Status:** content-complete except project cards (deliberately left as placeholders
  until real projects are chosen) and a custom-domain decision. See `CHANGELOG.md` for
  full build history and `../Documents/claude-assistant/tasklist.md` for live task
  status.
- **Python venv:** timestamped venv under `~/python-venvs/`, auto-activated via direnv
  on `cd` into this directory (not functionally required for a static site, but kept
  for convention-consistency with other projects).

## Related locations
- `/home/maincompute/Documents/claude-assistant/` — cross-project workspace; see
  `memories.md` and `tasklist.md` there for broader context and live task tracking.
- `/home/maincompute/rea_project/` — separate, unrelated project (reverse engineering).
- `/home/maincompute/local_ollama_project/` — separate, unrelated project (local AI
  fleet / pentest infra) — do not confuse the two.
