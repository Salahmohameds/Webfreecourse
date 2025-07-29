# Tech Path Finder - Full Stack Web Application

## Overview

Tech Path Finder is a comprehensive responsive website built with modern web technologies to help Computer Science and Computer Engineering students discover free courses, track hiring companies, and receive AI-powered career guidance. The application features a React frontend with TypeScript, an Express.js backend, and PostgreSQL database integration through Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **UI Components**: Comprehensive component system using Radix UI primitives
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API design with /api prefix
- **Middleware**: Custom logging and error handling middleware
- **Development**: Hot reload support with Vite integration

### Database & ORM
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: @neondatabase/serverless for serverless compatibility

## Key Components

### Core Features
1. **Course Discovery**: Curated free courses with filtering and search capabilities
2. **Company Tracker**: Job opportunities tracker with company information
3. **AI Chatbot**: Interactive career guidance system with Q&A flow
4. **Contact System**: Form-based contact with validation
5. **Responsive Design**: Mobile-first approach with dark/light theme support

### UI Component System
- **Design System**: shadcn/ui with "new-york" style variant
- **Theme**: CSS custom properties for consistent theming
- **Components**: Accordion, Alert, Badge, Button, Card, Dialog, Form, Navigation, Table, Tabs, and more
- **Icons**: Lucide React icon library

### Authentication Framework
- **Schema**: User table with username/password fields
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Session Management**: Ready for connect-pg-simple integration

## Data Flow

### Frontend Data Management
1. **Query Client**: Centralized API request handling with React Query
2. **API Layer**: Custom fetch wrapper with error handling and authentication
3. **Component State**: Local state for UI interactions, server state via React Query
4. **Form Handling**: React Hook Form with Zod validation schemas

### Backend Request Lifecycle
1. **Request Logging**: Automatic API request/response logging
2. **Route Registration**: Modular route system with Express
3. **Error Handling**: Global error middleware with proper status codes
4. **Storage Layer**: Interface-based storage abstraction for easy database switching

### Database Schema
- **Users Table**: ID (UUID), username (unique), password
- **Migrations**: Located in /migrations directory
- **Schema**: Shared between frontend and backend in /shared directory

## External Dependencies

### Core Dependencies
- **UI Framework**: React ecosystem with TypeScript support
- **Styling**: Tailwind CSS with PostCSS processing
- **Backend**: Express.js with tsx for TypeScript execution
- **Database**: Drizzle ORM with PostgreSQL driver
- **Build Tools**: Vite with React plugin and ESBuild

### Development Tools
- **Replit Integration**: Cartographer plugin and error overlay for development
- **Type Checking**: TypeScript with strict mode enabled
- **Code Quality**: Path aliases for clean imports

### Production Dependencies
- **Date Handling**: date-fns for date manipulation
- **Form Validation**: @hookform/resolvers with Zod schemas
- **Session Storage**: connect-pg-simple for PostgreSQL session store
- **UUID Generation**: Built-in crypto.randomUUID for user IDs

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to dist/public
2. **Backend Build**: ESBuild bundles server code to dist/index.js
3. **Environment**: NODE_ENV-based configuration for development/production

### Development Workflow
- **Local Development**: tsx server with Vite middleware integration
- **Hot Reload**: Vite HMR for frontend, server restart for backend changes
- **Database**: Drizzle push command for schema synchronization

### Production Deployment
- **Server**: Node.js process serving built static files and API routes
- **Database**: PostgreSQL with connection pooling via Neon serverless
- **Static Assets**: Served through Express static middleware
- **Error Handling**: Production-ready error responses without stack traces

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Build Outputs**: Separate directories for client (dist/public) and server (dist/)
- **Asset Resolution**: Vite handles asset optimization and bundling