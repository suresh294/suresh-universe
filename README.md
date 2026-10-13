# Suresh Universe — Interactive Developer Portfolio

[![CI](https://github.com/suresh294/suresh-universe/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/suresh294/suresh-universe/actions/workflows/ci.yml)

A Vite + React portfolio website for presenting projects, skills, a resume, and contact information through a dark, space-inspired interface. The project includes animated navigation, a 3D scene, and a local JSON-based profile configuration.

**Portfolio site:** [sureshporfolio.netlify.app](https://sureshporfolio.netlify.app)

## Features

- Landing experience with an introductory flow.
- React-based portfolio sections for about, projects, resume, and contact.
- 3D scene built with React Three Fiber and Drei.
- Motion effects using Framer Motion and React Spring.
- Profile content configured in `src/data/profile.json`.
- EmailJS dependency available for contact-form integration; configure its required public identifiers before relying on email delivery.

## Technology Stack

- React and Vite
- Three.js, React Three Fiber, and Drei
- Framer Motion and React Spring
- React Router
- EmailJS browser SDK

## Run Locally

Prerequisites: Node.js 22 or a compatible version for the installed Vite toolchain, plus npm.

```bash
git clone https://github.com/suresh294/suresh-universe.git
cd suresh-universe
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

A GitHub Actions workflow runs the production build on pushes and pull requests targeting `main`.

## Configuration and Privacy

Update `src/data/profile.json` with your own portfolio details before publishing. Review all contact fields and resume assets before making the site public. Keep API keys and other secrets out of client-side code; browser-delivered environment values are not secret.

## Repository

[View Suresh Universe on GitHub](https://github.com/suresh294/suresh-universe)
