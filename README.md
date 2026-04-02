# Cudago - On-Demand Verified Services Platform

A modern, fully responsive web application for connecting users with verified professionals for household services including cleaning, cooking, childcare, and more.

## Features

- **Modern Design**: Built with Tailwind CSS v4 and TypeScript for a beautiful, responsive interface
- **Verified Professionals**: Comprehensive trust and verification system with background checks
- **Service Browsing**: Filterable and searchable service catalog with detailed information
- **User Authentication**: Secure sign-up and sign-in flows with password validation
- **Testimonials**: Real customer reviews and trust indicators
- **Mobile Optimized**: Fully responsive design that works seamlessly on all devices
- **Performance**: Optimized for fast loading with Next.js 16 and modern best practices

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **UI Components**: Lucide React Icons
- **Package Manager**: npm/pnpm

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/cudago/cudago-web.git
cd cudago-web
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
cudago-web/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles and design tokens
│   ├── services/
│   │   └── page.tsx         # Services catalog page
│   ├── sign-up/
│   │   ├── page.tsx         # Sign-up page
│   │   └── confirm/page.tsx # Email confirmation page
│   ├── not-found.tsx        # 404 page
│   └── error.tsx            # Error boundary
├── components/               # React components
│   ├── Navbar.tsx           # Navigation bar
│   ├── HeroSection.tsx      # Hero section
│   ├── HowItWorks.tsx       # Process steps
│   ├── ServicesGrid.tsx     # Services overview
│   ├── ServiceCard.tsx      # Individual service card
│   ├── TrustSection.tsx     # Trust indicators
│   ├── TestimonialsCarousel.tsx # Customer testimonials
│   ├── CTASection.tsx       # Call-to-action
│   ├── SignUpForm.tsx       # User registration form
│   └── Footer.tsx           # Footer
├── lib/                     # Utility functions and data
│   ├── utils.ts            # Helper functions
│   ├── constants.ts        # App constants and mock data
│   ├── services.ts         # Service data and queries
│   └── schemas.ts          # Form validation schemas
├── public/                  # Static assets
│   └── robots.txt          # SEO robots file
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Key Pages

- **Homepage** (`/`): Landing page with hero, features, how it works, services overview, trust section, and testimonials
- **Services** (`/services`): Browsable and filterable service catalog with search functionality
- **Sign Up** (`/sign-up`): User registration with comprehensive form validation
- **Email Confirmation** (`/sign-up/confirm`): Post-signup confirmation flow
- **404** (`/not-found`): Custom 404 error page
- **Error**: Global error boundary for error handling

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Code Quality

- TypeScript strict mode enabled
- ESLint configuration for code consistency
- Tailwind CSS for consistent styling
- Accessibility best practices (WCAG 2.1 AA)

## Performance Optimizations

- Next.js Image optimization for faster loading
- CSS compression and minification
- Code splitting and lazy loading
- Responsive design with mobile-first approach
- Optimized Core Web Vitals

## SEO

- Meta tags for all pages
- Open Graph support
- Structured data
- Mobile-friendly design
- Fast page load times
- XML sitemap support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

We welcome contributions! Please follow these steps:

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Website: [cudago.com](https://cudago.com)
- Email: support@cudago.com
- Twitter: [@cudago](https://twitter.com/cudago)

## Roadmap

- User authentication and profiles
- Real-time booking system
- Payment integration (Stripe/PayPal)
- Professional dashboard
- Admin panel
- Mobile app (React Native)
- Advanced analytics
- AI-powered recommendations

---

Built with care for the Cudago platform.
