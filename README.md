# Avsar Hub — “Blogging Is Not Dead” landing page

A static, mobile-first website for selling the **₹499** digital PDF *Blogging Is Not Dead — Facebook
Traffic Strategy*. Built with plain HTML, CSS and JavaScript — no backend, no build step — so it runs
on **GitHub Pages** for free.

- **Custom domain:** https://avsar-hub.com/
- **Payment:** Razorpay link `https://rzp.io/rzp/Bloggingsapna` (opens in a new tab)
- **Product:** a digital PDF (educational — results vary, no income guaranteed)

---

## 1. Files in this project

| File | Purpose |
|------|---------|
| `index.html` | Homepage: hero, what-you'll-learn, MGID case study, how-it-works, video, FAQ, CTA, contact |
| `privacy-policy.html` | Privacy Policy |
| `terms-and-conditions.html` | Terms & Conditions |
| `refund-policy.html` | Refund & Cancellation Policy |
| `delivery-policy.html` | Digital Product Delivery Policy |
| `disclaimer.html` | Disclaimer |
| `contact.html` | Contact / Support |
| `404.html` | Custom not-found page (uses root-absolute paths) |
| `assets/css/styles.css` | All styles (brand palette, responsive, accessible) |
| `assets/js/main.js` | Mobile nav toggle + footer year (no trackers) |
| `assets/img/mgid-dashboard.png` | **Real** MGID earnings screenshot used in the case study |
| `assets/favicon.svg` | Favicon **placeholder** — replace with your logo |
| `CNAME` | Custom domain for GitHub Pages (`avsar-hub.com`) |
| `robots.txt`, `sitemap.xml` | SEO |
| `.nojekyll` | Tells GitHub Pages to skip Jekyll processing |
| `.gitignore` | Keeps build/source junk out of the repo |

> The `guide/` and `Blogging-Is-Not-Dead-Guide/` folders (the PDF itself and its build tools) are
> **ignored** by git and are not part of the website deployment.

---

## 2. Run it locally

No build needed. Either open `index.html` in a browser, or serve it (recommended, so root-absolute
paths in `404.html` behave like production):

```bash
# Python 3
python -m http.server 8080
# then open http://localhost:8080
```

---

## 3. Deploy to GitHub Pages

1. **Create a repo** on GitHub (public), e.g. `avsar-hub`.
2. **Push these files to the repo root** (the `index.html` must be at the root):
   ```bash
   git init
   git add index.html *.html assets CNAME robots.txt sitemap.xml .nojekyll .gitignore README.md
   git commit -m "Avsar Hub website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In GitHub: **Settings → Pages**.
   - **Source:** *Deploy from a branch*
   - **Branch:** `main` / `/ (root)` → **Save**
4. Wait for the green “Your site is live” message. It first appears at
   `https://<your-username>.github.io/<your-repo>/`.

---

## 4. Connect the custom domain `avsar-hub.com`

The `CNAME` file already contains `avsar-hub.com`.

### In GitHub
- **Settings → Pages → Custom domain** → enter `avsar-hub.com` → **Save**.
- Leave **Enforce HTTPS** unchecked until DNS has propagated and the certificate is issued (see below).

### In your domain registrar's DNS (you do this; do not change DNS via this project)

**Apex / root domain (`avsar-hub.com`)** — add GitHub Pages' four A records (and, recommended, the
IPv6 AAAA records). As published by GitHub Pages:

```
A     @   185.199.108.153
A     @   185.199.109.153
A     @   185.199.110.153
A     @   185.199.111.153
AAAA  @   2606:50c0:8000::153
AAAA  @   2606:50c0:8001::153
AAAA  @   2606:50c0:8002::153
AAAA  @   2606:50c0:8003::153
```

**Optional `www` subdomain** — if you also want `www.avsar-hub.com` to work, add:

```
CNAME  www   <your-username>.github.io.
```

> Apex domains use **A/AAAA** records pointing to GitHub's IPs. A subdomain like `www` uses a **CNAME**
> record pointing to `<your-username>.github.io`. Do not put a CNAME on the apex `@` record.
> Always confirm the current IPs in the official GitHub Pages docs, since they can change.

### Verify & enable HTTPS
1. DNS can take anywhere from minutes to ~24–48 hours to propagate.
2. Once propagated, GitHub automatically issues a TLS certificate.
3. Return to **Settings → Pages** and tick **Enforce HTTPS**.
4. Visit `https://avsar-hub.com/` to confirm it loads over HTTPS.

(Optional) In **Settings → Pages → Verified domains**, you can verify domain ownership to prevent
takeovers.

---

## 5. Before you launch — you MUST complete these

Already set for you: **support email** `gsrseo81@gmail.com`, **governing law** West Bengal, India,
**refund policy** (no refunds for the digital PDF; payment-failure reversals handled by Razorpay),
and the **Meta Pixel** (ID `1693861395632026`) on every page with a `Purchase` event on each Buy Now button.

Still to fill in — search the code for `[ADD` and `TODO(you)`:

- **Phone / WhatsApp** and **support hours** — in `index.html` (contact section) and `contact.html` (optional).
- **“Last updated” dates** on all policy pages.
- **Delivery timeframe + sender behaviour**: confirm the option in `delivery-policy.html` and the
  “How It Works” step in `index.html` match how you *actually* send the PDF, then test it.
- **Favicon**: replace `assets/favicon.svg` with your real icon.
- *(Optional)* add a 1200×630 social image at `assets/img/og-image.png` and uncomment the `og:image`
  tags in `index.html`.

### Note about the Facebook “Purchase” event
The Pixel fires `Purchase` **when a Buy Now button is clicked** (purchase *intent*), because this is a
static site with no backend to confirm the payment actually succeeded on Razorpay. This is fine for ad
optimisation, but it means the event counts clicks, not verified payments, so reported “purchases” will
be higher than real sales. For verified purchase tracking you’d need Razorpay webhooks + a server (or fire
the event from a Razorpay post-payment success/thank-you page), which a static GitHub Pages site can’t do.

> ⚠️ This site is **static with no backend**. Payment does **not** auto-deliver the PDF. Set up a real
> delivery method (e.g. email the file after each Razorpay payment, or use Razorpay/a delivery tool)
> and **test it end-to-end** before accepting money. Do not promise automatic delivery you haven't built.

---

## 6. Accuracy & honesty notes

- The case-study image is your **real** MGID dashboard screenshot. The figures shown (8.9K page views,
  5.5K views with visibility, 1.2K ad clicks, $80 revenue, $14.4 vRPM) are the **rounded summary values
  visible in that screenshot**. The detailed-table values (8,546 / $77.64) are **not** visible in the
  image, so they are intentionally not displayed on the site as if shown.
- No fake reviews, testimonials, scarcity timers, or customer counts are used anywhere.
- The Facebook page screenshot is **not** used in the earnings/case-study section, per requirements.
