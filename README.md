
# Zaytrix Corporate Website

A clean, responsive, and professional corporate website for Zaytrix - a multidisciplinary Canadian company offering services in Telecommunications, Digital Technology, and Accounting.

## 🌐 Live Website

Visit the website at: [https://www.zaytrix.com/](https://www.zaytrix.com/)

## 📋 Project Overview

Zaytrix is a comprehensive corporate website built with modern web technologies, designed to establish trust, clearly communicate service offerings, and support business presence verification needs in Canada. The design draws inspiration from high-quality corporate websites with a focus on clean aesthetics, structured layouts, and professional presentation.

## 🎯 Key Features

- **Multi-page Structure**: Home, About, Services, Contact, Careers, and individual service pages
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Professional UI/UX**: Clean design with consistent branding and visual hierarchy
- **Service Showcase**: Detailed presentation of three core service areas
- **Contact Forms**: Professional contact and inquiry forms
- **SEO Optimized**: Semantic HTML and optimized for search engines
- **Canadian Focus**: Tailored for Canadian business requirements and regulations

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router DOM
- **State Management**: TanStack React Query
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **Notifications**: Sonner Toast

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Main navigation
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── services/       # Individual service pages
│   │   ├── Telecom.tsx
│   │   ├── DigitalTechnology.tsx
│   │   └── Accounting.tsx
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   ├── Careers.tsx
│   └── NotFound.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.tsx             # Main app component
└── main.tsx           # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zaytrix-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the website

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Brand Colors
- **Primary Blue**: Used for main branding and CTAs
- **Orange Accent**: Used for highlights and secondary actions
- **Professional Grays**: Used for text and backgrounds
- **Success Green**: Used for accounting services and success states

### Typography
- **Font Family**: Inter (system font fallback)
- **Hierarchy**: Consistent heading weights and sizes
- **Spacing**: Tight letter-spacing for professional appearance

### Layout
- **Hero Sections**: Image-right, content-left layout on desktop
- **Grid System**: Responsive grid layouts with proper breakpoints
- **Cards**: Consistent card design across all sections
- **Spacing**: Uniform padding and margins throughout

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px and above

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for any environment-specific configurations:

```env
VITE_API_URL=your_api_endpoint
VITE_CONTACT_EMAIL=info@zaytrix.com
```

### Tailwind Configuration

The Tailwind configuration is customized with:
- Custom color palette
- Extended spacing scale
- Custom animations
- Responsive breakpoints

## 📄 Pages Overview

1. **Home** - Hero section, services overview, company highlights, and CTAs
2. **About** - Mission, vision, values, and company approach
3. **Services** - Overview of all three service areas with detailed descriptions
4. **Telecommunications** - Detailed telecom services and capabilities
5. **Digital Technology** - Software development and digital transformation services
6. **Accounting** - Professional accounting and financial management services
7. **Contact** - Contact form, business information, and office details
8. **Careers** - Open positions, company culture, and benefits

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy**
   - Automatic deployments on git push
   - Preview deployments for pull requests

### Netlify

1. **Connect your repository to Netlify**
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

3. **Deploy**
   - Automatic deployments on git push

### Other Platforms

The built application in the `dist` folder can be deployed to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Azure Static Web Apps
- Google Cloud Storage

## 🔍 SEO Optimization

- **Meta Tags**: Proper title, description, and Open Graph tags
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Alt Text**: All images include descriptive alt text
- **Performance**: Optimized images and lazy loading
- **Sitemap**: Generate sitemap for search engines

## ♿ Accessibility

- **WCAG 2.1 AA Compliance**: Following accessibility guidelines
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Color Contrast**: Sufficient contrast ratios for all text
- **Focus Management**: Clear focus indicators

## 🧪 Testing

### Run Tests

```bash
npm run test
```

### Linting

```bash
npm run lint
```

### Type Checking

```bash
npm run type-check
```

## 📊 Performance

- **Lighthouse Score**: Optimized for high performance scores
- **Image Optimization**: WebP format with fallbacks
- **Code Splitting**: Automatic code splitting with Vite
- **Lazy Loading**: Images and components loaded on demand

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Ensure responsive design for all changes

## 📞 Support

For questions or support regarding this website:

- **Email**: info@zaytrix.com
- **Website**: [https://www.zaytrix.com/](https://www.zaytrix.com/)

## 📜 License

This project is proprietary software owned by Zaytrix. All rights reserved.

## 🇨🇦 About Zaytrix

Zaytrix is a multidisciplinary Canadian company offering comprehensive services in:

- **Telecommunications**: Advanced infrastructure and connectivity solutions
- **Digital Technology**: Custom software development and digital transformation
- **Accounting**: Professional financial management and compliance services

Founded on principles of trust, innovation, and excellence, Zaytrix serves Canadian businesses with integrated solutions that drive growth and success.

---

**Built with ❤️ in Canada** 🇨🇦
