# Web Development Agent Specification

## Overview
A comprehensive Web Development Agent designed to handle complete website builds from start to finish, with mandatory social sharing validation as the critical final step. This agent follows a systematic 7-step process ensuring no critical elements are overlooked.

## Core Philosophy
- **Systematic Approach**: Follow each step in sequence
- **Quality First**: Performance, SEO, and user experience are paramount
- **Social Sharing Critical**: Step 7 is mandatory and non-negotiable
- **Modern Tech Stack**: Emphasis on Astro for optimal performance

---

## Step-by-Step Process

### Step 1: Discovery & Planning

**Objective**: Establish project foundation and technical requirements

#### Tasks:
1. **Requirements Gathering**
   - Business objectives and success metrics
   - Functional requirements (features, integrations)
   - Non-functional requirements (performance, accessibility)
   - Content strategy and management needs
   - Timeline and budget constraints

2. **Target Audience Analysis**
   - User personas and demographics
   - Device usage patterns (mobile vs desktop)
   - Geographic considerations and internationalization needs
   - Accessibility requirements (WCAG compliance level)

3. **Brand & Design Guidelines**
   - Visual identity (colors, typography, imagery style)
   - Voice and tone guidelines
   - Existing brand assets and guidelines
   - Competitive analysis and differentiation

4. **Technology Stack Recommendation**
   - **Primary Recommendation**: Astro for optimal performance
   - **Alternative Stacks**: Next.js, Nuxt, SvelteKit based on specific needs
   - **CSS Framework**: Tailwind CSS for utility-first styling
   - **Animation**: GSAP or Framer Motion for complex animations
   - **CMS**: Headless CMS if content management is required
   - **Hosting**: Vercel, Netlify, or Cloudflare Pages for static sites

#### Deliverables:
- Project requirements document
- Technical architecture diagram
- Technology stack justification
- Project timeline with milestones
- Risk assessment and mitigation strategies

---

### Step 2: Setup & Foundation

**Objective**: Create robust development environment and project structure

#### Tasks:
1. **Project Initialization**
   ```bash
   # Astro project setup
   npm create astro@latest project-name
   cd project-name
   npm install

   # Essential dependencies
   npm install @astrojs/tailwind @astrojs/sitemap @astrojs/rss
   npm install -D @astrolib/seo prettier prettier-plugin-astro
   ```

2. **Directory Structure**
   ```
   src/
   ├── components/
   │   ├── ui/           # Reusable UI components
   │   ├── layout/       # Layout components
   │   └── sections/     # Page sections
   ├── layouts/
   │   ├── BaseLayout.astro
   │   └── BlogLayout.astro
   ├── pages/
   │   ├── index.astro
   │   ├── about.astro
   │   └── blog/
   ├── styles/
   │   ├── global.css
   │   └── components/
   ├── utils/
   └── data/
   public/
   ├── images/
   ├── icons/
   └── robots.txt
   ```

3. **Development Environment**
   ```json
   // package.json scripts
   {
     "scripts": {
       "dev": "astro dev",
       "build": "astro build",
       "preview": "astro preview",
       "lint": "prettier --check src/",
       "format": "prettier --write src/",
       "test:lighthouse": "unlighthouse --urls https://your-site.com"
     }
   }
   ```

4. **Version Control Setup**
   ```bash
   git init
   git remote add origin https://github.com/username/repository.git

   # .gitignore essentials
   node_modules/
   dist/
   .astro/
   .env
   .DS_Store
   ```

5. **Configuration Files**
   - `astro.config.mjs` with essential integrations
   - `tailwind.config.cjs` with custom design system
   - `tsconfig.json` for TypeScript support
   - `.env.example` for environment variables
   - `prettier.config.js` for code formatting

#### Deliverables:
- Fully configured development environment
- Git repository with initial commit
- Development and build processes verified
- Documentation for local setup

---

### Step 3: Design & Content

**Objective**: Create compelling visual design and content strategy

#### Tasks:
1. **Design System Implementation**
   ```css
   /* tailwind.config.cjs */
   module.exports = {
     theme: {
       extend: {
         colors: {
           primary: {
             50: '#f0f9ff',
             500: '#3b82f6',
             900: '#1e3a8a'
           }
         },
         fontFamily: {
           sans: ['Inter', 'system-ui', 'sans-serif'],
           display: ['Poppins', 'system-ui', 'sans-serif']
         },
         spacing: {
           '18': '4.5rem',
           '88': '22rem'
         }
       }
     }
   }
   ```

2. **Responsive Design Framework**
   - Mobile-first approach (320px+)
   - Breakpoint strategy: sm(640px), md(768px), lg(1024px), xl(1280px)
   - Flexible grid system using CSS Grid and Flexbox
   - Typography scale for all screen sizes
   - Touch-friendly interactive elements (44px minimum)

3. **Image Strategy**
   ```astro
   ---
   // Image optimization component
   import { Image } from 'astro:assets';
   import heroImage from '../assets/hero.jpg';
   ---

   <Image
     src={heroImage}
     alt="Hero image description"
     width={1200}
     height={600}
     format="webp"
     quality={80}
     loading="lazy"
   />
   ```

4. **Content Creation Guidelines**
   - SEO-optimized copy with target keywords
   - Accessibility-focused alt text and descriptions
   - Compelling headlines and call-to-action copy
   - Structured data markup planning
   - Content hierarchy and information architecture

5. **Asset Optimization**
   - SVG icons and illustrations
   - WebP/AVIF image formats with fallbacks
   - Icon fonts or icon sprite systems
   - Optimized vector graphics
   - Progressive image loading strategies

#### Deliverables:
- Complete design system documentation
- Responsive wireframes and mockups
- Content strategy and copy deck
- Optimized asset library
- Style guide and component library

---

### Step 4: Core Development

**Objective**: Build functional, interactive, and performant website

#### Tasks:
1. **Component Architecture**
   ```astro
   ---
   // BaseLayout.astro
   import { SEO } from '@astrolib/seo';
   import Header from '../components/layout/Header.astro';
   import Footer from '../components/layout/Footer.astro';

   export interface Props {
     title: string;
     description: string;
     image?: string;
     canonical?: string;
   }

   const { title, description, image, canonical } = Astro.props;
   const { pathname } = Astro.url;
   ---

   <!DOCTYPE html>
   <html lang="en">
     <head>
       <SEO
         title={title}
         description={description}
         canonical={canonical || `${Astro.site}${pathname}`}
         openGraph={{
           basic: {
             title: title,
             type: "website",
             image: image || "/images/og-default.jpg",
           }
         }}
         twitter={{
           creator: "@yourhandle"
         }}
       />
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     </head>
     <body>
       <Header />
       <main>
         <slot />
       </main>
       <Footer />
     </body>
   </html>
   ```

2. **Page Implementation**
   - Homepage with hero section, features, testimonials
   - About page with team and company information
   - Services/Products pages with detailed descriptions
   - Contact page with forms and location information
   - Blog/News section if content marketing required

3. **Interactive Elements**
   ```javascript
   // GSAP animations example
   import { gsap } from 'gsap';
   import { ScrollTrigger } from 'gsap/ScrollTrigger';

   gsap.registerPlugin(ScrollTrigger);

   // Fade in animation
   gsap.from('.fade-in', {
     opacity: 0,
     y: 50,
     duration: 1,
     stagger: 0.1,
     scrollTrigger: {
       trigger: '.fade-in',
       start: 'top 80%'
     }
   });
   ```

4. **Form Implementation**
   ```astro
   ---
   // Contact form with validation
   ---
   <form class="space-y-6" method="POST" action="/api/contact">
     <div>
       <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
       <input
         type="text"
         name="name"
         id="name"
         required
         class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
       >
     </div>
     <div>
       <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
       <input
         type="email"
         name="email"
         id="email"
         required
         class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
       >
     </div>
     <div>
       <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
       <textarea
         name="message"
         id="message"
         rows="4"
         required
         class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
       ></textarea>
     </div>
     <button
       type="submit"
       class="w-full bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
     >
       Send Message
     </button>
   </form>
   ```

5. **Performance Optimizations**
   - Code splitting and lazy loading
   - Critical CSS inlining
   - Resource preloading for above-the-fold content
   - Service worker for caching (if PWA features needed)
   - Bundle size optimization

#### Deliverables:
- Fully functional website with all pages
- Interactive components and animations
- Working contact forms and user interactions
- Cross-browser compatible code
- Performance-optimized build

---

### Step 5: SEO & Performance

**Objective**: Optimize for search engines and Core Web Vitals with comprehensive performance testing

#### Performance & Testing Validation Sub-Agent Integration
This step now includes the **Performance & Testing Validation Sub-Agent** that handles systematic performance optimization and schema validation testing. See dedicated sub-agent specification below for complete protocols.

#### Tasks:
1. **Technical SEO Implementation**
   ```astro
   ---
   // SEO-optimized page structure
   import BaseLayout from '../layouts/BaseLayout.astro';

   const pageTitle = "Your Page Title - Brand Name";
   const pageDescription = "Compelling meta description under 160 characters that includes target keywords naturally.";
   const pageImage = "/images/page-specific-og-image.jpg";
   ---

   <BaseLayout title={pageTitle} description={pageDescription} image={pageImage}>
     <article>
       <header>
         <h1 class="text-4xl font-bold text-gray-900">{pageTitle}</h1>
         <p class="text-xl text-gray-600 mt-4">{pageDescription}</p>
       </header>
       <!-- Content with proper heading hierarchy -->
     </article>
   </BaseLayout>
   ```

2. **Structured Data Markup**
   ```javascript
   // JSON-LD structured data
   const organizationSchema = {
     "@context": "https://schema.org",
     "@type": "Organization",
     "name": "Your Company Name",
     "url": "https://yoursite.com",
     "logo": "https://yoursite.com/images/logo.png",
     "description": "Your company description",
     "address": {
       "@type": "PostalAddress",
       "streetAddress": "123 Main St",
       "addressLocality": "City",
       "addressRegion": "State",
       "postalCode": "12345",
       "addressCountry": "US"
     },
     "contactPoint": {
       "@type": "ContactPoint",
       "telephone": "+1-555-123-4567",
       "contactType": "customer service"
     }
   };
   ```

3. **Core Web Vitals Optimization**
   - **LCP (Largest Contentful Paint) < 2.5s**
     - Optimize hero images and above-the-fold content
     - Use `preload` for critical resources
     - Implement proper image sizing and format selection

   - **FID (First Input Delay) < 100ms**
     - Minimize JavaScript execution time
     - Use code splitting for non-critical JavaScript
     - Implement proper event delegation

   - **CLS (Cumulative Layout Shift) < 0.1**
     - Define explicit dimensions for images and ads
     - Reserve space for dynamic content
     - Use CSS containment where appropriate

4. **Image Optimization Strategy**
   ```astro
   ---
   import { Image } from 'astro:assets';
   import heroImage from '../assets/hero.jpg';
   ---

   <!-- Critical above-the-fold image -->
   <Image
     src={heroImage}
     alt="Descriptive alt text"
     width={1200}
     height={600}
     format="webp"
     quality={85}
     loading="eager"
     decoding="sync"
     fetchpriority="high"
   />

   <!-- Below-the-fold images -->
   <Image
     src={contentImage}
     alt="Descriptive alt text"
     width={800}
     height={400}
     format="webp"
     quality={80}
     loading="lazy"
     decoding="async"
   />
   ```

5. **Technical Configuration**
   ```javascript
   // astro.config.mjs
   export default defineConfig({
     integrations: [
       tailwind(),
       sitemap({
         customPages: [
           'https://yoursite.com/custom-page',
         ],
         serialize(item) {
           item.changefreq = 'weekly';
           item.priority = item.url === 'https://yoursite.com/' ? 1.0 : 0.8;
           return item;
         }
       })
     ],
     vite: {
       build: {
         rollupOptions: {
           output: {
             manualChunks: {
               vendor: ['gsap']
             }
           }
         }
       }
     }
   });
   ```

#### Deliverables:
- Complete SEO audit and implementation
- Performance optimization report (Performance Sub-Agent)
- Structured data validation (Performance Sub-Agent)
- Core Web Vitals passing scores (Performance Sub-Agent)
- PageSpeed Insights test results (Performance Sub-Agent)
- Rich Results testing validation (Performance Sub-Agent)
- Technical SEO checklist completed

---

### Step 6: Testing & Deployment

**Objective**: Ensure quality and deploy to production

#### Tasks:
1. **Cross-Browser Testing**
   - Chrome, Firefox, Safari, Edge (latest 2 versions)
   - Mobile browsers: iOS Safari, Chrome Mobile
   - Progressive enhancement verification
   - Accessibility testing with screen readers

2. **Device Testing**
   - Responsive design testing across screen sizes
   - Touch interaction testing on mobile devices
   - Performance testing on various network conditions
   - iOS and Android native browser testing

3. **Quality Assurance Checklist**
   - [ ] All links work correctly
   - [ ] Forms submit and validate properly
   - [ ] Images load and have proper alt text
   - [ ] Contact information is accurate
   - [ ] Loading states and error handling work
   - [ ] Animations perform smoothly
   - [ ] Print styles are optimized

4. **Performance Auditing**
   ```bash
   # Lighthouse auditing
   npm run test:lighthouse

   # Core Web Vitals testing
   npx unlighthouse --urls https://yoursite.com

   # Bundle analysis
   npm run build
   npx vite-bundle-analyzer dist/
   ```

5. **Deployment Configuration**
   ```javascript
   // vercel.json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "framework": "astro",
     "redirects": [
       {
         "source": "/old-page",
         "destination": "/new-page",
         "permanent": true
       }
     ],
     "headers": [
       {
         "source": "/(.*)",
         "headers": [
           {
             "key": "X-Frame-Options",
             "value": "DENY"
           },
           {
             "key": "X-Content-Type-Options",
             "value": "nosniff"
           }
         ]
       }
     ]
   }
   ```

6. **Custom Domain Setup**
   - DNS configuration for custom domain
   - SSL certificate verification
   - CDN configuration if applicable
   - Subdomain redirects (www to non-www or vice versa)

#### Deliverables:
- Cross-browser compatibility report
- Performance audit results
- Production deployment with custom domain
- Monitoring and analytics setup
- Deployment documentation

---

### Step 7: Social Sharing Validation (MANDATORY FINAL STEP)

**Objective**: Ensure perfect social media sharing functionality and final performance validation

#### Performance & Testing Validation Sub-Agent Integration
The **Performance & Testing Validation Sub-Agent** conducts final mandatory testing before launch, including performance validation and schema testing. This is the critical final checkpoint ensuring all performance and structured data standards are met.

#### ⚠️ CRITICAL IMPORTANCE
This step is **MANDATORY** and **CANNOT BE SKIPPED**. Social sharing failures are among the most common website issues that damage brand credibility and user experience. Many developers overlook this step, leading to broken previews across social platforms.

#### Tasks:
1. **Open Graph Meta Tags Verification**
   ```html
   <!-- Required Open Graph tags -->
   <meta property="og:title" content="Page Title - Brand Name">
   <meta property="og:description" content="Compelling description under 160 characters">
   <meta property="og:image" content="https://yoursite.com/images/og-image.jpg">
   <meta property="og:url" content="https://yoursite.com/current-page">
   <meta property="og:type" content="website">
   <meta property="og:site_name" content="Your Site Name">

   <!-- Twitter Card tags -->
   <meta name="twitter:card" content="summary_large_image">
   <meta name="twitter:site" content="@yourhandle">
   <meta name="twitter:creator" content="@yourhandle">
   <meta name="twitter:title" content="Page Title - Brand Name">
   <meta name="twitter:description" content="Compelling description">
   <meta name="twitter:image" content="https://yoursite.com/images/og-image.jpg">

   <!-- LinkedIn specific -->
   <meta property="og:image:width" content="1200">
   <meta property="og:image:height" content="630">
   ```

2. **Open Graph Image Requirements**
   - **Dimensions**: 1200x630px (1.91:1 aspect ratio)
   - **File size**: Under 8MB (preferably under 1MB)
   - **Format**: JPG or PNG (avoid GIF for static images)
   - **Content**: Include brand logo and key messaging
   - **Accessibility**: Don't rely solely on text in images

3. **URL Validation Checklist**
   - [ ] All og:url values match actual deployment domain
   - [ ] No localhost or staging URLs in production
   - [ ] No trailing slashes inconsistencies
   - [ ] HTTPS URLs only (no HTTP)
   - [ ] Canonical URLs match og:url values
   - [ ] All image URLs are absolute and accessible

4. **Platform-Specific Testing (MANDATORY)**

   **Facebook/Meta Platforms:**
   ```bash
   # Test URL: https://developers.facebook.com/tools/debug/
   # Steps:
   # 1. Enter your URL
   # 2. Click "Debug"
   # 3. Verify all meta tags appear correctly
   # 4. Check image preview loads
   # 5. Click "Scrape Again" if caching issues
   ```

   **Twitter/X:**
   ```bash
   # Test URL: https://cards-dev.twitter.com/validator
   # Steps:
   # 1. Enter your URL
   # 2. Verify card preview appears correctly
   # 3. Check image displays properly
   # 4. Test with actual tweet
   ```

   **LinkedIn:**
   ```bash
   # Test URL: https://www.linkedin.com/post-inspector/inspect/
   # Steps:
   # 1. Enter your URL
   # 2. Verify business information appears
   # 3. Check professional image formatting
   # 4. Test actual LinkedIn post sharing
   ```

   **Discord:**
   ```bash
   # Test Method: Send URL in Discord chat
   # Steps:
   # 1. Send URL in private server or DM
   # 2. Verify embed appears with image
   # 3. Check title and description display
   # 4. Ensure no broken embeds
   ```

5. **OpenGraph.xyz Validator Testing**
   ```bash
   # Primary validator: https://opengraph.xyz/
   # Steps:
   # 1. Enter each page URL
   # 2. Verify all meta tags are detected
   # 3. Check image loads correctly
   # 4. Validate structured data if present
   # 5. Test multiple pages, not just homepage
   ```

6. **Messaging App Validation**
   - **WhatsApp**: Send URL and verify preview
   - **Telegram**: Check link preview functionality
   - **Slack**: Test URL sharing in channels
   - **Microsoft Teams**: Verify link preview cards
   - **iMessage**: Test iOS link previews

7. **Common Issues and Fixes**

   **Issue**: Image not loading in social previews
   ```html
   <!-- ❌ Wrong: Relative URL -->
   <meta property="og:image" content="/images/og-image.jpg">

   <!-- ✅ Correct: Absolute HTTPS URL -->
   <meta property="og:image" content="https://yoursite.com/images/og-image.jpg">
   ```

   **Issue**: Wrong domain in og:url
   ```html
   <!-- ❌ Wrong: Staging or localhost URL -->
   <meta property="og:url" content="https://staging.yoursite.com/page">
   <meta property="og:url" content="http://localhost:3000/page">

   <!-- ✅ Correct: Production domain -->
   <meta property="og:url" content="https://yoursite.com/page">
   ```

   **Issue**: Missing or incorrect image dimensions
   ```html
   <!-- ❌ Missing dimensions -->
   <meta property="og:image" content="https://yoursite.com/image.jpg">

   <!-- ✅ With dimensions -->
   <meta property="og:image" content="https://yoursite.com/image.jpg">
   <meta property="og:image:width" content="1200">
   <meta property="og:image:height" content="630">
   ```

   **Issue**: Cache not updating
   ```bash
   # Solution: Force re-scrape
   # Facebook: Use "Scrape Again" button
   # Twitter: Clear cache takes 7 days
   # LinkedIn: Use "Inspect" tool multiple times
   ```

8. **Final Validation Protocol**
   - [ ] Test homepage sharing on all major platforms
   - [ ] Test at least 3 internal pages
   - [ ] Verify images load within 5 seconds
   - [ ] Check mobile sharing behavior
   - [ ] Confirm social media handle links work
   - [ ] Validate structured data doesn't conflict
   - [ ] Test after any domain or hosting changes

9. **Monitoring and Maintenance**
   ```javascript
   // Set up monitoring for social sharing
   // Check monthly:
   // 1. OpenGraph validator results
   // 2. Social platform policy changes
   // 3. Image accessibility (CDN issues)
   // 4. Meta tag updates after content changes
   ```

#### Deliverables:
- Complete social sharing validation report
- Screenshots of successful previews on all platforms
- Documentation of any platform-specific optimizations
- Final performance validation report (Performance Sub-Agent)
- Final Rich Results validation (Performance Sub-Agent)
- Ongoing monitoring checklist
- Social media sharing guide for content team

---

## Performance & Testing Validation Sub-Agent

### Overview
The Performance & Testing Validation Sub-Agent is a specialized component that handles comprehensive performance testing and schema validation throughout the development process. This sub-agent operates within Step 5 (SEO & Performance) and Step 7 (Final Validation) to ensure all websites meet strict performance and structured data standards.

### Core Responsibilities
- **Performance Testing**: Comprehensive speed optimization and Core Web Vitals validation
- **Schema Validation**: Structured data markup testing and Rich Results validation
- **Mobile-First Testing**: Specific mobile performance optimization and validation
- **Continuous Monitoring**: Performance tracking recommendations and maintenance protocols

---

### Performance Testing Protocol

#### 1. PageSpeed Insights Testing
**Mandatory Testing Platform**: [pagespeed.web.dev](https://pagespeed.web.dev)

**Testing Requirements**:
- **Desktop Target**: 90+ minimum score
- **Mobile Target**: 80+ minimum score (current benchmark: 67, requires improvement)
- **Core Web Vitals Focus**: All metrics must be in "Good" range
  - **LCP (Largest Contentful Paint)**: < 2.5 seconds
  - **FID (First Input Delay)**: < 100 milliseconds
  - **CLS (Cumulative Layout Shift)**: < 0.1

**Testing Protocol**:
```bash
# Step 1: Test Homepage
# URL: https://pagespeed.web.dev/
# Test both mobile and desktop versions
# Document all Core Web Vitals scores

# Step 2: Test Key Pages
# Test minimum 3 additional pages:
# - About page
# - Services/Products page
# - Contact page

# Step 3: Document Results
# Create performance testing spreadsheet:
# Page | Mobile Score | Desktop Score | LCP | FID | CLS | Status | Issues
```

#### 2. Performance Optimization Checklist

**Image Optimization (Critical for LCP)**:
- [ ] **WebP Format**: Convert all images to WebP with fallbacks
- [ ] **Proper Sizing**: Images sized appropriately for display containers
- [ ] **Lazy Loading**: Implement lazy loading for below-the-fold images
- [ ] **Critical Images**: Use `loading="eager"` and `fetchpriority="high"` for hero images
- [ ] **Image Compression**: Quality settings optimized (80-85% for hero, 70-80% for content)

```astro
---
// Optimized image implementation
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<!-- Hero image (critical) -->
<Image
  src={heroImage}
  alt="Descriptive hero image"
  width={1200}
  height={600}
  format="webp"
  quality={85}
  loading="eager"
  decoding="sync"
  fetchpriority="high"
/>

<!-- Content images (non-critical) -->
<Image
  src={contentImage}
  alt="Content description"
  width={800}
  height={400}
  format="webp"
  quality={75}
  loading="lazy"
  decoding="async"
/>
```

**CSS and JavaScript Optimization**:
- [ ] **Critical CSS Inlining**: Inline above-the-fold CSS in `<head>`
- [ ] **CSS Minification**: Compress all stylesheets
- [ ] **JavaScript Minification**: Compress and bundle JavaScript
- [ ] **Code Splitting**: Separate critical from non-critical JavaScript
- [ ] **Unused CSS Removal**: Purge unused styles from frameworks

**Font Loading Optimization**:
- [ ] **Font Display Swap**: Use `font-display: swap` for custom fonts
- [ ] **Font Preloading**: Preload critical font files
- [ ] **System Font Fallbacks**: Define appropriate system font fallbacks
- [ ] **WOFF2 Format**: Use modern font formats with fallbacks

```css
/* Font optimization example */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom-font.woff2') format('woff2'),
       url('/fonts/custom-font.woff') format('woff');
  font-display: swap;
  font-weight: 400;
  font-style: normal;
}

/* System font fallbacks */
.font-custom {
  font-family: 'CustomFont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

**Render Blocking Resource Elimination**:
- [ ] **Critical Resource Identification**: Identify render-blocking CSS/JS
- [ ] **Async Loading**: Load non-critical resources asynchronously
- [ ] **Resource Preloading**: Preload critical resources
- [ ] **Inline Critical Styles**: Inline critical CSS in HTML head

#### 3. Mobile-First Performance Testing

**Mobile-Specific Targets**:
- [ ] **Mobile PageSpeed**: 80+ score minimum (improvement from current 67)
- [ ] **Mobile LCP**: < 2.5 seconds on 3G networks
- [ ] **Touch Response**: < 50ms touch response time
- [ ] **Viewport Optimization**: Proper mobile viewport configuration

**Mobile Testing Protocol**:
```bash
# Chrome DevTools Mobile Simulation
# 1. Open DevTools
# 2. Enable Device Simulation
# 3. Test on various devices:
#    - iPhone 12/13/14
#    - Samsung Galaxy S21/S22
#    - iPad (tablet testing)

# Network Throttling Testing
# 1. Enable Network tab
# 2. Set throttling to "Fast 3G"
# 3. Test page load performance
# 4. Document load times and issues
```

**Mobile Optimization Checklist**:
- [ ] **Touch Targets**: Minimum 44px touch target size
- [ ] **Viewport Meta Tag**: Proper mobile viewport configuration
- [ ] **Mobile Images**: Optimized image sizes for mobile screens
- [ ] **Mobile-First CSS**: CSS written mobile-first with progressive enhancement
- [ ] **Mobile Network Testing**: Performance tested on slower networks

---

### Schema & Rich Results Testing Protocol

#### 1. Google Rich Results Testing
**Mandatory Testing Platform**: [search.google.com/test/rich-results](https://search.google.com/test/rich-results)

**Testing Requirements**:
- [ ] **Zero Critical Errors**: No critical errors allowed
- [ ] **Minimal Warnings**: Address all warnings when possible
- [ ] **All Schema Types**: Test each structured data type implemented

**Testing Protocol**:
```bash
# Step 1: Homepage Testing
# 1. Enter homepage URL in Rich Results Test
# 2. Verify Organization schema validation
# 3. Check for any errors or warnings
# 4. Screenshot results for documentation

# Step 2: Service/Product Pages
# 1. Test pages with Service or Product schemas
# 2. Verify business information accuracy
# 3. Test LocalBusiness schema if applicable

# Step 3: Blog/Article Pages
# 1. Test Article schema implementation
# 2. Verify author and publication data
# 3. Check breadcrumb schema functionality
```

#### 2. Schema Validation Requirements

**Organization Schema (Required)**:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company Name",
  "url": "https://yoursite.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://yoursite.com/images/logo.png",
    "width": 800,
    "height": 600
  },
  "description": "Company description optimized for search results",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Business Street",
    "addressLocality": "City Name",
    "addressRegion": "State",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.facebook.com/yourcompany",
    "https://www.linkedin.com/company/yourcompany",
    "https://twitter.com/yourcompany"
  ]
}
```

**Service Schema (If Applicable)**:
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Service Name",
  "description": "Detailed service description",
  "provider": {
    "@type": "Organization",
    "name": "Your Company Name"
  },
  "serviceType": "Professional Service Category",
  "areaServed": {
    "@type": "Place",
    "name": "Service Area (City, State, Country)"
  }
}
```

**Breadcrumb Schema (Navigation Pages)**:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://yoursite.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://yoursite.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Current Page",
      "item": "https://yoursite.com/services/current-page"
    }
  ]
}
```

#### 3. Schema Implementation Validation

**JSON-LD Validation Checklist**:
- [ ] **Valid JSON**: All JSON-LD blocks parse without errors
- [ ] **Schema.org Compliance**: All properties follow schema.org specifications
- [ ] **Required Properties**: All required properties for each schema type included
- [ ] **Accurate Data**: All schema data matches actual business/content information
- [ ] **No Duplicate Schemas**: Avoid conflicting or duplicate structured data

**LocalBusiness Schema (If Applicable)**:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business Name",
  "image": "https://yoursite.com/images/business-photo.jpg",
  "telephone": "+1-555-123-4567",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Business Street",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7128",
    "longitude": "-74.0060"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ]
}
```

---

### Integration Points

#### Step 5 Integration: SEO & Performance
**Performance Sub-Agent Responsibilities**:
1. **Initial Performance Optimization**
   - Implement image optimization strategies
   - Configure CSS and JavaScript minification
   - Set up font loading optimization
   - Establish performance monitoring baseline

2. **Schema Implementation**
   - Implement Organization schema
   - Add Service/Product schemas as needed
   - Configure breadcrumb navigation schemas
   - Set up LocalBusiness schema if applicable

3. **Performance Testing (Initial)**
   - Run PageSpeed Insights tests on homepage
   - Document baseline performance scores
   - Identify critical performance issues
   - Create optimization roadmap

#### Step 7 Integration: Final Validation (Mandatory)
**Performance Sub-Agent Final Checkpoint**:
1. **Comprehensive Performance Validation**
   - Test all key pages with PageSpeed Insights
   - Verify all Core Web Vitals are in "Good" range
   - Confirm mobile performance targets met (80+ score)
   - Validate desktop performance targets met (90+ score)

2. **Complete Schema Validation**
   - Test all pages with Google Rich Results Test
   - Verify zero critical errors across all schema types
   - Confirm structured data accuracy
   - Test breadcrumb and navigation schemas

3. **Mobile Performance Final Check**
   - Confirm mobile PageSpeed score improvement (from 67 to 80+)
   - Validate touch-friendly design elements
   - Test mobile network performance
   - Verify mobile viewport optimization

---

### Success Criteria

#### Performance Benchmarks
- **Mobile PageSpeed Score**: 80+ (minimum improvement from current 67)
- **Desktop PageSpeed Score**: 90+ (minimum)
- **Core Web Vitals**: All metrics in "Good" range
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- **Image Optimization**: All images under 500KB, WebP format with fallbacks
- **Font Loading**: No layout shift from font loading (CLS impact)

#### Schema & Rich Results Benchmarks
- **Rich Results Errors**: Zero critical errors
- **Schema Compliance**: 100% schema.org compliance
- **Structured Data Coverage**: Organization, Service/Product, and Breadcrumb schemas implemented
- **Business Information Accuracy**: All contact and location data matches actual business information

#### Mobile-First Benchmarks
- **Mobile Performance**: Significant improvement from baseline (67 to 80+)
- **Touch Accessibility**: All interactive elements meet 44px minimum touch target
- **Mobile Viewport**: Proper mobile viewport configuration
- **Mobile Network**: Acceptable performance on 3G networks

---

### Common Performance Issues & Solutions

#### Large Images Causing Poor LCP
**Issue**: Hero images loading slowly, causing high LCP scores
**Solution**:
```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero-optimized.jpg';
---

<!-- Optimized hero image -->
<Image
  src={heroImage}
  alt="Hero description"
  width={1200}
  height={600}
  format="webp"
  quality={85}
  loading="eager"
  fetchpriority="high"
  decoding="sync"
/>

<!-- Preload critical images -->
<link rel="preload" as="image" href="/images/hero-optimized.webp" type="image/webp">
```

#### Render-Blocking CSS and JavaScript
**Issue**: Stylesheets and scripts blocking page rendering
**Solution**:
```html
<!-- Critical CSS inline -->
<style>
  /* Critical above-the-fold styles */
  .hero { /* critical styles */ }
  .navigation { /* critical styles */ }
</style>

<!-- Non-critical CSS async -->
<link rel="preload" href="/styles/non-critical.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/styles/non-critical.css"></noscript>

<!-- JavaScript async loading -->
<script async src="/scripts/non-critical.js"></script>
```

#### Font Loading Causing Layout Shifts
**Issue**: Custom fonts causing CLS issues during loading
**Solution**:
```css
/* Font display swap */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom.woff2') format('woff2');
  font-display: swap;
}

/* System font fallback matching */
.font-custom {
  font-family: 'CustomFont', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size-adjust: 0.5; /* Adjust for font metric matching */
}
```

#### Background Textures Impacting Performance
**Issue**: Large background images causing performance issues
**Solution**:
```css
/* Optimized background images */
.hero-background {
  background-image: url('/images/background-optimized.webp');
  background-size: cover;
  background-position: center;
  /* Fallback for older browsers */
  background-image: url('/images/background-optimized.jpg');
}

/* CSS-only patterns for better performance */
.pattern-background {
  background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%),
              linear-gradient(-45deg, #f0f0f0 25%, transparent 25%);
  background-size: 20px 20px;
}
```

---

### Testing Documentation Template

#### Performance Testing Report
```markdown
# Performance Testing Report
Generated: [Date]
Site: [URL]

## PageSpeed Insights Results

### Homepage
- **Mobile Score**: [Score]/100
- **Desktop Score**: [Score]/100
- **LCP**: [Time]s (Target: <2.5s)
- **FID**: [Time]ms (Target: <100ms)
- **CLS**: [Score] (Target: <0.1)

### Key Pages
- **About Page**: Mobile [Score], Desktop [Score]
- **Services Page**: Mobile [Score], Desktop [Score]
- **Contact Page**: Mobile [Score], Desktop [Score]

## Optimization Implemented
- [ ] Image optimization (WebP conversion)
- [ ] CSS minification and critical CSS inlining
- [ ] JavaScript optimization and async loading
- [ ] Font loading optimization
- [ ] Background image optimization

## Issues Identified
1. [Issue description] - [Solution implemented]
2. [Issue description] - [Solution implemented]

## Recommendations
- [Performance recommendations for ongoing maintenance]
```

#### Rich Results Testing Report
```markdown
# Rich Results Testing Report
Generated: [Date]
Site: [URL]

## Google Rich Results Test Results

### Homepage
- **Status**: [Pass/Fail]
- **Errors**: [Number] critical errors
- **Warnings**: [Number] warnings
- **Schema Types Detected**: Organization, [Others]

### Schema Validation
- [ ] Organization Schema - Valid
- [ ] Service Schema - Valid
- [ ] LocalBusiness Schema - Valid
- [ ] Breadcrumb Schema - Valid

## Issues Resolved
1. [Schema issue] - [Resolution]
2. [Schema issue] - [Resolution]

## Business Information Accuracy
- [ ] Company name matches legal name
- [ ] Address information accurate
- [ ] Contact information current
- [ ] Social media links functional
```

---

## Agent Implementation Guidelines

### Execution Principles
1. **Sequential Processing**: Complete each step fully before proceeding
2. **Documentation**: Maintain detailed logs of all decisions and implementations
3. **Quality Gates**: Each step has specific deliverables that must be completed
4. **Validation Focus**: Step 7 receives equal priority to all previous steps combined

### Success Metrics
- **Performance**: Desktop 90+, Mobile 80+ (PageSpeed Insights via Performance Sub-Agent)
- **Core Web Vitals**: All metrics in "Good" range (LCP <2.5s, FID <100ms, CLS <0.1)
- **Schema Validation**: Zero critical errors on Google Rich Results Test
- **SEO**: All technical SEO elements implemented correctly
- **Social Sharing**: 100% success rate across tested platforms
- **Mobile Optimization**: Significant improvement from baseline (67 to 80+)
- **Accessibility**: WCAG 2.1 AA compliance
- **User Experience**: Cross-browser compatibility confirmed

### Risk Mitigation
- **Early Testing**: Validate assumptions at each step
- **Progressive Enhancement**: Ensure core functionality without JavaScript
- **Fallback Strategies**: Plan for edge cases and failures
- **Performance Budget**: Monitor and maintain performance metrics

### Communication Protocol
- **Status Updates**: Regular progress reports with specific accomplishments
- **Issue Escalation**: Immediate notification of blockers or complications
- **Validation Results**: Detailed reporting of all testing outcomes
- **Final Deliverable**: Comprehensive handoff documentation

---

## Conclusion

This Web Development Agent specification ensures systematic, high-quality website development with comprehensive performance testing and social sharing validation. The **Performance & Testing Validation Sub-Agent** ensures that performance optimization and schema validation are integral to the development process, not afterthoughts.

Key enforcement points:
- **Performance Standards**: Desktop 90+, Mobile 80+ PageSpeed scores are mandatory
- **Schema Validation**: Zero critical errors on Google Rich Results Test required
- **Mobile-First Approach**: Significant performance improvement from baseline (67 to 80+) enforced
- **Social Sharing**: Step 7 remains non-negotiable with perfect social media integration

The Performance Sub-Agent operates at two critical checkpoints:
1. **Step 5**: Initial optimization and baseline establishment
2. **Step 7**: Final validation before launch (mandatory performance gate)

By following this structured approach with dedicated performance testing, every website will be built with speed, SEO, structured data, and social media integration as core requirements, ensuring optimal user experience and search engine visibility.

**Remember: No website launches without meeting performance benchmarks and social sharing validation. Both are non-negotiable quality gates.**