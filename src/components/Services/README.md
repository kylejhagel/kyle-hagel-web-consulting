# Modal-Enabled Services Component

This package upgrades the existing `Services` section into interactive service cards.

When someone clicks a service card button, a responsive and accessible modal opens with experience details mapped to client needs.

## Files

```txt
src/
├── components/
│   └── Services/
│       ├── Services.jsx
│       └── Services.scss
└── data/
    └── services.js
```

## What it includes

- Service cards generated from `src/data/services.js`
- Accessible modal using `role="dialog"` and `aria-modal="true"`
- Escape key closes the modal
- Close button receives focus when modal opens
- Focus returns to the original trigger after closing
- Backdrop click closes the modal
- Body scroll lock while modal is open
- Responsive modal layout
- Client needs, experience, and relevant tools for each service

## Install / integrate

Replace your current files:

```txt
src/components/Services/Services.jsx
src/components/Services/Services.scss
```

Then add:

```txt
src/data/services.js
```

Your existing `App.jsx` can continue using:

```jsx
import Services from './components/Services/Services.jsx';
```

## Styling dependencies

This component assumes your app already has the shared Kyle Hagel Web Consulting utility classes and CSS custom properties:

- `.container`
- `.section-block`
- `.section-header`
- `.eyebrow`
- `.button`
- `.button-primary`
- `.button-secondary`
- `.skill-list`

These are already included in the split-SCSS version of the React app.
