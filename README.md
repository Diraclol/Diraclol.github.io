# Portfolio site

Static HTML and one hand-written stylesheet, no framework. Deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main` (actions pinned to commit SHAs).

## Pages

| File | What |
|---|---|
| `index.html` | About, work, projects, notes index |
| `mactrack.html` | MacTrack case study |
| `homelab.html` | Homelab case study |
| `notes.html` | Three incident write-ups |
| `assets/style.css` | All styling. Tokens at the top — `--frame` recolours the whole page. Dark mode follows the OS until a toggle pins a choice |
| `assets/theme.js` | The toggle (a dozen lines). Choice persists in localStorage; a head snippet applies it before first paint |

## Before the first push — search for these and replace

| Placeholder | Where | Replace with |
|---|---|---|
| `YOUR-HANDLE` | `index.html` | your LinkedIn vanity URL slug |
| `YOUR@EMAIL` | every page (footer + intro links) | the address you actually check |
| `CNAME` | — | already set to `junguyen.me` |
| `github.com/Diraclol/homelab` | `index.html`, `homelab.html` | leave as-is once the homelab repo exists under that name |
| `assets/DanielNguyenResume.pdf` | — | overwrite with the final resume (the copy here still has the LinkedIn placeholder) |
| `assets/img/homelab-dashboard.jpg` | — | re-take with a neutral wallpaper (current one is someone else's artwork) |

Also reword the "Looking for a Summer 2027 co-op" line in `index.html` if that's not the term.

## Previewing locally

Links to `/` and `/#work` assume the site is served from a domain root, which is how GitHub
Pages serves a user site. Opening the files directly (`file://`) will break those two links;
everything else works. For a faithful preview: `python3 -m http.server` in this folder, then
open `http://localhost:8000`.

## The all-projects table

The `Everything` table on the home page is meant to grow: one row per project, year first, one
or two links. Add a row when you ship something; that's the whole maintenance model.

## Customizing

Everything visual is a token at the top of `assets/style.css`. The big one is `--frame`, the page
colour behind the card (MacTrack cobalt by default; `#d4b85a` gives the mustard from the reference
site). Then `--side` for the sidebars/footer, `--paper` for the card, the type scale (`--t-*`),
line length (`--measure`), and sidebar width (`--side-w`). Change tokens before touching rules.

The layout is a three-column grid: black sidebar (icon nav), the card, black sidebar (theme toggle).
Below 900 px both collapse into one top bar. The resume is embedded with `<object>`; browsers that
can't show PDFs inline get a link instead.

The one signature element is `.record` — the incident block. If you change its look, change
it once there; it's used on all four pages.
