<div align="center">

# 🏠 Real Estate Management Platform

### A Modern Full-Stack Property Management Solution

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-336791?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

**A comprehensive property management platform connecting property managers with tenants, featuring interactive maps, application tracking, and lease management.**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Screenshots](#-screenshots) • [Contributing](#-contributing)

</div>

---

## ✨ Features

### 🏢 For Property Managers
- **Property Listings** - Create and manage property listings with photos, amenities, and pricing
- **Application Management** - Review and process tenant applications with status tracking
- **Lease Management** - Track active leases, renewal dates, and terms
- **Payment Tracking** - Monitor rent payments, overdue amounts, and payment history
- **Analytics Dashboard** - View occupancy rates, revenue, and property performance

### 👥 For Tenants
- **Property Search** - Browse available properties with advanced filtering
- **Interactive Maps** - Explore properties on an interactive Mapbox-powered map
- **Favorites** - Save and compare favorite properties
- **Online Applications** - Submit rental applications digitally
- **Lease Portal** - View lease details and payment history
- **Payment Management** - Track rent payments and due dates

### 🎯 Core Capabilities
- 🔐 **Secure Authentication** - AWS Amplify-powered user authentication
- 🗺️ **Geolocation** - PostGIS-powered location search and mapping
- 📱 **Responsive Design** - Mobile-first, works on all devices
- 🌙 **Dark Mode** - Built-in dark mode support
- ⚡ **Real-time Updates** - Live data synchronization
- 🔍 **Advanced Search** - Filter by price, location, amenities, and more

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 14](https://nextjs.org/) - React framework with App Router
- **UI Library:** [React 18](https://reactjs.org/) - Component-based UI
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) - Predictable state container
- **Maps:** [Mapbox GL](https://www.mapbox.com/) - Interactive maps
- **Authentication:** [AWS Amplify](https://aws.amazon.com/amplify/) - User authentication
- **Icons:** [Lucide React](https://lucide.dev/) - Beautiful icons
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/) - Toast notifications

### Backend
- **Runtime:** [Node.js](https://nodejs.org/) - JavaScript runtime
- **Framework:** [Express](https://expressjs.com/) - Web application framework
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe backend
- **ORM:** [Prisma](https://www.prisma.io/) - Next-generation ORM
- **Database:** [PostgreSQL](https://www.postgresql.org/) - Relational database
- **Geospatial:** [PostGIS](https://postgis.net/) - Geographic objects for PostgreSQL

### Development Tools
- **Package Manager:** npm
- **Code Quality:** ESLint
- **API Testing:** Prisma Studio

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18+ and npm ([Download](https://nodejs.org/))
- **PostgreSQL** 14+ with PostGIS extension ([Download](https://www.postgresql.org/download/))
- **Git** ([Download](https://git-scm.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/real-estate-platform.git
   cd real-estate-platform
   ```

2. **Install dependencies**
   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Set up PostgreSQL database**
   ```bash
   # Create database
   createdb realestate_db

   # Enable PostGIS extension
   psql -d realestate_db -c "CREATE EXTENSION IF NOT EXISTS postgis;"
   ```

4. **Configure environment variables**

   **Server (.env):**
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/realestate_db?schema=public"
   PORT=8000
   NODE_ENV=development
   ```

   **Client (.env.local):**
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
   NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
   ```

   > 💡 **Get a free Mapbox token:** Sign up at [mapbox.com](https://www.mapbox.com/) and create an access token.

5. **Initialize the database**
   ```bash
   cd server
   npm run prisma:generate
   npm run prisma:migrate
   npm run prisma:seed
   ```

6. **Start the development servers**

   **Terminal 1 - Backend:**
   ```bash
   cd server
   npm run dev
   ```

   **Terminal 2 - Frontend:**
   ```bash
   cd client
   npm run dev
   ```

7. **Open your browser**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:8000](http://localhost:8000)
   - Prisma Studio: Run `npm run prisma:studio` in server directory

---

## 📁 Project Structure

```
real-estate-platform/
├── client/                      # Next.js frontend application
│   ├── app/                    # Next.js app directory (routes)
│   │   ├── globals.css        # Global styles and Tailwind config
│   │   ├── tailwind.config.ts # Tailwind configuration
│   │   └── tsconfig.json      # TypeScript configuration
│   ├── components/            # Reusable React components
│   │   └── FormField.tsx      # Form field component
│   ├── hooks/                 # Custom React hooks
│   │   └── use-mobile.tsx     # Mobile detection hook
│   ├── lib/                   # Utility functions and helpers
│   ├── public/                # Static assets
│   ├── state/                 # Redux store and slices
│   │   └── redux.tsx          # Redux configuration
│   ├── types/                 # TypeScript type definitions
│   ├── .env.local             # Environment variables (client)
│   ├── next.config.js         # Next.js configuration
│   └── package.json           # Client dependencies
│
├── server/                     # Express backend application
│   ├── prisma/                # Prisma ORM configuration
│   │   ├── schema.prisma      # Database schema
│   │   ├── seed.ts            # Database seeding script
│   │   └── seedData/          # Seed data JSON files
│   ├── src/                   # Server source code
│   │   └── index.ts           # Express server entry point
│   ├── .env                   # Environment variables (server)
│   ├── tsconfig.json          # TypeScript configuration
│   └── package.json           # Server dependencies
│
└── README.md                   # This file
```

---

## 📊 Database Schema

The application uses a PostgreSQL database with the following main entities:

- **Property** - Rental properties with details, pricing, and amenities
- **Manager** - Property managers who list and manage properties
- **Tenant** - Users looking for rental properties
- **Location** - Geographic locations with PostGIS coordinates
- **Application** - Rental applications from tenants
- **Lease** - Active rental agreements
- **Payment** - Rent payment records

### Key Features:
- PostGIS integration for geospatial queries
- Enum types for property types, amenities, and statuses
- Relational data with foreign keys and constraints
- Optimized for performance with proper indexing

---

## 🎨 Screenshots

> 📸 *Screenshots coming soon! The application features a modern, responsive design with dark mode support.*

---

## 🔧 Available Scripts

### Client Scripts
```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Server Scripts
```bash
npm run dev              # Start development server with hot reload
npm run build            # Compile TypeScript to JavaScript
npm start                # Start production server
npm run prisma:generate  # Generate Prisma Client
npm run prisma:migrate   # Run database migrations
npm run prisma:seed      # Seed database with sample data
npm run prisma:studio    # Open Prisma Studio (database GUI)
```

---

## 🌐 Deployment

### Recommended Hosting Options

**Frontend (Next.js):**
- [Vercel](https://vercel.com/) - Optimal for Next.js (free tier available)
- [Netlify](https://www.netlify.com/) - Easy deployment with Git integration
- [AWS Amplify](https://aws.amazon.com/amplify/) - Full-stack hosting

**Backend (Express + PostgreSQL):**
- [Railway](https://railway.app/) - PostgreSQL + Node.js hosting (free tier)
- [Render](https://render.com/) - Web services and databases (free tier)
- [Heroku](https://www.heroku.com/) - Classic PaaS platform

**Database:**
- [Supabase](https://supabase.com/) - PostgreSQL with PostGIS (free tier)
- [Neon](https://neon.tech/) - Serverless PostgreSQL (free tier)
- [Railway](https://railway.app/) - Managed PostgreSQL (free tier)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines
- Write clean, maintainable code
- Follow TypeScript best practices
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Prisma](https://www.prisma.io/) for the excellent ORM
- [Mapbox](https://www.mapbox.com/) for interactive maps
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [AWS Amplify](https://aws.amazon.com/amplify/) for authentication

---


<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by Shobhit Singh

</div>
