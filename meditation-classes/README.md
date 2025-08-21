# Kunal Meditation – Website

A responsive, static website for Kunal's meditation classes. Sections include About, Classes, Schedule, Pricing, Testimonials, and Contact.

## Customize
- Update title/description and content in `index.html`.
- Replace logo/favicon at `assets/favicon.svg`.
- Adjust fonts in `index.html` and `styles.css` (currently using Inter).

## Contact form (Formspree)
1. Create a new form on Formspree to get your form ID.
2. In `index.html`, replace `your_form_id` in the form action URL:
   - `<form action="https://formspree.io/f/your_form_id" method="POST">`
3. Submit a test message and verify delivery in Formspree.

## Preview locally
Open `index.html` directly, or run a simple server from this folder:

```bash
python3 -m http.server 5173
# then open http://localhost:5173
```

## Deploy
- GitHub Pages: push and enable Pages on the repo.
- Netlify/Vercel: set project root to this folder and deploy.

## Structure
```
meditation-classes/
├─ index.html
├─ styles.css
├─ script.js
└─ assets/
   └─ favicon.svg
```

## License
MIT