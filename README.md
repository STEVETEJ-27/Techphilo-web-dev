# TechPhilo (TPLander) — Futuristic EdTech SaaS & Scrollytelling Platform

**TechPhilo** is a multi-page EdTech SaaS platform designed to transform STEM, AI, and Robotics education for schools, educators, and students.

It features a modern UI architecture powered by **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and an Apple-style **Interactive Scrollytelling Canvas** that renders preloaded frame image sequences mapped smoothly to user scrolling.

---

## Key Features & Highlights

- 🎬 **Interactive Scrollytelling Canvas**: Locked 600vh scroll container rendering a 300-frame preloaded image sequence (`StoryScrollCanvas.tsx`) with frame interpolation and dynamic HUD text overlays (`StoryExperience.tsx`).
- ⚡ **Modern Stack**: Built with Next.js 16 (App Router & Turbopack), React 19, Tailwind CSS v4, and Framer Motion.
- 📜 **Physics Smooth Scroll**: Integrated `@studio-freight/lenis` smooth wheel scroll engine.
- 🏫 **School & B2B Solutions**: Detailed implementation roadmaps, NEP 2020 alignment features, teacher training pillars, and school pricing tiers.
- 🎓 **Student Experience**: Interactive Explorer Passport, Grand Expo showcases, real-world project galleries, and skill badging systems.
- 📚 **Course Catalog**: Filterable course catalog with category sorting, difficulty levels, and dynamic course detail views.
- 🧭 **Multi-Page Architecture**: 21 prerendered App Router routes with glassmorphism sticky navigation and responsive mega-menus.

---

## Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16** | App Router framework with Turbopack bundler |
| **React 19** | Component library and client state |
| **Tailwind CSS v4** | Utility-first styling with `@tailwindcss/postcss` |
| **Framer Motion 12** | Scroll transforms, layout animations, and entrance effects |
| **Lenis Scroll** | Physics-based smooth scrolling engine |
| **Lucide React** | Modern outline iconography |
| **TypeScript 5** | Strict static type checking |

---

## Getting Started & How to Run

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.17 or newer) installed.

### 1. Navigate to Project Directory

If starting from the workspace root:
```bash
cd TPLander
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Extract Story Sequence Images

For the Interactive Scrollytelling Canvas to work correctly, you must extract the preloaded frame images:
1. Locate the `public/images/story-sequence.zip` file included in this repository.
2. Extract its contents directly into the `public/images/story-sequence/` directory.
*(Ensure the images are placed directly in the folder, not inside another nested folder).*

### 4. Run Development Server

Launch the Next.js development server:
```bash
npm run dev
```

Open your browser and navigate to **`http://localhost:3000`**.

### 4. Build for Production

To create a production bundle and run static prerendering:
```bash
npm run build
```

To start the production server after building:
```bash
npm start
```

---

## Directory Structure

```text
TPLander/
├── app/                          # Next.js 16 App Router Routes
│   ├── layout.tsx                # Root layout (Fonts, Lenis Provider, Navbar, Footer)
│   ├── globals.css               # Global Tailwind CSS v4 & TechPhilo Design Tokens
│   ├── page.tsx                  # Home page (Scrollytelling Canvas + TechPhilo Sections)
│   ├── courses/                  # Course catalog & dynamic [slug] details
│   ├── schools/                  # School solutions, implementation, and pricing
│   ├── teachers/                 # Educator support & teaching tools
│   ├── students/                 # Student learning journey, certificates, projects
│   ├── about/                    # Company story & leadership team
│   ├── resources/                # Resource hub, blog, events, downloads
│   ├── contact/                  # Contact form & channels
│   ├── login/                    # Platform authentication portal
│   └── book-demo/                # School demo booking form
│
├── public/                       # Static Assets & Public Files
│   └── images/
│       └── story-sequence/       # 300 JPG preloaded frame images for scrollytelling
│
├── src/                          # Application Logic & Components
│   ├── components/               # UI components (StoryScrollCanvas, Navbar, Footer, etc.)
│   ├── views/                    # View pages and layout sections
│   ├── data/                     # Data stores (storyData.ts, courses.ts)
│   ├── lib/                      # Utilities (utils.ts, cn, clampValue, phaseProgress)
│   └── router.tsx                # Next.js navigation wrapper
│
├── next.config.ts                # Next.js configuration
├── postcss.config.mjs            # PostCSS configuration for Tailwind CSS v4
├── tsconfig.json                 # TypeScript compiler configuration
└── package.json                  # Dependencies and scripts
```

---

## Site Route Map (21 Pages)

| Route Path | Page Description |
| :--- | :--- |
| `/` | **Home**: Scrollytelling Canvas Hero + Ecosystem Overview |
| `/courses` | **Courses Catalog**: Filterable course grid |
| `/courses/:slug` | **Course Detail**: Individual course curriculum & specs |
| `/schools` | **Schools Solution**: Overview & NEP 2020 alignment |
| `/schools/implementation` | **5-Step Rollout**: School onboarding journey |
| `/schools/pricing` | **Pricing Tiers**: Custom quote & school plans |
| `/teachers` | **Teacher Pillars**: Support, training, and resources |
| `/teachers/tools` | **Teacher Tools**: Lesson plans & dashboard preview |
| `/students` | **Student Journey**: Learning ecosystem & skill growth |
| `/students/certificates` | **Explorer Passport**: Badges & credentials |
| `/students/projects` | **Project Showcase**: Student innovation gallery |
| `/about` | **About TechPhilo**: Vision, mission & values |
| `/about/team` | **Team**: Leadership & team bios |
| `/resources` | **Resource Hub**: FAQs & central resources |
| `/resources/blog` | **Blog**: Educational articles & news |
| `/resources/events` | **Events**: Workshops & Grand Expo schedules |
| `/resources/downloads` | **Brochure Downloads**: PDF guides & brochures |
| `/contact` | **Contact**: Communication form & location channels |
| `/login` | **Login Portal**: Front-end auth experience |
| `/book-demo` | **Book Demo**: Interactive demo request form |
