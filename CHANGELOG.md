# Changelog — portfolio_site

## 2026-10-17

- Scaffolded project: `assets/css/`, `assets/js/`, `assets/img/`
- Wrote `index.html` — hero (typed-line animation), about, experience timeline, projects grid (placeholders), contact section
- Wrote `assets/css/style.css` — dark/techy theme (brittanychiang.com + lynnandtonic.com inspired), responsive sidenav layout
- Wrote `assets/js/typed.js` — typing-animation effect cycling hero lines
- Added `assets/img/favicon.svg` — terminal-cursor glyph (`>_`) matching theme
- Rewrote About section + hero copy: FlowsGrow/FOETS.TECH mentioned briefly, focus kept on software engineering / AI-assisted build workflow (per Yasin's direction)
- Fixed incorrect "Based: United Kingdom" fact → corrected to Cape Town, South Africa
- Confirmed contact email: foets.tech@gmail.com
- Installed GitHub CLI (`gh`), set git identity (foetstech / foets.tech@gmail.com), generated SSH key (`~/.ssh/id_ed25519_github`), added to GitHub account, authenticated `gh auth login`
- Added `~/.ssh/config` entry pinning `IdentityFile` for github.com (fixed initial `Permission denied (publickey)` push failure)
- Set up timestamped Python venv + direnv auto-activation (`~/python-venvs/portfolio-20261017-041113`), matching other projects' convention
- `git init`, initial commit, created `github.com/foetstech/portfolio_site` (public) via `gh repo create`, pushed to `main`
- Enabled GitHub Pages on the repo — live at https://foetstech.github.io/portfolio_site/
- Wrote `deploy.sh` — one-command git add/commit/push, handles no-change case, timestamped output
- Built on-site contact form (name/email/message) wired to Formspree (`https://formspree.io/f/xwlvyepo`), kept `mailto:` link as a visible fallback
- Deployed Formspree wiring via `deploy.sh`
- Found and fixed: `.direnv/` cache directory was accidentally committed (missing from `.gitignore`) — added `.direnv/` to `.gitignore`, untracked via `git rm -r --cached .direnv`, redeployed

## Outstanding

- Project cards still placeholders (3x "Project name") — deliberately deferred until real projects are chosen

## 2026-10-19

- Custom domain registered and live: `yasinjones.is-a.dev` (is-a-dev/register#57137, merged)
- Removed local filesystem paths and references to unrelated private projects from `README.md` (public repo — those shouldn't have been there)
- `deploy.sh` now resolves its own directory instead of a hardcoded path (was leaking the local username publicly)
