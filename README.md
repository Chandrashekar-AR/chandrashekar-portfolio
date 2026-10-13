# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Video showcase (MONTRA ELECTRIC EVIATOR — Launch Video)

The featured video card in the **Projects** section is driven by one file:

- `src/config/videoShowcase.ts` — paste your two links here:
  - `thumbnailUrl` — direct URL of the thumbnail image / an actual frame from the video
  - `videoUrl` — Google Drive shareable link (`Anyone with the link` ▸ Viewer)

Clicking the thumbnail, the play button, or **Watch Film** opens `videoUrl` in a new tab.
Title, description, project details and role are all editable in the same file.

## Featured credential (Google AI Professional Certificate)

The **Credentials** section top card is driven by one file:

- `src/config/featuredCredential.ts`
  - `credentialUrl` — credential verification page (opens in a new tab)
  - `googleLogoUrl` — optional Google logo image (empty = official Google "G" SVG is used)
  - `certificateImageUrl` — optional real certificate preview image (empty = preview column is hidden)

The card shows a red glow only on hover (and on keyboard focus).

## Journey section (Brandshark + AdMitra experience cards)

The two experience cards in the **Journey** section are driven by one file:

- `src/config/experience.ts` — resume-sourced copy plus asset slots:
  - `logoUrl` — official company logo (empty = typographic monogram fallback)
  - `gallery[].imageUrl` — real campaign artwork for the AdMitra card
    (Montra Electric and Lincoln Pharma reuse the Drive frames from
    `videoShowcase.ts`; Ampere and EkoTejas are yours to fill in)
  - `highlights` / `emphasis` / `clients` — text taken verbatim from the resume

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
