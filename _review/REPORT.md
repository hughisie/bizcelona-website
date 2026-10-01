# Bizcelona website brand refresh: preview report

Branch `brand-refresh-2026-10`, committed locally only. Nothing pushed, deployed or changed in DNS. Date: 1 October 2026.

## 1. How bizcelona.com is served today (checked with dig and curl)

- The repo's GitHub Pages site is NOT what visitors see. `bizcelona.com` and `www.bizcelona.com` point at Vercel. The root returns a 307 redirect to `www`, which serves a Next.js app (Vercel headers, `x-nextjs-prerender`). Its homepage is the member app's public events page, with links to `/login` and `/signup`. Google Analytics ID G-88GKT7X9KG is on that app.
- GitHub Pages still answers at `hughisie.github.io/bizcelona-website/`, but returns a 301 to `bizcelona.com` because of the CNAME file, so it ends up on Vercel.
- Nameservers are Cloudflare; mail is Krystal (MX mx1/mx2.krystal.uk).
- `app.bizcelona.com` does not resolve in DNS (checked at 1.1.1.1 and Cloudflare). The app answers on `www.bizcelona.com` (`/signup` and `/api/events/public` return 200). The static site links to `app.bizcelona.com` (sign up, log in, events API). Those links are dead until that hostname exists or the links are changed. Per brief I kept app.bizcelona.com.
- The old pages `/about`, `/guidelines`, `/partnerships` give 404 on the live site; they are anchors on the repo's single page.

Consequence: merging this branch to `main` alone changes nothing visitors see. Going live is a DNS or Vercel decision for Owen (section 6).

## 2. Scope note: "five pages"

The repo has one page, `index.html`, with five anchored sections (`#hero`, `#about`, `#rules`, `#partnerships`, `#apply`), plus `events.html`. I kept that structure and every anchor. I added three sections to the home page for the relaunch story: `#time-bank`, `#rhythm`, `#ladder`. No new URLs.

## 3. Before: issues found (screenshots in `_review/before/`)

1. Hero background images (`barcelona-skyline-1.jpg`, `-2.jpg`) do not exist in the repo: grey wash, no image.
2. Header logo invisible on desktop and mobile; the nav images were mismatched files.
3. Scroll-reveal animation hid content on mobile (blank gaps in About).
4. Apply form posts to `formspree.io/f/YOUR_ID`, a placeholder. Applications go nowhere.
5. Tailwind loaded from the CDN at runtime (about 300 KB of script, flashes unstyled, not production grade).
6. Canonical, og:url and og:image pointed at `bizcelona.github.io`, the wrong domain. Keywords meta stuffed. Description says "WhatsApp community".
7. Off-brand: Inter only, bold white-on-grey, orange-400 hovers, saffron as text and underline on light, serif "B" favicon (1 MB), blue/purple/orange/green event badges, 12-hour clock.
8. Copy out of date: "closed", "English-speaking", "inspired by old-world guilds"; nothing on the time bank, rhythm, ladder or free relaunch. Copyright 2025.
9. Accessibility: no skip link, no `<main>`, menu button had no label or aria-expanded, focus outline saffron on light (about 1.8:1), parallax and scroll-jacking JS, `alert()` on form errors, no `lang` region.
10. `news.html` is unlinked, has invented placeholder stories (for example "Series A, EUR 10M"), no styling (horizontal scroll to 2056 px) and `news/article-*.html` are Cocoa HTML dumps showing raw tags.
11. Events page calls `app.bizcelona.com`, which does not resolve.
12. No JSON-LD, no sitemap or robots file.

## 4. What changed

All pages: self-hosted Bricolage Grotesque (display) and Inter (text) as subset woff2 (32 KB and 54 KB); plain handwritten `css/site.css` replaces Tailwind; navy sticky header with the off-white logo at 128 px wide; skip link; semantic landmarks; visible focus (navy on light, saffron on navy); reduced-motion respected; `lang="en-GB"`; canonical `https://bizcelona.com/`; new title, description, Open Graph and Twitter tags; new 1200x630 social image from brand elements; Organization (and WebSite) JSON-LD. Contrast checked: all text pairs 5.3:1 or better. 375 px: no horizontal scroll (verified). Saffron appears only as buttons, rules, numerals, a highlight behind navy type on light, and type on navy.

- Home (`#hero`): navy hero, "A room you actually want to be in.", purpose line, Apply and "See how it works", "By invitation / Free during the relaunch", Curated. Collaborative. Connected.
- About (`#about`): give before you take, small on purpose (100 to 150), council-run, what it is not, why now and Owen's quote (from the brand book), the three essence lines, one city photo.
- Time bank (`#time-bank`, new): search, ask, introduce, 24-hour check; "rolling out as part of the relaunch".
- Rhythm (`#rhythm`, new): co-working every two weeks; one quality event a month.
- Ladder (`#ladder`, new): Member, Core member, Host, Council, tagged Proposed.
- Guidelines (`#rules`): the seven House rules, tightened into the brand voice, same titles and order.
- Partnerships (`#partnerships`): ethos kept and shortened; venue partners and perks panels; mailto contact.
- Apply (`#apply`): by invitation, free during the relaunch, three steps, buttons to `app.bizcelona.com/signup` and `/login`. The dead Formspree form is removed. `#contact` anchor kept.
- Events (`events.html`): same API, same safe rendering (now also escapes quotes), 24-hour clock, brand cards, plain label instead of coloured badges, helpful empty and error states.
- Left alone: `news.html`, `news/`, `css/styles.css`, `CNAME`. Removed `js/script.js` (replaced by `js/site.js`). README rewritten.

Not carried over, flagged for decision: **analytics**. The repo never had any (the GA tag lives in the Vercel app). I did not add one. **Favicon** is still the old serif B (resized to 48 px and 180 px); the brand kit has no icon, so it needs a decision.

## 5. New public copy to run through publish-rewrite (not run)

Everything visible in `index.html` and the strings inside `events.html`, in particular:

1. Hero: eyebrow, h1, lede ("Members help each other reach their financial and business goals. Real help, real relationships."), buttons, "By invitation", "Free during the relaunch".
2. About: heading, lede, the two paragraphs (balanced core of 100 to 150; council of senior volunteers), the two "not" lines, figure caption and alt text, "Why now" line, Owen's quote and attribution, the three essence blurbs.
3. Time bank: heading, intro, four step blurbs, rollout note ("rolling out to members as part of the relaunch").
4. Rhythm: heading, both card blurbs (including "such as an AI for beginners session"), events-page pointer.
5. Ladder: heading, intro with Proposed tag, four rung descriptions.
6. Guidelines: heading, "Seven rules. They are short because we expect you to use judgement.", the seven rule bodies.
7. Partnerships: heading, lede, ethos paragraph, Venue partners panel, Perks and sponsors panel, button.
8. Apply: heading, lede, balance line (SEO, web, retail, legal and tax, finance, hospitality, trades and craft), three steps, "Ready?" box ("We will prove the value before we ever charge."), contact line.
9. Footer and meta: titles, descriptions, Open Graph and Twitter text, JSON-LD description, social image text, alt texts.
10. Events page: header lede, empty state ("No dates published yet." and explanation), error state, meta.

Publishing rule limits: a rewrite cannot be verified as watermark-free (no public detector); say it was paraphrased, never that it is clean. This copy was drafted by Claude, so it needs the pass. The pipeline-written Barna.News articles are unaffected.

Facts to confirm before going live (all from the approach summary and brand book; items marked Proposed there are shown as proposed or soft here): co-working every two weeks and monthly event are Proposed in the summary; the time bank rollout wording; the "prove value before charging" line; listing the gap professions publicly; `hello@bizcelona.com` as the public contact (it is the app's sender address, mailbox not verified); "Torre Glòries and the Columbus monument" in the photo alt text. No dates, venues, prices, member counts or council names are published.

Imagery note: the only city photo is the existing sunset skyline of unknown provenance, and the brand says no stock. Replace with real member photos when available. No photos of people exist yet.

## 6. Steps to go live (all need Owen's decision; none done)

1. Review `_review/after/` screenshots and serve locally: `cd ~/repos/bizcelona-website && python3 -m http.server 8000`.
2. Run the new copy (section 5) through `publish-rewrite`, re-check the result by eye, and fix any facts.
3. Decide the target. Today bizcelona.com is the Vercel Next.js app. Options: (a) keep the app on `app.bizcelona.com` and move the marketing site to bizcelona.com on GitHub Pages (needs Cloudflare DNS changes: apex to GitHub Pages IPs, `www` CNAME to `hughisie.github.io`, and a working `app` record pointing at Vercel); (b) host this static site on Vercel instead. Recommendation: (a), but do the `app.bizcelona.com` DNS first, because the sign-up button and the events page depend on it. If you keep the app on www, change the links with: `sed -i '' 's#https://app.bizcelona.com#https://www.bizcelona.com#g' index.html events.html`.
4. Add `app.bizcelona.com` to the app's allowed origins if the events API restricts CORS (the Vercel response sends `access-control-allow-origin: *` on pages; confirm on the API route).
5. Decide analytics (add the existing GA tag with a consent approach, or none), favicon, and what to do with `news.html` and `news/` (recommend deleting them: fake stories, unlinked).
6. Merge `brand-refresh-2026-10` into `main` and push; GitHub Pages rebuilds in a minute or two. Check `/`, `/events.html`, the sign-up link and the social card (a sharing debugger).
7. Add `sitemap.xml` and `robots.txt` at that point (not added here: the URLs depend on step 3).
