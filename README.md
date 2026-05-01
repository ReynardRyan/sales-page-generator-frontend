# AI Sales Page Generator — Frontend

A React application for generating AI-powered sales pages.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS** — styling
- **React Router v6** — routing
- **TanStack Query v5** — server state management
- **Zustand** — client state (auth)
- **React Hook Form** + **Zod** — form handling & validation
- **Axios** — HTTP client

## Getting Started

### Prerequisites

- Node.js >= 18
- npm

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` and fill in the values:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API base URL (e.g. `http://localhost:8000/api/v1`) |
| `VITE_APP_NAME` | Application name displayed in the UI |

### Running Locally

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/         # Reusable UI & layout components
│   ├── layout/         # Navbar, Sidebar, MainLayout, AuthLayout
│   └── ui/             # Button, Input, Modal, Card, etc.
├── features/           # Feature-based modules
│   ├── auth/           # Login, Register, auth store & hooks
│   └── sales-page/     # Sales page form, preview, hooks
├── pages/              # Route-level page components
├── routes/             # Route definitions & guards
├── services/           # API service functions
├── lib/                # Axios instance, React Query client
├── types/              # Shared TypeScript types
└── constants/          # App-wide constants & route paths
```

## Pages

| Route | Description |
|-------|-------------|
| `/login` | Login page (guest only) |
| `/register` | Register page (guest only) |
| `/dashboard` | Overview dashboard (protected) |
| `/sales-pages/create` | Generate a new sales page (protected) |
| `/sales-pages/:id` | Preview a sales page (protected) |
| `/sales-pages/:id/edit` | Edit a sales page (protected) |
| `/history` | List of all generated pages (protected) |

## API

The frontend connects to a Laravel REST API. Authentication uses Bearer tokens stored in Zustand and injected automatically on every request. On a `401` response, the user is redirected to `/login`.

Backend API documentation: `{VITE_API_URL}/documentation`
