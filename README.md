# WILDMAC. // Rodney Almeida Advisory Platform

> **"A life built with intention, work grounded in judgment, and capital stewarded for endurance."**

WILDMAC is an executive digital ecosystem and advisory platform designed for author, strategist, and private advisor **Rodney Almeida**. The platform combines high-judgment executive consulting, four published books, strategic knowledge frameworks, transparent engagement models, and humanitarian social sanctuaries in Goa, India.

---

## 🏛️ Platform Architecture & Key Pillars

```
                                 ┌───────────────────────────────┐
                                 │       WILDMAC PLATFORM        │
                                 └──────────────┬────────────────┘
                                                │
         ┌──────────────────┬───────────────────┼───────────────────┬──────────────────┐
         │                  │                   │                   │                  │
┌────────▼────────┐ ┌───────▼────────┐ ┌────────▼────────┐ ┌────────▼────────┐ ┌───────▼────────┐
│ 7 ADVISORY      │ │ 4 PRICING      │ │ 4 PUBLISHED     │ │ CMS & KNOWLEDGE │ │ FUTURE         │
│ DISCIPLINES     │ │ ENGAGEMENT     │ │ BOOKS           │ │ RESOURCES       │ │ PROJECTS       │
│                 │ │ TIERS          │ │                 │ │                 │ │ & SANCTUARIES  │
├─────────────────┤ ├────────────────┤ ├─────────────────┤ ├─────────────────┤ ├────────────────┤
│ • Business      │ │ • Hourly Rate  │ │ • A Letter to   │ │ • Blog Articles │ │ • Cancona      │
│ • Life Coaching │ │   (₹10,000/hr) │ │   My Daughter   │ │   (MongoDB +    │ │   Ashram       │
│ • Real Estate   │ │ • Monthly      │ │ • The Path of   │ │   Cloudinary)   │ │ • Taleigao     │
│ • Investment    │ │   Retainer     │ │   Purpose       │ │ • Downloadable  │ │   Old Age      │
│ • Branding      │ │   (₹10k–₹1L/mo)│ │ • The Sacred    │ │   PDF Guides    │ │   Haven        │
│ • Engineering   │ │ • Project-Based│ │   Path          │ │ • Executive     │ │ • Permaculture │
│ • Wealth Mgmt   │ │   (₹1L–₹5L)    │ │ • Financial     │ │   Admin Suite   │ │   Hub          │
│                 │ │ • 1% Project   │ │   Literacy      │ │                 │ │ • Direct UPI   │
│                 │ │   Capital Cost │ │   (Amazon Links)│ │                 │ │   Donations    │
└─────────────────┘ └────────────────┘ └─────────────────┘ └─────────────────┘ └────────────────┘
```

---

## 🚀 Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16.3.3 (Turbopack)** | High-performance App Router with Hybrid SSG / Server Components |
| **Frontend** | **React 19.2.8** | Modern reactive UI components and state management |
| **Styling** | **Vanilla CSS Design System** | Bespoke typography, HSL palettes, glassmorphism, responsive drawers |
| **Database** | **MongoDB Atlas** | Live cloud database for blogs, resources, metadata, and analytics |
| **Media & Storage** | **Cloudinary CDN** | Global asset hosting for blog imagery, covers, and downloadable PDFs |
| **Icons** | **Lucide React** | Editorial, consistent UI iconography |
| **Deployment** | **Vercel / Node.js** | Production-ready edge deployment |

---

## 📂 Project Directory Structure

```text
wild-mac/
├── app/
│   ├── layout.jsx                      # Global root layout & Google Fonts integration
│   ├── page.jsx                        # Homepage with Hero, Bookshelf, Continuum, & Work
│   ├── about/                          # About Rodney Almeida & Wildmac philosophy
│   ├── services/                       # 7 Comprehensive Practice Disciplines & Rates
│   ├── pricing/                        # 4 Transparent Advisory Pricing Options & FAQs
│   ├── books/                          # Published Books Catalog & Overview
│   │   └── [slug]/                     # Dynamic Book Details & Amazon Purchase Links
│   ├── blog/                           # Public Blog & Articles Archive
│   │   └── [slug]/                     # Full Article Reader with Markdown Rendering
│   ├── resources/                      # Free Downloadable Frameworks, Checklists & PDFs
│   ├── consultation/                   # 3-Step Interactive Booking Engine with Model Selector
│   ├── future-projects/                # Goa Social Sanctuaries (Ashram, Elder Care, Farm)
│   ├── work-with-us/                   # Fellowships, Strategic Alliances & Proposals
│   ├── collaboration/                  # Joint Ventures & Partnership Tracks
│   ├── contact/                        # Direct Desk & Inquiry Dispatch
│   ├── donate/                         # Social Sanctuary Contributions (UPI & Wire)
│   ├── faq/                            # Categorized, Searchable FAQ System
│   ├── admin/                          # Executive Admin Suite
│   │   ├── login/                      # Secure Admin Authentication
│   │   ├── (dashboard)/
│   │   │   ├── page.jsx                # Executive Overview & Metric Tiles
│   │   │   ├── blogs/                  # Article Management & List
│   │   │   │   └── editor/             # Rich Markdown Blog Composer & Cover Uploader
│   │   │   ├── resources/              # Downloadable Resource Manager
│   │   │   │   └── editor/             # Resource Builder & PDF Uploader
│   │   │   └── settings/               # Database Diagnostics & Security
│   └── api/
│       ├── admin/auth/                 # Session verification & authentication
│       ├── admin/upload/               # Cloudinary stream uploader with local fallback
│       ├── blogs/                      # Public & Admin Blog REST API
│       └── resources/                  # Public & Admin Resource REST API
├── components/
│   ├── Navbar.jsx                      # Desktop Dropdowns & Mobile Slide-Out Drawer
│   ├── Footer.jsx                      # Quick Links & Practice Overview
│   ├── ConsultationFlow.jsx            # 3-Step Booking Form (Service, Schedule, Model)
│   ├── FeaturedBooksSection.jsx        # Homepage Editorial Bookshelf
│   ├── ServicesContinuum.jsx           # Interactive Discipline Explorer
│   ├── MajorConsultationCTA.jsx        # Universal Strategic Callout
│   ├── LionLogo.jsx                    # Bespoke Vector Crest & Brand Mark
│   └── WhatsAppIcon.jsx                # Floating & Inline Direct Communication Link
├── data/
│   ├── about.js                        # Profile & Timeline Data
│   ├── books.js                        # Book Catalog & Verified Amazon India URLs
│   ├── journal.js                      # Default Article Manifest
│   ├── resources.js                    # Default Framework & Download Manifest
│   └── services.js                     # 7 Advisory Disciplines Specifications
├── lib/
│   ├── auth.js                         # Admin JWT/Cookie Session Management
│   ├── cloudinary.js                   # Cloudinary SDK Configuration & Streaming
│   └── db/
│       ├── index.js                    # Atomic Database Controller & Fallbacks
│       └── mongodb.js                  # MongoClient Connection Pool
├── public/
│   └── images/                         # Editorial Photography & High-Res Covers
├── styles/
│   └── globals.css                     # Global Design Tokens, Typography, & CSS Variables
├── .env.example                        # Environment Template (Safe for version control)
├── .env.local                          # Private Environment Credentials (Git-Ignored)
└── package.json                        # Dependencies & Scripts
```

---

## ⚙️ Environment Variables Setup

Create a `.env.local` file in the root of the project:

```env
# =================================================================
# 1. LIVE CLOUD DATABASE (MongoDB Atlas)
# =================================================================
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.whqv2nx.mongodb.net/wildmac_db?retryWrites=true&w=majority&appName=Cluster0
MONGODB_DB=wildmac_db

# =================================================================
# 2. ADMIN AUTHENTICATION & SECURITY
# =================================================================
ADMIN_EMAIL=admin@wildmac.com
ADMIN_PASSWORD=Wildmac@2026!Admin
SESSION_SECRET=your_super_secret_session_salt_2026

# =================================================================
# 3. CLOUDINARY GLOBAL CDN MEDIA STORAGE
# =================================================================
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=vm1uc77k
CLOUDINARY_CLOUD_NAME=vm1uc77k
CLOUDINARY_API_KEY=355876831633538
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

> [!IMPORTANT]
> Never commit `.env.local` to Git. It is strictly excluded in `.gitignore`.

---

## 🛠️ Getting Started & Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Turbopack compiles all static and dynamic routes.

### 4. Start Production Server
```bash
npm run start
```

---

## 🔒 Admin Executive Suite

Access the administrative control center at:
- **URL**: `/admin/login`
- **Default Email**: `admin@wildmac.com`
- **Default Password**: `Wildmac@2026!Admin`

### Capabilities:
- **Blog Articles**: Create, edit, publish/draft, upload Cloudinary cover images, and format in Markdown.
- **Knowledge Resources**: Upload PDF templates and manage public download tracking.
- **Cloudinary Integration**: Direct streaming with automatic fallback to local disk storage.
- **Database Status**: Live ping and collection diagnostics.

---

## 📚 Official Amazon India Book Links

All 4 published titles are connected to their verified Amazon India acquisition pages:

1. **A Letter To My Daughter** — [`https://amzn.in/d/04fxYCJL`](https://amzn.in/d/04fxYCJL)
2. **The Path Of Purpose** — [`https://amzn.in/d/0gJXhoXy`](https://amzn.in/d/0gJXhoXy)
3. **The Sacred Path** — [`https://amzn.in/d/0aeqZD6T`](https://amzn.in/d/0aeqZD6T)
4. **Financial Literacy** — [`https://amzn.in/d/03wu04mh`](https://amzn.in/d/03wu04mh)

---

## 💳 Advisory Pricing Architecture

1. **Hourly Rate**: ₹10,000 / hour *(Single 1-on-1 strategy deep-dives)*
2. **Monthly Retainer**: ₹10,000 – ₹1,00,000 / month *(Continuous ongoing counsel & WhatsApp access)*
3. **Project-Based**: ₹1,00,000 – ₹5,00,000 *(Discrete roadmaps, turnarounds, & blueprints)*
4. **Percentage-Based**: 1% of total project cost *(Large-scale capital builds & infrastructure)*

---

## 🌿 Future Projects in Goa

1. **Ashram Sanctuary (Cancona)**: Contemplative study, silent meditation, and philosophical residency.
2. **Old Age Haven (Taleigao)**: Dignified elder care and community living.
3. **Permaculture Hub (Caranzalem)**: Organic farming, youth self-reliance, and sustainable agriculture.

---

## 📄 License & Intellectual Property

Copyright © 2024–2026 Rodney Almeida & Wild Mac Press. All rights reserved.
Unpublished proprietary advisory frameworks, manuscripts, and architectural blueprints are protected under international copyright law.
