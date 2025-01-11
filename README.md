# Holded Next.js Dashboard

A modern dashboard application for Holded API integration, built with Next.js and NextUI. This project demonstrates the implementation of a business management interface using modern web development practices.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/docs/getting-started)
- **UI Components:** [NextUI v2](https://nextui.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Variants:** [Tailwind Variants](https://tailwind-variants.org)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Theme Switching:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Business API:** [Holded API](https://developers.holded.com/reference/overview)

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd holded-nextjs
```

2. Install dependencies:
You can use `npm`, `yarn`, `pnpm`, or `bun`. Example using `npm`:
```bash
npm install
```

3. Install Holded API Client:
```bash
npm run install:holded
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Vercel Deployment

For deploying to Vercel, add the following command to your build settings:

```bash
pnpm install --no-frozen-lockfile && npx api install -l ts -y @holded/v1.0#2tq2om5ntgl42
```

This will ensure the Holded API client is properly installed during the build process.

## Available Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run linting checks
- `npm run install:holded` - Install Holded API client

## Project Structure

```
app/              # Next.js app directory
components/       # React components
types/           # TypeScript type definitions
.api/            # API integrations
config/          # Configuration files
styles/          # Global styles
```

## Features

- 🌓 Dark/Light mode support
- 📱 Responsive design
- ⚡ Fast page loads with Next.js
- 🎨 Modern UI with NextUI
- 📝 TypeScript for type safety
- 🔄 Holded API integration
- 🎯 Business management interface

## Setup pnpm (optional)

If you are using `pnpm`, add the following to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, run `pnpm install` again to ensure correct dependency installation.

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).
