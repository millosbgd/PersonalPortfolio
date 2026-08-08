# Boutique Consulting Website — Codex Specification

## 1. Project Goal

Build a premium, minimalist one-page consulting website for an independent business process and digital transformation advisor.

The website must NOT look like:
- a freelancer portfolio,
- a software development agency,
- a generic IT company,
- a business coach website,
- a startup landing page,
- or a large consulting company pretending to have a big team.

The intended positioning is:

> A senior software and business consultant who is already fully employed in a primary professional role and selectively accepts a limited number of independent advisory engagements outside that role.

The main acquisition channel is expected to be:
- referrals,
- private business relationships,
- direct introductions,
- trusted recommendations.

Therefore, the website's job is not primarily SEO or high-volume lead generation.

Its purpose is to:
1. validate credibility after someone has been referred,
2. clearly explain what kinds of problems can be solved,
3. communicate seniority and selectivity,
4. make the visitor feel that access is limited and valuable,
5. create enough confidence for the visitor to request an introductory conversation.

The desired emotional impression is:

> "This person is experienced, already professionally established, does not need every project, and only accepts engagements where he believes he can create meaningful value."

---

# 2. Technology Stack

Use:

- Angular 18
- TypeScript
- SCSS
- Angular standalone components
- Angular Router
- Azure Static Web Apps
- GitHub repository
- GitHub Actions / Azure Static Web Apps deployment workflow
- Responsive design
- Mobile-first implementation

The application should be deployable directly from GitHub to Azure Static Web Apps.

Preferred structure:

```text
/src
  /app
    /components
    /sections
    /models
    /services
    /shared
  /assets
    /images
    /icons
    /fonts-if-needed
```

Do not over-engineer the application.

This is a content-driven professional website, not an enterprise application.

Prefer:
- simple architecture,
- clean Angular components,
- semantic HTML,
- reusable section components,
- strong typography,
- excellent responsive behavior,
- excellent Lighthouse performance.

---

# 3. Icon Library — IMPORTANT

Use professional icons from Google's official icon library.

Preferred option:

**Google Material Symbols**

Use:
- Material Symbols Rounded or
- Material Symbols Outlined

Icons must look subtle, premium and professional.

Do NOT use:
- emoji as UI icons,
- Font Awesome unless absolutely necessary,
- random SVG packs,
- cartoonish icons,
- colorful illustrative icon sets,
- huge oversized icons.

Icons should generally be:
- monochromatic,
- 20–32 px,
- visually consistent,
- used sparingly,
- aligned with premium consulting aesthetics.

Suggested icon concepts:
- process / account_tree
- analytics
- monitoring
- schema
- task_alt
- search
- query_stats
- settings_suggest
- hub
- lightbulb
- handshake
- business_center
- arrow_forward
- check_circle
- schedule
- lock_clock
- verified

Use icons only where they improve scanning and hierarchy.

Do not decorate every sentence with an icon.

---

# 4. Visual Direction

The site should feel:

- premium,
- calm,
- senior,
- selective,
- understated,
- trustworthy,
- international,
- boutique advisory.

Avoid stereotypical corporate consulting visuals.

## Preferred color direction

Primary layout:
- light / off-white background
- almost-black text
- deep navy / royal blue as primary accent
- optional restrained burgundy accent
- selected dark sections for contrast

Suggested palette:

```scss
$background: #F7F5F0;
$surface: #FFFFFF;

$text-primary: #15171A;
$text-secondary: #62676F;

$navy: #142A4A;
$royal-blue: #244C7D;

$burgundy: #6E2934;

$border: #DDDCD7;
$muted-bg: #EEECE6;
```

Exact values may be adjusted during implementation.

Do not make the entire site dark.

Preferred approach:
- mostly light background,
- strong dark/navy typography,
- one or two dark navy sections,
- restrained use of burgundy for small highlights only.

Avoid:
- bright gradients,
- neon,
- saturated startup-blue everywhere,
- glassmorphism,
- excessive drop shadows,
- glowing buttons,
- animated backgrounds,
- flashy parallax.

---

# 5. Typography

The website should feel editorial and expensive.

Use a clean, professional sans-serif as the main font.

Good options from Google Fonts:
- Inter
- Manrope
- IBM Plex Sans
- DM Sans

Optionally combine with a restrained serif for selected large headings:
- Libre Baskerville
- Lora
- Source Serif 4

Do not use decorative fonts.

Typography principles:
- large confident headings,
- short line lengths,
- generous spacing,
- strong hierarchy,
- no overly dense paragraphs.

---

# 6. Brand Style

For the first version, do not invent a fake consulting corporation.

Prefer one of these positioning formats:

```text
[Name]
Business Process & Digital Transformation Advisor
```

or

```text
[Brand] Advisory
Independent Business Process & Digital Transformation Advisory
```

The design should work before the final brand name is chosen.

Do NOT write copy as "we" if there is one consultant.

Use first person singular where personal positioning is appropriate.

---

# 7. Navigation

Keep navigation minimal.

Desktop:

```text
Expertise
How I Work
About
Contact
```

Optionally include:

```text
Engagements
```

Do not use:
- Mission
- Vision
- Our Team
- Our Story
- Careers
- Resources
- generic Services mega-menu

Sticky navigation is allowed but must remain subtle.

Mobile:
- clean hamburger navigation,
- no oversized full-screen animation.

---

# 8. Homepage Structure

Recommended page order:

1. Header / navigation
2. Hero
3. Problem recognition
4. Engagement models
5. Independent advisory positioning
6. How I work
7. Selected problem examples / case placeholders
8. Limited availability
9. Short About section
10. Contact
11. Minimal footer

---

# 9. Hero Section

The hero should be highly restrained.

Preferred headline:

> Vaša kompanija je porasla. Da li su procesi porasli sa njom?

Alternative English headline:

> Your company has grown. Have your processes grown with it?

Supporting copy:

> Pomažem kompanijama da pronađu operativna uska grla, unaprede poslovne procese i donesu bolje odluke o digitalizaciji.

Supporting expertise line:

```text
Business Process Improvement · Management Analytics · Digitalization Advisory
```

Primary CTA:

> Razgovarajmo o problemu

Alternative more selective CTA:

> Predložite razgovor

Secondary CTA:

> Kako izgleda angažman

Important:
Do not use "Book a free consultation".

Do not communicate desperation for leads.

The CTA should feel like a request for a professional conversation, not a promotional funnel.

---

# 10. Problem Recognition Section

Title:

> Da li vam ovo zvuči poznato?

The visitor should recognize symptoms before reading about services.

Use 6 premium cards or editorial blocks.

Suggested content:

## Excel je postao poslovni sistem

Ključni procesi zavise od tabela koje samo nekoliko ljudi razume.

## Informacije kasne

Menadžment dobija odgovore tek nakon mnogo ručnog rada.

## ERP postoji, ali proces živi mimo njega

Podaci se vode paralelno kroz mailove, tabele i privatne evidencije.

## Isti podatak se unosi više puta

Ljudi troše vreme na administraciju umesto na posao.

## Proces zavisi od pojedinca

Ako ključna osoba nije tu, niko nije siguran šta je sledeći korak.

## Digitalizacija počinje od softvera

Pre nego što je jasno definisan poslovni problem.

Design:
- clean grid,
- no huge cards,
- subtle borders,
- professional Google Material Symbols,
- no colorful illustrations.

---

# 11. Three Engagement Models

Title:

> Tri načina angažovanja

Do not present a traditional price list.

## 11.1 Executive Second Opinion

Purpose:

For situations where management already has:
- a problem,
- proposal,
- ERP offer,
- software proposal,
- automation idea,
- project concept,

but wants an experienced independent opinion before making a decision.

Typical output:
- review,
- key risks,
- missing assumptions,
- recommendation,
- next steps.

Suggested site copy:

> Za situacije kada već imate problem, predlog ili ponudu i treba vam nezavisno mišljenje pre nego što donesete odluku.

Possible metadata:
- Focused engagement
- Management-level discussion
- Independent perspective

Do not show fixed price.

---

## 11.2 Process Diagnostic

This should be presented as the main core offer.

Suggested copy:

> Za procese za koje znate da ne funkcionišu dobro, ali još nije jasno gde je pravi uzrok.

Typical scope:
- management kickoff,
- interviews with key people,
- process mapping,
- review of documents,
- review of available data,
- identification of bottlenecks,
- root-cause analysis,
- improvement opportunities,
- prioritized recommendations.

Output may include:
- current-state process,
- identified issues,
- causes,
- improvement proposals,
- priorities,
- initial KPI recommendations.

---

## 11.3 Transformation Blueprint

Suggested copy:

> Za kompanije koje žele ozbiljnije da promene način rada i potreban im je jasan plan pre implementacije.

Possible outputs:
- AS-IS process
- TO-BE process
- operating model
- roles and responsibilities
- KPIs
- digitalization requirements
- software / ERP requirements
- implementation roadmap
- business case
- priorities and phases

This should look like a senior advisory engagement, not software implementation.

---

# 12. What This Practice Does NOT Sell

This distinction is strategically important.

The advisor should primarily provide:

```text
problem
→ analysis
→ process
→ root cause
→ options
→ recommendation
→ business case
→ roadmap
```

The practice should NOT be positioned primarily as:
- outsourced software development,
- full-time implementation,
- technical support,
- managed services,
- staff augmentation,
- ERP reseller,
- Power BI contractor,
- freelance developer.

Small prototypes, analytical models, SQL analysis or BI proof-of-concepts may be used when helpful, but must not become the website's primary offer.

---

# 13. Independent Technology Advice Section

This should be visually strong.

Possible headline:

> Ne počinjem od softvera.

Supporting message:

> Novi ERP, aplikacija ili automatizacija mogu da budu deo rešenja. Ali ako proces nije dobro definisan, tehnologija samo ubrzava postojeći problem.

Use three principles:

## Business first

Prvo razumemo problem i poslovni cilj.

## Independent advice

Preporuka nije vezana za određeni ERP, platformu ili dobavljača.

## Technology-aware

Rešenje mora biti i poslovno opravdano i tehnički realno.

This section may use a dark navy background with light typography.

---

# 14. How I Work

Title:

> Kako izgleda angažman

Use a horizontal or vertical 5-step process.

## 1. Razgovor

Definišemo problem i očekivani rezultat.

## 2. Razumevanje procesa

Razgovori sa ljudima, dokumentacija, sistemi i podaci.

## 3. Dijagnostika

Identifikacija uzroka, uskih grla, rizika i nepotrebne kompleksnosti.

## 4. Predlog

Bolji proces, KPI, digitalizacija ili preporuka za donošenje odluke.

## 5. Roadmap

Šta prvo, ko je odgovoran i kako meriti rezultat.

Important positioning:
- most work may be performed remotely,
- engagements are focused,
- meetings are scheduled by agreement,
- the work is milestone-oriented rather than based on daily on-site presence.

Do not over-emphasize scheduling limitations in this section.

---

# 15. Selective Engagements / Limited Availability

This is important for positioning.

The website should communicate scarcity without sounding arrogant.

Preferred section title:

> Ograničen broj konsultantskih angažmana

Suggested final copy:

> Van svog primarnog profesionalnog angažmana prihvatam ograničen broj nezavisnih savetodavnih projekata, prvenstveno kroz preporuke i direktne kontakte.
>
> Projekti su fokusirani na jasno definisane poslovne probleme, a dostupnost se dogovara u skladu sa obimom i prioritetom angažmana.
>
> Zbog ograničenog kapaciteta prihvatam samo projekte kod kojih verujem da mogu da napravim konkretnu poslovnu razliku.

Important tone:
- selective,
- factual,
- not boastful,
- not "exclusive club",
- not "I am too busy for you".

Possible small label:

```text
Independent advisory practice
Limited engagements
Primarily by referral
```

Do NOT write:
- "I work in my spare time"
- "side hustle"
- "freelance after work"
- "available evenings and weekends"

Preferred wording:

> van svog primarnog profesionalnog angažmana

This creates the correct professional perception.

---

# 16. About Section — KEEP VERY SHORT

This section must NOT look like a CV.

The main acquisition model is referral.

Assumption:
The visitor often already knows who the advisor is or has heard about him from someone trusted.

Therefore About should only confirm credibility.

Suggested copy:

> Softverski i poslovni konsultant sa dugogodišnjim iskustvom u unapređenju poslovnih procesa i informacionih sistema.
>
> Povremeno, van svog primarnog profesionalnog angažmana, prihvatam ograničen broj nezavisnih savetodavnih projekata — prvenstveno kroz preporuke.

Under that, optionally add:

```text
Business Processes · Operations · Digitalization · Technology Advisory
```

Do not add:
- full career history,
- long biography,
- technology list,
- timeline,
- CV download,
- employment history,
- certifications grid,
- long personal story.

Do not add a "Read more about me" page in v1.

A strong professional portrait is enough.

---

# 17. Selected Problems / Case Studies

Initially, case studies may be anonymous or conceptual.

Possible section title:

> Tipični problemi koje analiziram

Examples:

- Kako ubrzati proces od izvršenja usluge do fakturisanja.
- Kako menadžmentu omogućiti pravovremen pregled profitabilnosti.
- Kako smanjiti ručne unose između različitih sistema.
- Kako definisati zahteve pre zamene ERP ili poslovnog sistema.
- Kako digitalizovati servisni ili terenski proces.
- Kako proceniti da li predložena automatizacija rešava pravi problem.
- Kako ukloniti zavisnost procesa od jedne ključne osobe.

Later, real anonymized case studies should follow this format:

```text
Situation
Problem
Analysis
Recommendation
Impact
Role
```

Example:

```text
Client:
Serbian service company, ~70 employees

Situation:
Reporting depended on manually consolidated Excel files.

Problem:
Management received profitability information too late.

Approach:
Process review + data analysis + KPI redesign.

Outcome:
Automated reporting and faster management visibility.
```

Never publish confidential client details without permission.

---

# 18. Target Client Profile

The initial audience is mainly:
- SME companies,
- owner-led companies,
- growing organizations,
- companies without an internal transformation team,
- firms with operational complexity,
- firms where systems and processes have not scaled with growth.

Interesting industries:
- services,
- field service,
- distribution,
- wholesale,
- project-driven companies,
- construction / installation businesses,
- manufacturing in selected process areas,
- companies with significant administrative workflows.

Do NOT market the site as manufacturing consulting expertise unless real expertise develops.

For unfamiliar industries, the positioning should remain:
- process analysis,
- information flow,
- reporting,
- operations,
- digitalization,
- decision support.

Avoid claiming deep specialist expertise in areas not covered by experience.

---

# 19. Contact Section

Preferred headline:

> Imate proces za koji mislite da može da radi bolje?

Suggested supporting copy:

> Opišite problem u nekoliko rečenica. Ako procenim da postoji dobar profesionalni fit, prvi razgovor možemo iskoristiti da definišemo šta bi imalo smisla dalje analizirati.

Form fields:

```text
Ime i prezime
Kompanija
Email
Telefon (optional)
Koji problem pokušavate da rešite?
```

Primary button:

> Pošalji upit

Alternative:

> Predložite razgovor

Below the form, small copy:

> Zbog ograničenog broja angažmana, svaki upit prvo pregledam kako bih procenio da li postoji dobar profesionalni fit.

Do not include:
- instant calendar booking in v1,
- public availability calendar,
- aggressive lead magnet modal,
- chat widget,
- countdown timer,
- "Only 2 slots remaining".

Scarcity must feel natural.

---

# 20. Referral-Focused Experience

The website should be optimized for this user journey:

```text
trusted referral
→ visitor opens website
→ immediately recognizes business problems
→ understands the advisor is senior and independent
→ sees limited/selective availability
→ understands engagement types
→ submits a concise inquiry
```

The website should NOT assume the user came from a Google ad with zero context.

This changes the tone.

The website can be more confident and less explanatory.

---

# 21. Tone of Voice

Copy should sound:

- senior,
- calm,
- precise,
- pragmatic,
- analytical,
- business-first,
- non-salesy.

Avoid buzzwords like:
- disruptive,
- cutting-edge,
- game-changing,
- revolutionize,
- unlock your potential,
- future-proof,
- synergy,
- world-class,
- innovation-driven excellence.

Avoid consultant cliché language unless necessary.

Prefer language such as:
- problem,
- process,
- cause,
- visibility,
- decision,
- measurement,
- control,
- bottleneck,
- efficiency,
- business impact,
- priority,
- roadmap.

---

# 22. Language — MANDATORY TRILINGUAL FROM V1

The first production version MUST be fully trilingual from the start:

- Serbian
- English
- Russian

This is not a future enhancement. It is a core requirement of v1.

All visible website copy must be available in all three languages.

The implementation must include a clear but discreet language switcher in the header:

```text
SR | EN | RU
```

or an equally refined variant.

Do not use flag icons as the primary language selector.

The currently selected language must be visually clear.

Preferred behavior:
- remember the user's selected language locally,
- default to Serbian unless browser-language detection is implemented cleanly,
- allow direct navigation to language-specific URLs if practical.

Preferred URL strategy:

```text
/sr
/en
/ru
```

or equivalent locale-aware routing.

If URL-based routing significantly complicates Azure Static Web Apps setup, a robust client-side i18n approach is acceptable, but the codebase must still remain clean and SEO-aware.

Do not hardcode content strings directly inside templates.

Use a centralized translation structure such as:

```text
/assets/i18n/sr.json
/assets/i18n/en.json
/assets/i18n/ru.json
```

or a typed translation service / Angular-compatible i18n library.

All of the following must be translated:
- navigation,
- hero content,
- engagement descriptions,
- process steps,
- limited availability messaging,
- About section,
- contact form,
- validation messages,
- footer,
- SEO title and meta description,
- Open Graph content where practical.

The tone must be adapted naturally for each language rather than mechanically translated.

Serbian:
- professional,
- concise,
- natural business Serbian.

English:
- international boutique consulting tone,
- senior and restrained.

Russian:
- natural professional Russian suitable for management consulting and business advisory.
- avoid awkward literal translations from Serbian or English.

The Russian version should use terminology that feels credible to business owners, executives and consulting professionals.

Examples of preferred Russian terminology:
- бизнес-процессы
- операционная эффективность
- цифровизация
- управленческая аналитика
- независимая экспертная оценка
- диагностика процессов
- трансформационная дорожная карта
- технологический консалтинг

Do not over-engineer translation infrastructure, but multilingual support must be production-ready in v1.

---


# 22.1 Localization Quality Requirement

Do not treat Russian and English as secondary translations.

All three versions should feel as though the website was originally written in that language.

Where wording differs culturally or stylistically, prioritize natural business language over literal sentence-by-sentence equivalence.

The consulting positioning must remain identical across all three languages:

```text
Senior
Independent
Selective
Business-first
Technology-aware
Referral-driven
Limited availability
```

For future case studies, content structure should also support all three languages.


# 23. Responsive Requirements

Must work excellently on:
- mobile,
- tablet,
- desktop,
- large desktop.

Important:
- no horizontal scrolling,
- cards stack cleanly,
- typography scales using clamp(),
- header works well on mobile,
- CTA remains visible and clear,
- forms are easy to use on phones.

---

# 24. Accessibility

Requirements:
- semantic HTML5
- keyboard-accessible navigation
- accessible form labels
- strong color contrast
- visible focus states
- aria-labels where useful
- buttons must be actual buttons
- links must be actual links
- meaningful alt text for images
- respect prefers-reduced-motion

---

# 25. Performance

Target:
- excellent Lighthouse score
- minimal JavaScript
- no unnecessary libraries
- optimized image formats
- WebP / AVIF where practical
- lazy loading below the fold
- optimized fonts
- no video backgrounds
- no heavy animation frameworks

Angular animations are optional but should remain minimal.

---

# 26. SEO Basics

Implement:
- title
- meta description
- Open Graph tags
- canonical URL placeholder
- sitemap
- robots.txt
- semantic heading hierarchy
- structured data if useful

Suggested title:

```text
Business Process & Digital Transformation Advisory
```

Suggested meta description:

```text
Nezavisno savetovanje za unapređenje poslovnih procesa, digitalizaciju, management analytics i tehnološke odluke.
```

Do not over-focus on SEO.

Referral credibility is the main goal.

---

# 27. Azure Static Web Apps

Prepare project for deployment through Azure Static Web Apps.

Include:
- valid Angular production build configuration,
- correct output path,
- GitHub Actions deployment workflow,
- Azure Static Web Apps compatible routing.

Create a `staticwebapp.config.json` if needed.

Example concerns:
- SPA fallback to index.html,
- proper routes,
- optional security headers.

Do not add unnecessary Azure Functions unless contact form implementation specifically requires them.

---

# 28. Contact Form Architecture

For v1, choose one clean implementation.

Preferred options:

1. Azure Static Web Apps API function for sending email, or
2. external transactional email/contact endpoint.

If Azure Function is used:
- keep it minimal,
- validate server-side,
- protect from simple spam,
- never expose credentials in frontend code,
- use environment variables / secrets.

Include:
- honeypot field,
- basic rate limiting if practical,
- success state,
- validation errors,
- friendly failure state.

Do not use a fake form that only logs to console.

---

# 29. GitHub Repository Requirements

Repository should include:

```text
README.md
.gitignore
.editorconfig
package.json
angular.json
staticwebapp.config.json
.github/workflows/
```

README should explain:
- local setup,
- dev server,
- production build,
- deployment,
- environment variables,
- contact form setup.

Use clean commits if Codex is asked to create Git history.

---

# 30. Coding Standards

Use:
- Angular 18 standalone components
- Signals where appropriate
- strict TypeScript
- SCSS variables
- CSS custom properties where useful
- reusable layout classes
- clean semantic components

Avoid:
- NgModules unless necessary,
- unnecessary state management libraries,
- Bootstrap,
- huge UI frameworks,
- generic admin templates.

Angular Material should NOT be used as the overall visual language.

Google Material Symbols are required for icons, but the page design itself should remain custom and editorial.

---

# 31. Suggested Component Structure

```text
app.component

components/
  header/
  footer/
  section-title/
  icon-feature/
  contact-form/

sections/
  hero/
  problem-recognition/
  engagements/
  independent-advice/
  how-i-work/
  selected-problems/
  limited-availability/
  about/
  contact/
```

Use data-driven arrays for:
- problems,
- engagement types,
- process steps,
- selected problem examples.

Avoid repeated markup.

---

# 32. Micro-interactions

Allowed:
- subtle hover lift,
- arrow movement on CTA,
- underline animation,
- gentle fade/slide-in,
- smooth section scrolling,
- refined form transitions.

Do not:
- bounce elements,
- animate every card,
- use particle effects,
- animate gradients,
- use autoplay counters,
- use excessive scroll effects.

Motion should communicate polish, not entertainment.

---

# 33. Photography

Use:
- one high-quality professional portrait,
- optionally one subtle environmental/business photo.

Do not use:
- stock team meeting photography,
- handshake stock images,
- people pointing at sticky notes,
- generic laptop/coding imagery,
- fake office photos.

The visual emphasis should remain on typography and structure.

---

# 34. Strategic Positioning Summary

The website must communicate all of the following without stating them too aggressively:

- already professionally established,
- senior consultant,
- understands both business and technology,
- independent,
- does not sell software,
- does not accept every project,
- limited availability,
- primarily referral-driven,
- project-based,
- business-problem focused,
- technically credible,
- practical rather than theoretical,
- suitable for management-level conversations.

Most important positioning sentence:

> I do not start with software. I start with the business problem.

Most important scarcity concept:

> Limited independent advisory engagements outside the primary professional role.

Most important referral concept:

> Primarily by referral and direct professional introduction.

---

# 35. Career Positioning Constraint

This website should also support a long-term professional path toward senior international consulting roles.

Therefore:
- avoid positioning as a freelance developer,
- avoid gig-economy visual language,
- avoid low-cost service language,
- avoid hourly-rate messaging,
- prefer project / advisory / transformation terminology,
- create room for anonymized case studies,
- use internationally understandable consulting language.

Future case studies should be reusable in senior consulting interviews.

Preferred case-study vocabulary:
- Situation
- Challenge
- Analysis
- Recommendation
- Transformation
- Business Impact
- KPI
- Operating Model
- Roadmap
- Implementation Oversight

---

# 36. Initial Content Priority

For the first release, prioritize quality over volume.

Must-have:
- Hero
- Problem recognition
- 3 engagement models
- Independent advice section
- How I work
- Limited availability
- Short About
- Contact
- Footer

Nice-to-have later:
- detailed case studies
- downloadable Business Process Health Check PDF
- insights/articles
- testimonials
- referral landing page

Do NOT build blog functionality in v1.

---

# 37. Optional Future Lead Asset

Later create a downloadable PDF:

> Business Process Health Check  
> 15 znakova da je kompanija prerasla svoje procese

Possible questions:
- Da li se isti podatak unosi više puta?
- Da li menadžment mora nekoga da pita za osnovne KPI-jeve?
- Da li ključni procesi postoje samo u glavama zaposlenih?
- Da li se status posla prati preko emaila ili telefona?
- Da li postoje privatni Excel fajlovi mimo ERP-a?
- Da li izveštavanje zahteva ručnu konsolidaciju?
- Da li softver diktira proces umesto obrnuto?
- Da li problemi postaju vidljivi tek kada se kupac požali?

This is not required in v1.

---

# 38. Design Acceptance Criteria

The finished site should make a visitor think:

> "This is not a freelancer trying to find work."

> "This person clearly understands business problems."

> "He understands technology but is not trying to sell me software."

> "He seems selective about the work he takes."

> "Someone I trust recommended him, and the website confirms that recommendation."

> "It is probably worth sending him my problem and seeing whether he will take the conversation."

If the website instead feels like:
- generic IT outsourcing,
- cheap freelance services,
- startup marketing,
- large fake agency,
- corporate template,

then redesign it.

---

# 39. First Implementation Task for Codex

Create the complete Angular 18 application skeleton and first polished homepage implementation according to this specification.

Deliver:
1. Angular 18 project structure
2. responsive header
3. all homepage sections
4. SCSS design system
5. Google Material Symbols integration
6. complete Serbian, English and Russian content structure
7. working SR / EN / RU language switcher
8. mobile responsive behavior
9. functional contact form frontend
10. placeholder API integration point
11. Azure Static Web Apps configuration
12. GitHub Actions deployment configuration
13. README with setup, localization and deployment instructions

Use placeholder values for:
- advisor name,
- portrait,
- email,
- domain,
- final brand name.

The implementation should be production-quality, clean and visually refined.
