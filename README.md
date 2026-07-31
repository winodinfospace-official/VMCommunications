# Vision Media Communications — Website

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000

## Build
```
npm run build
npm start
```

## Status
- Built: Home, About, Services, Government IEC, Portfolio (+ detail page), Clients, Blog (+ detail page), Careers, Contact.
- All content in these areas is placeholder/dummy per client instruction — swap it out before launch:
  - `/data/portfolio.ts` — real projects, images, categories
  - `/data/clients.ts` — real client names/logos, grouped by sector
  - `/data/blog.ts` — real articles (currently demo content)
  - `/data/careers.ts` — real openings (currently empty = "No current openings")
  - `/data/services.ts` — descriptions/deliverables are drafted; refine copy if needed
  - `components/layout/Footer.tsx` and `app/contact/page.tsx` — real office address, phone, email
  - `public/logo.jpg` — client-supplied logo, already in place
- Contact form (`components/sections/ContactForm.tsx`) is UI-only — wire to a real submission endpoint (API route + email service, or a form provider) before launch.
- Stats section shows "XX+" placeholders by design — no invented numbers.
