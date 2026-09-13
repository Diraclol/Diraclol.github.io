# junguyen.me

Personal site: [junguyen.me](https://junguyen.me). Who I am, where I've worked, the projects I'm
building, and short write-ups from my homelab incident log.

Static HTML and one hand-written stylesheet. No framework, no build step, no JavaScript beyond the
theme toggle and the resume/CV switcher. Deployed to GitHub Pages by a pinned Actions workflow on
every push to `main`.

## Pages

| File | What |
|---|---|
| `index.html` | About, resume & CV, work, projects, notes index |
| `mactrack.html` | Case study — MacTrack, an offline-first Android nutrition tracker |
| `homelab.html` | Case study — self-hosted infrastructure on a repurposed laptop, incidents and what's queued next |
| `notes.html` | Three incident write-ups: symptom, cause, fix, rule |

## Design

A light content card on a cobalt page, black sidebars, IBM Plex Mono throughout, centered section
headings. Dark mode follows the OS until the toggle pins a choice. Everything visual is a token at
the top of `assets/style.css`; `--frame` recolours the whole page.

## Running locally

```
python3 -m http.server
```

then open `http://localhost:8000`. Root-relative links assume a domain root, so opening the files
directly over `file://` breaks a couple of them.

## Related

- [MacTrack](https://github.com/Diraclol/MacTrack)
- [Homelab](https://github.com/Diraclol/Homelab)
