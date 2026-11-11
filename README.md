# Sameer Ahmadi, portfolio

My personal site: https://portfolio.sameerahmadi.com

Built with React, Vite, Tailwind CSS and React Router. It runs in Docker (Nginx) on my home server
and is online through a Cloudflare Tunnel.

## Run it locally

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run lint      # check the code
npm run build     # production build into dist/
npm run preview   # serve the production build
```

## Deploy

On the home server:

```bash
git pull
docker compose up -d --build   # builds the site and serves it on port 3001
```

## Changing the content

Most changes are just editing a data file. No component code needed.

| What                                  | Where                        |
|---------------------------------------|------------------------------|
| Projects (text, links, diagrams)      | `src/data/projects.js`       |
| Skills                                | `src/data/skills.js`         |
| Email, GitHub, LinkedIn, resume path  | `src/data/site.js`           |
| About me tabs and numbers             | `src/components/About.jsx`   |
| Hero text and the terminal            | `src/components/Hero.jsx`    |
| Resume PDF                            | `public/Ahmad_Sameer_Ahmadi_Resume.pdf` |
| Project screenshots                   | `public/screenshots/` (then add `images` to the project) |

The comment at the top of `projects.js` explains every field a project can have.

When you add or rename a project, also add its URL to `public/sitemap.xml` so search engines find it.

The link preview image (what LinkedIn, Discord and Slack show) is `public/og-image.jpg`, 1200x630.

## Colours

All colours live in `src/index.css`. Each `--color-*` value becomes a Tailwind class, so
`--color-heading` gives you `text-heading`, `--color-card` gives you `bg-card`, and so on.
Dark mode is the default; `:root.light` holds the light mode values.

## Folder layout

```
src/
  pages/        Home and the project detail page
  components/   Sections (Hero, About, Skills, Projects, Contact) and small shared pieces
  data/         Everything you'd want to edit: projects, skills, personal details
  context/      Light and dark theme
  hooks/        useReveal (fade in sections on scroll)
  lib/          Small helpers
public/         Files served as is (resume, logo, screenshots)
```
