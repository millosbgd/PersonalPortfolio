# Boutique Consulting Advisory Website

Premium one-page Angular website for an independent business process and digital transformation advisor.

## Stack

- Angular 18
- Standalone components
- TypeScript strict mode
- SCSS
- Google Material Symbols
- Azure Static Web Apps
- Azure Static Web Apps API placeholder for contact form

## Local Setup

Use Node.js:

```text
^20.19.0 || ^22.12.0 || >=24.0.0
```

```bash
npm install
npm start
```

The local app runs at:

```text
http://localhost:4200
```

## Production Build

```bash
npm run build
```

The Angular output is:

```text
dist/boutique-consulting-advisory/browser
```

## Localization

Visible content is centralized in:

```text
src/app/shared/content.ts
```

Supported URLs:

```text
/sr
/en
/ru
```

The selected language is stored in local storage. Serbian is the default.

When replacing placeholder copy, update all three language entries:

- Serbian
- English
- Russian

## Placeholder Values To Replace

- `Advisor Name`
- `Advisor Name Advisory`
- `hello@example.com`
- `https://example.com/`
- portrait placeholder
- LinkedIn URL

Also update:

- `src/index.html`
- `public/robots.txt`
- `public/sitemap.xml`
- `src/app/shared/content.ts`

## Contact Form

The frontend posts to:

```text
/api/contact
```

The API function validates required fields and forwards the request to a configured endpoint.

Required Azure Static Web Apps application setting:

```text
CONTACT_ENDPOINT_URL
```

Optional setting:

```text
CONTACT_ENDPOINT_TOKEN
```

Use the endpoint for a transactional email provider, CRM webhook, or your own contact handling service. Do not expose provider credentials in frontend code.

## Azure Static Web Apps

Included files:

```text
staticwebapp.config.json
.github/workflows/azure-static-web-apps.yml
```

In GitHub, add this repository secret after creating the Azure Static Web App:

```text
AZURE_STATIC_WEB_APPS_API_TOKEN
```

The workflow installs dependencies, builds with Node 22.12.0, and deploys the generated output:

```text
app_location: dist/boutique-consulting-advisory/browser
api_location: api
skip_app_build: true
```

## Content Scope

Implemented sections:

- Header and language switcher
- Hero
- Problem recognition
- Three engagement models
- Independent technology advice
- How I work
- Selected problems
- Limited availability
- Short About
- Contact form
- Footer

No blog, pricing table, calendar booking, or fake agency/team pages are included in v1.
