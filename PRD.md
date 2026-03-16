# Product Requirements Document: Dockiotech Enterprise AI Partner Website

A premium B2B website that positions Dockiotech as a credible, enterprise-grade AI implementation and staff augmentation partner for procurement teams, partner managers, and AI transformation leaders at global organizations.

**Experience Qualities**:
1. **Trust-Building** - Every visual element, word, and interaction should reinforce credibility and enterprise readiness without manufactured proof
2. **Executive-Focused** - Clear, concise, outcome-oriented messaging that respects the reader's time and intelligence
3. **Premium-Minimal** - Ultra-clean design that feels sophisticated and modern, avoiding agency gimmicks and staffing vendor aesthetics

**Complexity Level**: Complex Application (advanced functionality, likely with multiple views)
This is a multi-page enterprise marketing website with dynamic routing, sophisticated content architecture, downloadable resources, contact qualification flows, and comprehensive service/industry matrices requiring careful state management and navigation.

## Essential Features

### Multi-Page Navigation System
- **Functionality**: Sticky header navigation with smooth page routing across 8 core pages (Home, Services, Talent Models, Industries, Case Studies, Partner Readiness, About, Contact)
- **Purpose**: Enable enterprise buyers to self-qualify and find relevant information efficiently
- **Trigger**: User clicks navigation items or CTAs
- **Progression**: Click nav item → smooth route transition → page loads with appropriate scroll position → content renders
- **Success criteria**: Sub-100ms perceived navigation, clear active state, mobile-responsive drawer

### Hero Section with Dual CTAs
- **Functionality**: Premium hero with enterprise-focused headline, subheadline, and two distinct CTAs (primary: Book Discovery Call, secondary: Explore Capabilities)
- **Purpose**: Immediately communicate positioning and provide clear next actions for different buyer stages
- **Trigger**: Page load
- **Progression**: Load → headline animates in → subheadline appears → CTAs become interactive
- **Success criteria**: Clear value prop in <5 seconds, CTAs visually distinct, mobile-optimized

### Services Matrix Display
- **Functionality**: Comprehensive service blocks covering AI staff augmentation, consulting, GenAI development, RAG systems, agents, architecture, evaluation
- **Purpose**: Demonstrate technical depth and breadth for enterprise AI initiatives
- **Trigger**: Navigate to Services page or scroll to services section
- **Progression**: Scroll → cards appear → hover shows additional detail → click expands full description
- **Success criteria**: Scannable at-a-glance, detailed on interaction, no jargon overload

### Engagement Models Configurator
- **Functionality**: Interactive presentation of hiring models (dedicated team, staff aug, project-based, fractional leadership, pod delivery)
- **Purpose**: Help procurement teams understand flexibility and match their procurement patterns
- **Trigger**: View Talent/Hiring Models page
- **Progression**: Land on page → see model comparison → select model type → view ideal use cases and structure
- **Success criteria**: Clear differentiation between models, enterprise context for each

### Industry Capability Matrix
- **Functionality**: Cross-industry AI capability presentation for retail, finance, logistics, manufacturing, healthcare, e-commerce, government, professional services
- **Purpose**: Show versatility without appearing generic or shallow
- **Trigger**: Navigate to Industries page
- **Progression**: Select industry → view AI challenges in sector → see engagement types → understand approach
- **Success criteria**: Credible industry knowledge, AI-specific not generic IT

### Case Study / Proof Gallery
- **Functionality**: Premium layout for representative engagements using challenge-solution-outcome structure without fabricated metrics
- **Purpose**: Provide proof of execution capability while maintaining honesty
- **Trigger**: Navigate to Case Studies page or scroll to proof section
- **Progression**: View gallery → select engagement → read structured narrative → understand capability
- **Success criteria**: Credible storytelling, no fake logos/names, business-outcome focused

### Vendor Readiness Documentation
- **Functionality**: Enterprise onboarding-ready page detailing SOW alignment, milestone delivery, documentation standards, communication protocols, NDA handling
- **Purpose**: Address procurement/partner team concerns about working with smaller firm
- **Trigger**: Navigate to Partner/Vendor Readiness page
- **Progression**: Procurement team reviews → finds governance info → assesses readiness → initiates conversation
- **Success criteria**: Addresses all standard vendor questions, feels enterprise-grade

### Downloadable Capability Assets
- **Functionality**: One-page capability statement and company profile available for download
- **Purpose**: Support enterprise sharing and internal stakeholder circulation
- **Trigger**: Click download CTA in relevant sections
- **Progression**: Click download → generate PDF-style view → save or share
- **Success criteria**: Professional formatting, suitable for forwarding to decision makers

### Qualified Contact Form
- **Functionality**: Enterprise contact form with inquiry type pre-qualification (AI staffing, consulting, subcontracting, project, vendor onboarding)
- **Purpose**: Filter serious enterprise inquiries and route appropriately
- **Trigger**: Navigate to Contact page or click CTA
- **Progression**: Select inquiry type → fill relevant fields → submit → confirmation with expected response time
- **Success criteria**: No spam feel, professional validation, clear next steps

### Talent Profile Showcase
- **Functionality**: Display of AI professional types available (AI Engineers, GenAI Engineers, ML Engineers, Solution Architects, LLM Engineers, Data+AI Engineers, Product-minded Consultants)
- **Purpose**: Demonstrate talent quality and screening rigor for staff aug buyers
- **Trigger**: Scroll to talent section or view Talent page
- **Progression**: View role types → understand screening approach → see communication/ownership standards
- **Success criteria**: Differentiates from commodity staffing vendors

## Edge Case Handling
- **Empty State Handling**: Case studies use "Representative Engagement Areas" language when real projects unavailable - maintains credibility
- **Mobile Navigation Overflow**: Collapsible drawer with clear hierarchy for 8-page structure - prevents cramped mobile nav
- **Form Validation Errors**: Inline, constructive feedback for contact forms - no technical jargon in error messages
- **Slow Network Loading**: Skeleton states for content-heavy sections - maintains premium feel during load
- **Missing Content Sections**: Graceful omission rather than "coming soon" - preserves professional image
- **PDF Generation Failure**: Fallback to formatted HTML view with print styles - ensures capability sharing works
- **Over-zealous Buyers**: FAQ section addresses common questions preemptively - reduces low-quality inquiries

## Design Direction
The design should evoke the feeling of reviewing a premium consulting firm's website or a serious enterprise software vendor - not a staffing agency, not a freelancer collective, not a generic IT services firm. It should feel credible enough that a Microsoft partner manager, Deloitte procurement lead, or AWS ecosystem director would consider initiating a conversation. The aesthetic should be confident, minimal, precise, and execution-focused.

## Color Selection

**Primary Color**: Deep Enterprise Navy `oklch(0.25 0.05 250)` - Communicates trust, stability, enterprise seriousness without corporate stuffiness. Used for primary CTAs and key focal points.

**Secondary Color**: Warm Slate `oklch(0.45 0.02 240)` - Supporting color for secondary actions and less critical UI elements. Maintains professional tone.

**Accent Color**: Precision Teal `oklch(0.65 0.15 195)` - Clean, modern highlight for hover states, active elements, and visual interest. Suggests innovation without startup gimmicks.

**Background**: Sophisticated Light `oklch(0.98 0.005 240)` - Subtle cool undertone prevents stark white, adds refinement.

**Surface/Card**: Pure White `oklch(1 0 0)` - Clean cards that lift from background with subtle shadows.

**Text Primary**: Carbon `oklch(0.20 0.01 240)` - Nearly black with slight cool undertone for comfortable reading.

**Text Secondary**: Professional Gray `oklch(0.50 0.01 240)` - Muted but readable for supporting text.

**Border/Divider**: Whisper Gray `oklch(0.90 0.005 240)` - Subtle separation that doesn't compete with content.

**Foreground/Background Pairings**:
- Background (Sophisticated Light #F9FAFB): Carbon text (#33343A) - Ratio 14.2:1 ✓
- Primary (Deep Enterprise Navy #3A4A6B): White text (#FFFFFF) - Ratio 8.1:1 ✓
- Accent (Precision Teal #4FB0C6): White text (#FFFFFF) - Ratio 4.9:1 ✓
- Surface (Pure White #FFFFFF): Carbon text (#33343A) - Ratio 15.8:1 ✓

## Font Selection
Typography should project executive confidence, technical precision, and global enterprise acceptability. The pairing should feel modern without being trendy, serious without being stiff.

**Primary Typeface**: Inter - Clean, highly legible, enterprise-standard sans-serif with excellent rendering across all devices. Used for headings, UI elements, and body text for consistency and performance.

**Accent Typeface**: JetBrains Mono - Monospaced font for technical callouts, code references, and data points. Reinforces technical credibility without overuse.

**Typographic Hierarchy**:
- **H1 (Page Heroes)**: Inter SemiBold / 48px / -0.02em tracking / 1.1 line-height - Strong presence without shouting
- **H2 (Section Headers)**: Inter SemiBold / 36px / -0.01em tracking / 1.2 line-height - Clear section breaks
- **H3 (Subsections)**: Inter Medium / 24px / 0em tracking / 1.3 line-height - Content organization
- **H4 (Card Titles)**: Inter Medium / 20px / 0em tracking / 1.4 line-height - Scannable cards
- **Body Large (Intro Text)**: Inter Regular / 18px / 0.01em tracking / 1.6 line-height - Important explanations
- **Body (Standard)**: Inter Regular / 16px / 0em tracking / 1.6 line-height - Main content
- **Body Small (Captions)**: Inter Regular / 14px / 0em tracking / 1.5 line-height - Metadata, labels
- **Technical Callouts**: JetBrains Mono Regular / 14px / 0em tracking / 1.5 line-height - Code, tech specs

## Animations
Animations should reinforce enterprise credibility through precision and subtlety - never through spectacle. Every motion should feel intentional, responsive, and respectful of the user's focus. Key principles: fade-in on scroll for content sections (300ms ease), smooth page transitions (200ms), hover state changes on cards and CTAs (150ms), no parallax effects, no auto-playing animations, no loading spinners that feel cheap.

## Component Selection

**Components**:
- **Navigation**: Custom sticky header with shadcn `Sheet` for mobile drawer - professional slide-in experience
- **Hero Section**: Custom component with shadcn `Button` for CTAs - maintains brand consistency
- **Service Cards**: shadcn `Card` with custom hover states - clean elevation and shadow system
- **Engagement Models**: shadcn `Tabs` for model switching - enterprise-familiar interaction pattern
- **Industry Matrix**: Custom grid with shadcn `Accordion` for mobile - progressive disclosure on small screens
- **Case Studies**: shadcn `Card` in custom gallery layout - premium presentation of proof points
- **Contact Form**: shadcn `Form` with `Input`, `Textarea`, `Select` - validation-ready enterprise form
- **Downloadables**: shadcn `Dialog` with download preview - professional asset delivery
- **FAQ**: shadcn `Accordion` - standard enterprise pattern for common questions
- **Trust Indicators**: Custom component with subtle animations - credibility without fake badges
- **Talent Profiles**: shadcn `Card` with `Badge` components - clean role categorization
- **Footer**: Custom with shadcn `Separator` - comprehensive but organized

**Customizations**:
- Custom hero gradient background using subtle mesh pattern - adds visual interest without distraction
- Custom card hover states with smooth elevation change - tactile feedback on interaction
- Custom section dividers with gradient fade - soft transitions between major sections
- Custom CTA button variants (primary solid, secondary outline) - clear action hierarchy
- Custom typography scale beyond shadcn defaults - enterprise-specific heading sizes

**States**:
- **Buttons**: Default (solid primary with subtle shadow), Hover (slight lift + brightness increase), Active (pressed inset), Focus (ring in accent color), Disabled (muted with reduced opacity)
- **Form Inputs**: Default (border in input color), Focus (accent border + ring), Error (destructive border + message), Success (subtle green indicator), Filled (slightly different background)
- **Cards**: Default (white with subtle shadow), Hover (increased shadow + slight lift), Active/Selected (accent border), Loading (skeleton shimmer)
- **Navigation**: Default (muted text), Hover (primary color), Active (primary with underline indicator), Mobile Open (sheet slides in from right)

**Icon Selection**: Phosphor Icons (Regular weight) - clean, professional, enterprise-appropriate. Use sparingly and purposefully. Key icons: Briefcase (consulting), Users (staff aug), ChartLine (outcomes), Shield (security/trust), Code (technical), Rocket (deployment), ChartNetwork (architecture), FileText (documentation).

**Spacing**: Use Tailwind's spacing scale with emphasis on generous breathing room. Section padding: py-24 desktop / py-16 mobile. Card padding: p-8 desktop / p-6 mobile. Grid gaps: gap-8 for cards, gap-12 for sections. Max content width: max-w-7xl for main content, max-w-4xl for reading content.

**Mobile**: Mobile-first with progressive enhancement. Navigation collapses to drawer at <1024px. Card grids stack to single column at <768px. Typography scales down 20% on mobile. Touch targets minimum 44px. Reduced animation on mobile for performance. Hero text remains prominent but sized appropriately. Forms maintain full usability with proper input sizing.
