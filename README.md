# Art Gallery Website

A modern, minimal, and editorial art gallery website built with HTML5, Tailwind CSS, and Vanilla JavaScript.

## Overview

This project is a high-fidelity prototype for a museum-grade art gallery website. It focuses on typography, whitespace, and image-first storytelling, avoiding standard marketing tropes.

## Tech Stack

- **HTML5**: Semantic structure.
- **Tailwind CSS**: Utility-first styling (via CDN for rapid prototyping, with local custom overrides).
- **Vanilla JavaScript**: Component loading and theme toggling.
- **Google Fonts**: Inter (UI) and Playfair Display (Headings).

## File Structure

```
/art-gallery
│
├── index.html              (Home / Exhibitions)
├── exhibitions.html
├── artists.html
├── artwork.html
├── visit.html
├── about.html
├── contact.html
├── login.html
├── signup.html
├── 404.html
│
├── /assets
│   ├── /css
│   │   └── tailwind.css    (Custom fonts & overrides)
│   ├── /js
│   │   ├── main.js         (Component loader)
│   │   └── theme-toggle.js (Dark mode logic)
│   ├── /img
│   └── /fonts
│
└── /components
    ├── navbar.html
    └── footer.html
```

## Features

- **Design Philosophy**: Minimal, editorial, museum-grade.
- **Dark Mode**: Fully supported with local storage persistence.
- **Reusable Components**: Navbar and Footer are loaded dynamically via JS.
- **Responsive**: Mobile-first design strategy.
- **Glassmorphism**: Used sparingly for overlays and login cards.

## Setup & Usage

1. **Local Server**: Because this project uses `fetch()` to load the Navbar and Footer components, you **must** run it on a local server (e.g., Live Server in VS Code, Python SimpleHTTPServer, etc.). Opening `index.html` directly via the file system (`file://`) will likely result in CORS errors preventing the components from loading.
   
   - **VS Code**: Install "Live Server" extension, right-click `index.html` -> "Open with Live Server".
   - **Python**: `python -m http.server 8000`
   - **Node**: `npx serve .`

2. **Development**:
   - The project uses Tailwind CSS via CDN script injection for ease of use without a build step.
   - Custom CSS is in `assets/css/tailwind.css`.

## Credits

- Images sourced from Unsplash.
- Fonts from Google Fonts.
