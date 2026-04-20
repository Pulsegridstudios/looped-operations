# PulseGrid Studios Site — GitHub Pages Ready

This version is prepared for deployment on GitHub Pages using GitHub Actions.

## Included

- React + Vite + Tailwind project
- Multi-file structure for easy editing
- GitHub Actions workflow at `.github/workflows/deploy.yml`
- Vite config set with `base: "./"` for GitHub Pages-friendly asset paths

## Deploy steps

1. Create a new GitHub repository
2. Upload all files from this project
3. Push to the `main` branch
4. On GitHub, go to **Settings → Pages**
5. Under **Build and deployment**, set **Source** to **GitHub Actions**
6. Wait for the workflow to finish
7. Your site should appear on the Pages URL GitHub gives you

## Run locally

```bash
npm install
npm run dev
```

## Build locally

```bash
npm run build
```

## Main files to edit

- `src/data/siteData.js` → nav links, projects, team members
- `src/components/` → individual sections
- `src/hooks/useTheme.js` → light/dark mode
- `src/utils/roblox.js` → Roblox avatar helper

## Replace these placeholders

- Footer links currently use `#`
- Project images use placeholder image URLs
- Team `robloxId` values are example IDs
- Profile/project links are placeholders

## Notes

`base: "./"` helps this work more reliably on GitHub Pages, including repo subpaths.
