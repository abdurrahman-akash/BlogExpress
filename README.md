# Modern Blog Application with Next.js 15+ and TypeScript

[![Next.js](https://img.shields.io/badge/Next.js-15+-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3+-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern blog application built with Next.js 15+, TypeScript, and integrated with the JSONPlaceholder API. Features server-side rendering, responsive design, and real-time interactions.

## Features

- **Post Management**
  - Paginated post listing (10 posts per page)
  - Infinite scroll implementation
  - Search functionality (title and content)
  - Post details with reading time estimation
  - Related posts section

- **User Interactions**
  - Comment system with form validation
  - Social sharing buttons
  - Author profile pages with statistics
  - Dark/Light mode toggle

- **Technical Excellence**
  - Type-safe codebase with TypeScript
  - React Server Components architecture
  - Client-side caching with React Query
  - Responsive mobile-first design
  - SEO optimization with meta tags
  - Accessibility (a11y) compliant

## Technologies Used

**Frontend**
- Next.js 15+ (App Router)
- TypeScript 5+
- Tailwind CSS 3.3+
- shadcn/ui
- React Query (TanStack Query)
- Axios for HTTP requests

**State Management**
- React Hook Form for form handling
- Zod for schema validation
- Next Themes for dark mode

**API Integration**
- JSONPlaceholder REST API
- React Server Components for data fetching

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/nextjs-blog.git
cd nextjs-blog
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open http://localhost:3000 in your browser

## Project Structure

```bash
BlogExpress/
├── app/            # Next.js app router components
├── components/     # Reusable UI components
├── hooks/          # Custom React hooks
├── lib/            # API services and utilities
├── types/          # TypeScript type definitions
├── styles/         # Global CSS styles
└── public/         # Static assets
```

## API Documentation

The application integrates with the following JSONPlaceholder endpoints:

| Endpoint                 | Method | Description                     |
|--------------------------|--------|---------------------------------|
| `/posts`                 | GET    | Fetch paginated posts           |
| `/posts/{id}`            | GET    | Get single post details         |
| `/posts/{id}/comments`   | GET    | Fetch post comments             |
| `/posts/{id}/comments`   | POST   | Submit new comment              |
| `/users`                 | GET    | Get all users                   |
| `/users/{id}/posts`      | GET    | Get posts by specific author    |

**Note:** POST requests to JSONPlaceholder are mocked and won't persist changes.

## Deployment

Deploy to your preferred platform:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/nextjs-blog)

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- JSONPlaceholder for providing the free fake API
- Next.js team for the awesome framework
- Tailwind CSS for the utility-first CSS framework

---

**Happy Coding!** ✍️
