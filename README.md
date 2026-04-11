# Portfolio & Personal HomePage

[![Next.js](https://img.shields.io/badge/Next.js-16.2.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![.NET](https://img.shields.io/badge/.NET-10.0-512BD4?style=for-the-badge&logo=dotnet)](https://dotnet.microsoft.com/)
[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker)](https://docker.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Production-326CE5?style=for-the-badge&logo=kubernetes)](https://kubernetes.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript)](https://typescriptlang.org/)

A modern, full-stack personal portfolio website showcasing projects, skills, and professional experience. Built with Next.js, .NET Core, and deployed on Kubernetes for production scalability.

## 🌟 Overview

This is a comprehensive portfolio application featuring a responsive frontend built with Next.js and TypeScript, backed by a robust .NET Core API. The application showcases personal projects with dynamic content rendering, includes a functional contact system with email integration, and demonstrates modern web development practices with containerization and orchestration.

**Live Demo:** [romitsagu.com](https://romitsagu.com)

## Table of Contents
- [Portfolio \& Personal HomePage](#portfolio--personal-homepage)
  - [🌟 Overview](#-overview)
  - [Table of Contents](#table-of-contents)
  - [🏗️ Architecture](#️-architecture)
  - [✨ Features](#-features)
    - [🎨 Frontend Features](#-frontend-features)
    - [🔧 Backend Features](#-backend-features)
    - [📱 Content Sections](#-content-sections)
  - [🛠️ Technology Stack](#️-technology-stack)
    - [Frontend (HomePage-UI)](#frontend-homepage-ui)
    - [Backend (HomePage-API)](#backend-homepage-api)
    - [DevOps \& Infrastructure](#devops--infrastructure)
  - [📁 Project Structure](#-project-structure)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Quick Start](#quick-start)
    - [Development Workflow](#development-workflow)
    - [Environment Configuration](#environment-configuration)
      - [Frontend Environment Variables](#frontend-environment-variables)
      - [Backend Configuration](#backend-configuration)
      - [Production Configuration Notes](#production-configuration-notes)
  - [🐳 Development with Docker](#-development-with-docker)
    - [Individual Container Commands](#individual-container-commands)
  - [☸️ Kubernetes Deployment](#️-kubernetes-deployment)
    - [Deploy to Kubernetes Cluster](#deploy-to-kubernetes-cluster)
    - [Kubernetes Resources](#kubernetes-resources)
  - [📚 API Documentation](#-api-documentation)
    - [Authentication](#authentication)
    - [Projects Controller](#projects-controller)
      - [Get All Projects](#get-all-projects)
      - [Get Specific Project Details](#get-specific-project-details)
    - [Contact Controller](#contact-controller)
      - [Send Contact Form](#send-contact-form)
    - [Error Responses](#error-responses)
  - [🔧 Scripts and Commands](#-scripts-and-commands)
    - [Frontend (HomePage-UI)](#frontend-homepage-ui-1)
    - [Backend (HomePage-API)](#backend-homepage-api-1)
    - [Full Stack Development](#full-stack-development)
    - [Utility Scripts](#utility-scripts)
  - [📈 Performance Optimizations](#-performance-optimizations)
  - [🔒 Security Features](#-security-features)

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Database      │
│   (Next.js)     │◄──►│   (.NET Core)   │◄──►│   (SQL Server)  │
│   Port: 3000    │    │   Port: 8080    │    │   Port: 1433    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │              ┌─────────────────┐              │
         │              │   Email Service │              │
         │              │   (SMTP)        │              │
         │              └─────────────────┘              │
         │                                               │
    ┌─────────────────────────────────────────────────────────┐
    │                 Kubernetes Cluster                      │
    │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      │
    │  │   Ingress   │  │   Service   │  │   ConfigMap │      │
    │  │   (Nginx)   │  │   (LB)      │  │   (Config)  │      │
    │  └─────────────┘  └─────────────┘  └─────────────┘      │
    └─────────────────────────────────────────────────────────┘
```

The application follows a modern microservices architecture with:
- **Frontend**: Next.js application with TypeScript, Tailwind CSS, and Framer Motion
- **Backend**: .NET Core Web API with Entity Framework Core
- **Database**: SQL Server with Entity Framework migrations
- **Containerization**: Docker containers for both frontend and backend
- **Orchestration**: Kubernetes deployment with services, ingress, and ConfigMaps
- **Email**: SMTP integration for contact form functionality

## ✨ Features

### 🎨 Frontend Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Animations**: Smooth transitions with Framer Motion
- **Particle Effects**: Dynamic background particles using TSParticles
- **Map Integration**: Interactive location display with Leaflet
- **Dark Theme**: Modern dark UI with emerald accents
- **SEO Optimized**: Meta tags, structured data, and performance optimization

### 🔧 Backend Features
- **RESTful API**: Clean API design with Swagger documentation
- **Entity Framework**: Code-first database approach with migrations
- **Email Service**: SMTP integration for contact form submissions
- **Data Protection**: Secure key management with Entity Framework
- **CORS Support**: Cross-origin resource sharing configuration
- **Environment Configuration**: Separate development and production settings

### 📱 Content Sections
- **About**: Personal introduction and background
- **Skills**: Categorized technical skills with icons
- **Experience**: Professional work history and achievements
- **Projects**: Detailed project showcase with GitHub integration
- **Certificates**: Professional certifications and credentials
- **Testimonials**: Colleague recommendations and feedback
- **Contact**: Functional contact form with email delivery
- **Location**: Interactive map showing current location

## 🛠️ Technology Stack

### Frontend (HomePage-UI)
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5.0+
- **Styling**: Tailwind CSS 3.4+
- **Animations**: Framer Motion 12.23+
- **UI Components**: Custom components with Lucide React icons
- **Data Grid**: ShadcnUI Table
- **Maps**: React Leaflet for interactive maps
- **Particles**: TSParticles for background effects
- **Build Tool**: Turbopack for fast development

### Backend (HomePage-API)
- **Framework**: .NET 10.0 Web API
- **Language**: C# with nullable reference types
- **ORM**: Entity Framework Core 10.0
- **Database**: SQL Server with Entity Framework migrations
- **Documentation**: Swagger/OpenAPI 3.0
- **Email**: SMTP service for contact forms
- **Security**: ASP.NET Core Data Protection
- **Markdown**: Markdig for README rendering

### DevOps & Infrastructure
- **Containerization**: Docker with multi-stage builds
- **Orchestration**: Kubernetes with YAML manifests
- **Web Server**: Nginx for reverse proxy and SSL termination
- **CI/CD**: GitHub Actions for automated deployment
- **SSL**: TLS certificates for secure communication
- **Environment**: Development and production configurations

## 📁 Project Structure

```
HomePage/
├── .github/                     # GitHub workflows and automation
│   ├── dependabot.yml           # Dependency update automation
│   └── workflows/               # CI/CD pipeline definitions
│       ├── build-api.yml        # Docker build & push for backend API
│       ├── build-ui.yml         # Docker build & push for frontend UI
│       ├── deploy.yml           # Kubernetes deployment to production
│       ├── pr-check-api.yml     # PR validation & testing for API
│       ├── pr-check-ui.yml      # PR validation & testing for UI
│       └── update-readme.yml    # Automated README badge updates
├── HomePage-UI/                 # Next.js Frontend Application
│   ├── src/
│   │   ├── app/                # App Router pages and layouts
│   │   │   ├── (home)/         # Home page grouped routes
│   │   │   │   ├── Contact/    # Contact form page
│   │   │   │   ├── Logo/       # Logo generator page
│   │   │   │   ├── Resume/     # Resume viewer page
│   │   │   │   └── page.tsx    # Main homepage
│   │   │   ├── Projects/       # Projects section with dynamic routes
│   │   │   │   ├── [...path]/  # Dynamic project detail pages
│   │   │   │   ├── layout.tsx  # Projects layout with navigation
│   │   │   │   └── page.tsx    # Projects overview with data grid
│   │   │   └── api/            # API route handlers
│   │   │       └── proxy/      # API proxy for backend communication
│   │   ├── components/         # Reusable React components
│   │   │   ├── Home/           # Homepage-specific components
│   │   │   │   ├── AboutSection.tsx
│   │   │   │   ├── CertificatesSection.tsx
│   │   │   │   ├── ContactSection.tsx
│   │   │   │   ├── ExperienceSection.tsx
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── LocationSection.tsx
│   │   │   │   ├── MobileNav.tsx
│   │   │   │   ├── Navbar.tsx
│   │   │   │   ├── ProjectsSection.tsx
│   │   │   │   ├── SignatureProjectSection.tsx
│   │   │   │   ├── SkillsSection.tsx
│   │   │   │   ├── TestimonialsSection.tsx
│   │   │   │   └── TimelineItem.tsx
│   │   │   ├── HeroParticles.tsx    # TSParticles background animation
│   │   │   ├── MapComponent.tsx     # Leaflet map integration
│   │   │   └── icons.tsx           # Custom SVG icon components
│   │   ├── lib/                # Utility functions and configurations
│   │   │   ├── data.tsx        # Static content data (skills, projects, etc.)
│   │   │   └── proxy.ts        # API proxy utility functions
│   │   └── types/              # TypeScript type definitions
│   │       └── types.ts        # Shared interface definitions
│   ├── public/                 # Static assets and images
│   ├── Dockerfile             # Frontend container configuration
│   ├── package.json           # Dependencies and scripts
│   ├── tailwind.config.js     # Tailwind CSS configuration
│   ├── next.config.ts         # Next.js configuration
│   └── tsconfig.json          # TypeScript configuration
│
├── HomePage-API/               # .NET Core Backend API
│   ├── Controllers/           # API endpoint controllers
│   │   ├── ContactController.cs    # Contact form handling
│   │   └── ProjectsController.cs   # Project data endpoints
│   ├── Data/                  # Entity Framework context and configuration
│   │   └── HomePageContext.cs     # Database context
│   ├── Models/                # Data models and DTOs
│   │   ├── Application.cs         # Project/application model
│   │   ├── Models.cs             # Request/response models
│   │   └── PowerSettings.cs      # System configuration model
│   ├── Services/              # Business logic and external services
│   │   └── EmailService.cs       # SMTP email functionality
│   ├── Properties/            
│   │   └── launchSettings.json 
│   ├── appsettings.json       # Production configuration
│   ├── appsettings.Development.json  # Development configuration
│   ├── Dockerfile             # Backend container configuration
│   ├── Program.cs             # Application entry point and configuration
│   └── HomePage-API.csproj    # Project file and dependencies
│
├── Kubernetes/                # Kubernetes deployment manifests
│   ├── HomePageV2Deployment.yaml  # Application deployment configuration
│   └── Nginx-config.yaml         # Nginx ingress configuration
│
├── .dockerignore            # Docker build exclusions
├── .gitignore               # Git version control exclusions
├── HomePage.sln             # Visual Studio solution file
└── README.md                # Project documentation (this file)
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** 22+ and npm 10+
- **.NET 10.0 SDK** or later
- **SQL Server** (LocalDB for development, full instance for production)
- **Git** for version control
- **Docker** (optional, for containerization)
- **Kubernetes** (optional, for orchestration)

### Quick Start

1. **Clone and Setup**
   ```bash
   git clone https://github.com/NinePiece2/HomePage.git
   cd HomePage
   ```

2. **Frontend Setup**
   ```bash
   cd HomePage-UI
   npm install
   # Edit .env.local with your configuration
   npm run dev
   ```
   Frontend available at: http://localhost:3000

3. **Backend Setup** (in a new terminal)
   ```bash
   cd HomePage-API
   dotnet restore
   # Configure appsettings.Development.json
   dotnet ef database update
   dotnet run
   ```
   API available at: http://localhost:5298

4. **Verify Setup**
   - Visit http://localhost:3000 for the frontend
   - Visit http://localhost:5298/swagger for API documentation
   - Test the contact form and project pages

### Development Workflow

```bash
# Start both services simultaneously
cd HomePage-UI
npm run dev-all

# Or start them separately:
# Terminal 1: Frontend
npm run dev

# Terminal 2: Backend
npm run dev-api
```

### Environment Configuration

#### Frontend Environment Variables

Create **HomePage-UI/.env.local**:
```env
# API Configuration
API_BASE_URL=http://localhost:5298

# Optional: Disable Next.js telemetry
NEXT_TELEMETRY_DISABLED=1
```

#### Backend Configuration

Create **HomePage-API/appsettings.Development.json**:
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "HomePageEntities": "Server=(localdb)\\mssqllocaldb;Database=HomePage;Trusted_Connection=true;MultipleActiveResultSets=true"
  },
  "Cors": {
    "AllowedOrigins": [
      "http://localhost:3000"
    ]
  }
}
```

#### Production Configuration Notes

- Use **Kubernetes secrets** for sensitive data
- Configure **SQL Server** connection strings for production
- Set up **Email Service API** credentials for email functionality
- Update **CORS** origins for your production domain

## 🐳 Development with Docker

### Individual Container Commands

**Frontend Container**
```bash
cd HomePage-UI
docker build -t homepage-ui .
docker run -p 3000:3000 homepage-ui
```

**Backend Container**
```bash
cd HomePage-API
docker build -t homepage-api .
docker run -p 8080:8080 homepage-api
```

## ☸️ Kubernetes Deployment

### Deploy to Kubernetes Cluster

```bash
# Create namespace
kubectl create namespace homepage

# Apply Nginx configuration
kubectl apply -f Kubernetes/Nginx-config.yaml

# Deploy application
kubectl apply -f Kubernetes/HomePageV2Deployment.yaml

# Check deployment status
kubectl get pods -n homepage
kubectl get services -n homepage
```

### Kubernetes Resources

The deployment includes:
- **Deployments**: Frontend (3 replicas) and Backend (3 replicas)
- **Services**: LoadBalancer and ClusterIP services
- **ConfigMaps**: Nginx configuration and application settings
- **Secrets**: SSL certificates and sensitive configuration
- **Ingress**: Traffic routing and SSL termination

## 📚 API Documentation

### Authentication
Currently, the API does not require authentication for public endpoints.

### Projects Controller

#### Get All Projects
```http
GET /Projects/GetAll
Accept: application/json
```

**Response:**
```json
[
  {
    "name": "Home Cloud Server",
    "gitHubLink": "https://github.com/NinePiece2/HomeCloudServer",
    "applicationLink": "https://homecloudserver.romitsagu.com/",
    "homePageLink": "/Projects/HomeServer"
  }
]
```

#### Get Specific Project Details
```http
GET /Projects/{ProjectName}
Accept: application/json
```

**Available Project Endpoints:**
- `/Projects/HomeServer` - Home Cloud Server details
- `/Projects/Facegen` - Artiface FaceGen project
- `/Projects/CDN` - Content Delivery Network project
- `/Projects/CacheController` - Cache Controller project
- `/Projects/VGAController` - VGA Controller project
- `/Projects/LanCacheUI` - LanCache UI project
- `/Projects/MRIBrainTumorDetection` - MRI Brain Tumor Detection
- `/Projects/SmartTrafficControlSystem` - Smart Traffic Control System

**Response:**
```json
{
  "projectName": "Home Cloud Server",
  "projectDescription": "Project description",
  "projectGithubLink": "https://github.com/NinePiece2/HomeCloudServer",
  "projectApplicationLink": "https://homecloudserver.romitsagu.com/",
  "projectReadmeContent": "<html>Rendered markdown content</html>"
}
```

### Contact Controller

#### Send Contact Form
```http
POST /Contact/SendContactForm
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "topic": "General Inquiry",
  "message": "Hello, I'm interested in your projects..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

### Error Responses

All endpoints may return these error responses:

```json
{
  "error": "Error message description",
  "status": 400
}
```

**Common HTTP Status Codes:**
- `200` - Success
- `400` - Bad Request
- `404` - Not Found
- `500` - Internal Server Error

## 🔧 Scripts and Commands

### Frontend (HomePage-UI)

```bash
# Development
npm run dev              # Start development server with Turbopack
npm run build           # Build for production
npm run lint            # Run ESLint code analysis

# Cross-service development
npm run dev-api         # Start backend API from UI directory
npm run dev-all         # Start both frontend and backend concurrently

# Docker commands
docker build -t homepage-ui .                    # Build frontend container
docker run -p 3000:3000 homepage-ui             # Run frontend container
```

### Backend (HomePage-API)

```bash
# Development
dotnet run                          # Start development server
dotnet watch run                    # Start with hot reload
dotnet build                        # Build the application
dotnet build --configuration Release  # Build for production

# Database management
dotnet ef migrations add <MigrationName>   # Create new migration
dotnet ef database update                  # Apply pending migrations
dotnet ef migrations remove               # Remove last migration
dotnet ef database drop                   # Drop database (development only)

# Docker commands
docker build -t homepage-api .                   # Build backend container
docker run -p 8080:8080 homepage-api            # Run backend container
```

### Full Stack Development

```bash
# Kubernetes deployment
kubectl apply -f Kubernetes/    # Deploy to Kubernetes
kubectl get pods -n homepage    # Check deployment status
kubectl logs -f deployment/homepage-ui -n homepage  # View logs
```

### Utility Scripts

```bash
# Clean build artifacts
npm run clean && dotnet clean   # Clean all build outputs
```

## 📈 Performance Optimizations

- **Next.js Features**: App Router, Server Components, Image Optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Dynamic imports for heavy components
- **Caching**: API response caching and static asset optimization
- **CDN**: Static assets served through CDN
- **Compression**: Gzip compression for all text assets
- **Database**: Optimized Entity Framework queries with indexing

## 🔒 Security Features

- **HTTPS**: SSL/TLS encryption for all communications
- **CORS**: Properly configured cross-origin resource sharing
- **Data Protection**: ASP.NET Core Data Protection for sensitive data
- **Input Validation**: Server-side validation for all inputs
- **SQL Injection Prevention**: Parameterized queries through Entity Framework
- **XSS Protection**: Content Security Policy and input sanitization

<!-- ## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request -->

---

**Built with ❤️ by [Romit Sagu](https://romitsagu.com)**

*Showcasing modern full-stack development with Next.js, .NET Core, and Kubernetes*
