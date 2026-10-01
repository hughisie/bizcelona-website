# Bizcelona website

Static marketing site for bizcelona.com. Plain HTML, CSS and a little JavaScript. No build step, no framework.

## Files

- `index.html`: home page with five anchored sections (Home `#hero`, About `#about`, Guidelines `#rules`, Partnerships `#partnerships`, Apply `#apply`), plus the time bank, rhythm and ladder sections.
- `events.html`: events list, loaded from the member app's public events API.
- `css/site.css`: all styles, built on the Bizcelona brand book tokens.
- `js/site.js`: mobile menu, current-section highlight, reveal on scroll. The site works without it.
- `fonts/`: Bricolage Grotesque and Inter, self-hosted (SIL OFL).
- `images/`: logos from the brand kit, social image, city photo.
- `news.html`, `news/`, `css/styles.css`: legacy placeholder pages, not linked from the site.

## Brand rules in short

Navy-led palette, saffron under 10% and never as text on light grounds. British English, no em dashes, no emojis, no hard selling. Logo: off-white on navy, minimum 120 px wide.

## Preview

    python3 -m http.server 8000

## Deploying

Live deploys are an explicit decision. See `_review/REPORT.md` for how the domain is served today before pushing anything to `main`.
