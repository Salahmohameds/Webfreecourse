# 🚀 Tech Path Finder - Complete Educational Platform

> **Empowering Computer Science & Engineering Students with Free Resources, Job Opportunities, and AI-Powered Career Guidance**

![Tech Path Finder](https://img.shields.io/badge/Status-Production%20Ready-brightgreen) ![React](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue) ![Vite](https://img.shields.io/badge/Vite-5.4.19-purple)

## 📋 Table of Contents

- [🌟 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Technology Stack](#️-technology-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🔧 Development](#-development)
- [🌐 Deployment](#-deployment)
- [📱 Pages & Components](#-pages--components)
- [🔌 API Endpoints](#-api-endpoints)
- [🎨 UI/UX Features](#-uiux-features)
- [🔒 Security](#-security)
- [📊 Performance](#-performance)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🌟 Overview

**Tech Path Finder** is a comprehensive educational platform designed specifically for Computer Science and Computer Engineering students. It serves as a one-stop solution for discovering free educational resources, tracking job opportunities, and receiving AI-powered career guidance.

### 🎯 Mission
Bridge the gap between academic learning and industry requirements by providing:
- **Free course discovery** from top universities and platforms
- **Real-time job tracking** from leading tech companies
- **AI-powered career guidance** with personalized recommendations
- **Research paper search** using Core API
- **Interactive chatbot** for instant support

## ✨ Features

### 🎓 **Educational Resources**
- **500+ Free Courses** from top platforms (Google, IBM, MIT, Harvard, etc.)
- **Advanced Filtering** by category, level, provider, duration, rating
- **Course Details** with descriptions, ratings, and direct links
- **Favorites System** to save preferred courses
- **Search Functionality** across all course content

### 💼 **Career Development**
- **Job Tracking** from leading tech companies
- **Company Profiles** with detailed information
- **Career Guidance** through AI chatbot
- **Skill Assessment** and personalized recommendations
- **Industry Insights** and trends

### 🔬 **Research Tools**
- **Academic Paper Search** using Core API
- **PDF Downloads** for research papers
- **Advanced Filtering** by year, venue, authors
- **Infinite Scroll** for seamless browsing
- **Rate Limiting** to prevent API abuse

### 🤖 **AI-Powered Features**
- **Interactive Chatbot** for instant support
- **Career Guidance** with personalized advice
- **Course Recommendations** based on interests
- **Smart Search** with natural language processing

### 🌍 **Multilingual Support**
- **English & Arabic** language support
- **RTL Layout** for Arabic content
- **Localized Content** and translations
- **Cultural Adaptation** for different regions

### 🎨 **Modern UI/UX**
- **Responsive Design** for all devices
- **Dark/Light Theme** with system preference detection
- **Smooth Animations** and transitions
- **Accessibility Features** for inclusive design
- **Progressive Web App** capabilities

## 🛠️ Technology Stack

### **Frontend**
- **React 18** with TypeScript for type safety
- **Vite** for fast development and optimized builds
- **Tailwind CSS** with shadcn/ui component library
- **Radix UI** primitives for accessible components
- **Lucide React** for consistent iconography
- **Framer Motion** for smooth animations

### **Backend**
- **Node.js** with Express.js framework
- **TypeScript** for type-safe server code
- **ESBuild** for fast server bundling
- **CORS** enabled for cross-origin requests
- **Rate Limiting** for API protection

### **State Management**
- **React Query** (@tanstack/react-query) for server state
- **React Hook Form** with Zod validation
- **Local Storage** for user preferences
- **Context API** for theme and language

### **Routing & Navigation**
- **Wouter** for client-side routing
- **Breadcrumb Navigation** for better UX
- **404 Error Handling** with custom pages

### **External APIs**
- **Core API** for academic research papers
- **Rate Limiting** with 1-second intervals
- **Error Handling** with user-friendly messages

### **Build Tools**
- **Vite** for frontend bundling and optimization
- **ESBuild** for backend bundling
- **PostCSS** with Tailwind CSS
- **TypeScript** compilation

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn**
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/tech-path-finder.git
cd tech-path-finder

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your API keys

# Start development server
npm run dev

# Open http://localhost:5000
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# Core API for research papers
CORE_API_KEY=your_core_api_key_here

# Database (if using database features)
DATABASE_URL=your_database_connection_string

# Environment
NODE_ENV=development
```

## 📁 Project Structure

```
WebDesignBoost/
├── client/                     # Frontend React application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── ui/           # shadcn/ui components
│   │   │   ├── navigation.tsx
│   │   │   ├── hero-section.tsx
│   │   │   └── ...
│   │   ├── pages/            # Page components
│   │   │   ├── home.tsx
│   │   │   ├── courses.tsx
│   │   │   ├── research.tsx
│   │   │   └── ...
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utility functions
│   │   ├── App.tsx           # Main app component
│   │   └── main.tsx          # Entry point
│   ├── index.html            # HTML template
│   └── ...
├── server/                    # Backend Express server
│   ├── index.ts              # Server entry point
│   ├── routes.ts             # API routes
│   └── storage.ts            # Data storage interface
├── shared/                    # Shared types and schemas
│   └── schema.ts
├── dist/                      # Build output
│   ├── public/               # Frontend build
│   └── index.js              # Backend build
├── .github/workflows/        # GitHub Actions
├── netlify.toml             # Netlify configuration
├── vercel.json              # Vercel configuration
└── package.json
```

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run preview      # Preview production build

# Code Quality
npm run check        # TypeScript type checking
npm run lint         # ESLint (if configured)

# Database
npm run db:push      # Push database schema changes
```

### Development Workflow

1. **Start Development Server**
   ```bash
   npm run dev
   ```
   - Frontend: http://localhost:5000
   - Hot reload enabled
   - TypeScript compilation

2. **Make Changes**
   - Edit files in `client/src/` for frontend
   - Edit files in `server/` for backend
   - Changes auto-reload in browser

3. **Build for Production**
   ```bash
   npm run build
   ```
   - Creates optimized build in `dist/`
   - Frontend: `dist/public/`
   - Backend: `dist/index.js`

## 🌐 Deployment

### Free Hosting Options

#### 1. **Netlify** (Recommended)
```bash
# Connect your GitHub repository
# Build command: npm run build
# Publish directory: dist/public
```

#### 2. **Vercel**
```bash
# Import from GitHub
# Auto-detects Vite configuration
# Deploys automatically
```

#### 3. **GitHub Pages**
```bash
# Push to GitHub
# Enable GitHub Actions
# Automatic deployment on push
```

### Production Deployment

1. **Build the Application**
   ```bash
   npm run build
   ```

2. **Set Environment Variables**
   - Configure production API keys
   - Set `NODE_ENV=production`

3. **Deploy to Platform**
   - Follow platform-specific instructions
   - Configure custom domain (optional)

## 📱 Pages & Components

### **Core Pages**

#### 🏠 **Home Page** (`/`)
- Hero section with call-to-action
- Featured courses showcase
- Company highlights
- Statistics and testimonials
- Newsletter signup

#### 📚 **Courses Page** (`/courses`)
- Advanced filtering system
- Grid/List view toggle
- Search functionality
- Favorites management
- Course details modal

#### 🔬 **Research Page** (`/research`)
- Core API integration
- Academic paper search
- PDF download functionality
- Advanced filtering options
- Infinite scroll pagination

#### 🏢 **Companies Page** (`/companies`)
- Company profiles and information
- Job opportunities listing
- Company statistics
- Contact information

#### 📞 **Contact Page** (`/contact`)
- Contact form with validation
- Office hours and location
- FAQ section
- Social media links

### **Key Components**

#### **Navigation**
- Responsive navigation bar
- Language switcher
- Theme toggle
- Mobile menu

#### **Course Cards**
- Course information display
- Rating system
- Provider badges
- Action buttons

#### **Chatbot Modal**
- AI-powered assistance
- Career guidance
- Course recommendations
- Interactive Q&A

#### **Filter System**
- Category filters
- Level filters
- Provider filters
- Duration filters
- Rating filters

## 🔌 API Endpoints

### **Research API**
```
GET /search
Query Parameters:
- q: Search query
- pdfOnly: Filter PDFs only
- page: Page number
```

### **Response Format**
```json
{
  "core": [
    {
      "id": "paper_id",
      "title": "Paper Title",
      "abstract": "Abstract text",
      "authors": [{"name": "Author Name"}],
      "downloadUrl": "PDF URL",
      "year": 2024,
      "venue": "Conference/Journal",
      "doi": "DOI identifier"
    }
  ],
  "total": 1000,
  "hasMore": true
}
```

## 🎨 UI/UX Features

### **Design System**
- **Color Palette**: Primary, secondary, accent colors
- **Typography**: Consistent font hierarchy
- **Spacing**: 8px grid system
- **Components**: Reusable UI components

### **Responsive Design**
- **Mobile First**: Optimized for mobile devices
- **Tablet**: Responsive layouts for tablets
- **Desktop**: Enhanced desktop experience
- **Breakpoints**: Tailwind CSS breakpoints

### **Accessibility**
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG compliant
- **Focus Management**: Proper focus indicators

### **Performance**
- **Code Splitting**: Dynamic imports
- **Image Optimization**: WebP format support
- **Caching**: Browser caching strategies
- **Lazy Loading**: Component lazy loading

## 🔒 Security

### **Frontend Security**
- **Input Validation**: Zod schema validation
- **XSS Prevention**: React's built-in protection
- **CSRF Protection**: Token-based protection
- **Content Security Policy**: CSP headers

### **Backend Security**
- **Rate Limiting**: API request throttling
- **CORS Configuration**: Cross-origin protection
- **Error Handling**: Secure error messages
- **Input Sanitization**: Request validation

### **Data Protection**
- **Environment Variables**: Secure API key storage
- **HTTPS Only**: Secure connections
- **No Sensitive Data**: No secrets in code
- **Regular Updates**: Dependency updates

## 📊 Performance

### **Optimization Techniques**
- **Vite Build**: Fast development and optimized builds
- **Code Splitting**: Dynamic imports for better loading
- **Tree Shaking**: Unused code elimination
- **Minification**: CSS and JS minification
- **Compression**: Gzip compression

### **Performance Metrics**
- **Lighthouse Score**: 90+ performance score
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### **Monitoring**
- **Build Analytics**: Bundle size monitoring
- **Performance Tracking**: Core Web Vitals
- **Error Monitoring**: Error tracking
- **User Analytics**: Usage statistics

## 🤝 Contributing

### **Development Setup**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### **Code Standards**
- **TypeScript**: Strict type checking
- **ESLint**: Code linting rules
- **Prettier**: Code formatting
- **Conventional Commits**: Commit message format

### **Testing**
- **Unit Tests**: Component testing
- **Integration Tests**: API testing
- **E2E Tests**: End-to-end testing
- **Performance Tests**: Load testing

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Core API** for academic research data
- **shadcn/ui** for beautiful components
- **Tailwind CSS** for utility-first styling
- **Vite** for fast build tooling
- **React Community** for excellent documentation

## 📞 Support

- **Email**: Salah.abdelhady.200@Gmail.com
- **Phone**: +20 01222414227
- **Address**: EGYPT
- **Office Hours**: Sunday-Thursday 9 AM - 5 PM (GMT+2)

---

**Made with ❤️ for Computer Science & Engineering Students**

*Empowering the next generation of tech professionals through accessible education and career guidance.*