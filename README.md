# German Moren CV

Static, bilingual CV site for German Moren, a Senior Backend Engineer. The site presents a concise professional profile, selected experience, skills, and the Junando project in English and Spanish.

## Structure

- `index.html` - English CV page and default language.
- `es/index.html` - Spanish CV page.
- `assets/css/styles.css` - Shared responsive styles.
- `assets/js/main.js` - Progressive-enhancement interactions.
- `print/en.html` and `print/es.html` - Compact print-ready CV fallbacks.
- `robots.txt`, `sitemap.xml`, and `vercel.json` - Deployment and search configuration.

## Local development

No dependencies or build step are required. Open `index.html` directly in a browser, or serve the repository with any static file server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/` and use the `EN / ES` selector to switch languages.

## Deployment

The repository can be deployed as a static site through GitHub Pages or Vercel. The expected Vercel domain is `https://germanmoren.vercel.app/`.

For Vercel, import the repository and keep the default static deployment settings. For GitHub Pages, publish the repository root and ensure the site is served over HTTPS.

## Language selector

English is the default page at `/`. Spanish is available at `/es/`. Each page links to the other language version through the header selector and publishes matching `hreflang` metadata.
