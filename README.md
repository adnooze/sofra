# Sofra – Ketering & Bakery

Web stranica za [@sofra.ketering](https://www.instagram.com/sofra.ketering/), Crkvice 3, Zenica. Izgrađena u [Astro](https://astro.build).

## Pokretanje

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # statični build u dist/
```

## Struktura

- `src/data/site.ts` – kontakt, radno vrijeme, cjenovnik i Instagram linkovi
- `src/components/` – sekcije stranice (Hero, Kategorije, Priča, Ketering, Ponuda, Cjenovnik, Kontakt)
- `src/assets/ig/` – slike preuzete s Instagram profila

## Deploy (Cloudflare Pages)

Build command: `npm run build` · Output directory: `dist`
