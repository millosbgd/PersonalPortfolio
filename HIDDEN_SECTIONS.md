# Hidden Sections

Temporary changes made on 2026-08-12. Nothing was deleted; hidden items are commented in code with `HIDDEN 2026-08-12` markers.

## Hidden in `src/app/app.component.html`

- Hero section:
  - Starts with `<section class="hero section">`
  - Contains headline `Rast nije jedini razlog za promenu procesa. Složenost jeste.`
  - Restore by uncommenting the block marked `Hero section temporarily hidden`.

- Engagement models section:
  - Contains `Tri načina angažovanja` / `Three ways to engage` / `Три формата работы`.
  - Restore by uncommenting the block marked `Engagement models section temporarily hidden`.

- Advisory process section:
  - Starts with `<section id="process" class="section">`
  - Contains `Kako izgleda savetodavni angažman` / `How advisory engagement works` / `Как проходит консультационный проект`.
  - Restore by uncommenting the block marked `Advisory process section temporarily hidden`.

- Availability section:
  - Contains `Ograničen broj konsultantskih angažmana` / `A limited number of advisory engagements` / `Ограниченное количество консультационных проектов`.
  - Restore by uncommenting the block marked `Availability section temporarily hidden`.

## Hidden in `src/app/shared/content.ts`

- Navigation item for the hidden process section:
  - Serbian: `{ label: 'Pristup', href: '#process' }`
  - English: `{ label: 'Approach', href: '#process' }`
  - Russian: `{ label: 'Подход', href: '#process' }`
  - Restore when the process section is visible again.

- Second About paragraph:
  - Serbian: `Nezavisni savetodavni projekti prihvataju se selektivno, prvenstveno kroz preporuke i direktne profesionalne kontakte.`
  - English: `Independent advisory projects are accepted selectively, primarily through referrals and direct professional introductions.`
  - Russian: `Независимые консультационные проекты принимаются выборочно, преимущественно через рекомендации и прямые профессиональные контакты.`
  - Restore when selective advisory availability messaging is needed again.
