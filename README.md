
# QFIN — Queer and Feminist Informatics Network (GitHub Pages site)

This repository hosts the public website for QFIN (Queer and Feminist Informatics Network) at the Informatics Institute (University of Amsterdam — DILab).

## 🚀 Quick start

1. **Create a new GitHub repository** and upload these files.
2. Go to **Settings → Pages** and set:
   - **Source**: Deploy from branch
   - **Branch**: `main` (or `master`), folder `/` (root)
3. Your site will be available at `https://<yourusername>.github.io` (user/org site) or `https://<yourusername>.github.io/<repo>` (project site).

> If this is a project site, set `baseurl: "/<repo>"` in `_config.yml`.

## ✍️ Editing content

### Events
- Edit `_data/events.yml` and add entries with:
  ```yaml
  - title: Title of event
    date: 2025-11-27           # ISO format (YYYY-MM-DD)
    time: 12:00–13:00
    location: Lab42, UvA
    description: Short description of the session.
    signup_url: https://link-to-form-or-event-page
  ```

### Founding members
- Edit `_data/members.yml` and add entries with:
  ```yaml
  - name: Person Name
    bio: Short bio (1–2 sentences).
    email: name@example.com
    image: /assets/images/your-image.jpg  # 1:1 ratio recommended
  ```
- Place images in `assets/images/` (72×72 or larger; square crop recommended).

### Logo & styles
- Replace `assets/images/qfin-logo.jpg` with your preferred logo (update `_config.yml` if you change the path).
- Optional: tweak styles in `assets/css/custom.css`.

## 🧰 Theme & build
- Uses GitHub Pages with the **Cayman** theme via `jekyll-remote-theme` (both whitelisted on GitHub Pages).
- No custom plugins required — content comes from `_data/*.yml` via Liquid templates.

## ✅ Accessibility & good practice
- Provide alt text for member photos.
- Ensure event sign‑up links include a clear description of what will be collected.
- Keep copy concise and inclusive.

## 📄 License
MIT (or your choice).

---

Maintained by QFIN — Queer and Feminist Informatics Network.
