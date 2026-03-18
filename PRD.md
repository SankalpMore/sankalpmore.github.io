# Product Requirements Document: Dockiotech Enterprise AI Partner Website

A premium B2B website positioning Dockiotech as a credible, enterprise-grade AI implementation boutique and technical partnership firm for procurement teams, partner managers, and AI transformation leaders at global organizations.

## Latest Updates (Current Iteration)
- Enhanced hero section with improved animations and gradient overlays
- Added comprehensive FAQ section addressing common procurement questions
- Implemented downloadable capability statement functionality
- Upgraded card hover states with smooth transitions and elevation effects
- Improved trust strip section with interactive icon animations
- Enhanced CTA buttons with shadow effects and micro-interactions
- Added visual polish throughout with better spacing and typography hierarchy

**Experience Qualities**:
1. **Premium Judgment** - Every design decision, word choice, and interaction reflects the discernment expected of a serious technical partner—nothing feels mass-market or generic
2. **Executive-Focused** - Precise, substantive communication that respects senior stakeholder intelligence. No startup fluff, no agency gimmicks, no exaggerated claims
3. **Technical Depth** - Demonstrated expertise through judicious technical detail and clear domain knowledge without overwhelming or dumbing down

**Complexity Level**: Complex Application (advanced functionality, likely with multiple views)
This is a multi-page enterprise marketing website with dynamic routing, sophisticated content architecture, downloadable resources, contact qualification flows, and comprehensive service/industry matrices requiring careful state management and navigation. The positioning demands precision across all touchpoints to establish trust with enterprise buyers.

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
The design should evoke the feeling of reviewing a premium technical consultancy or specialized AI implementation boutique—not a staffing agency, not a freelancer collective, not a generic IT services firm. Think of the visual and tonal sophistication expected by:
- Microsoft or AWS partner program managers evaluating new ecosystem members
- Deloitte or Accenture procurement leads assessing subcontractors
- Fortune 500 CTOs considering technical partnerships
- PE-backed software companies evaluating AI implementation partners

The aesthetic must be confident, minimal, precise, execution-focused, and technically credible. It should communicate "serious judgment" through restraint, hierarchy, typography, and language precision.

## Color Selection

**Design Philosophy**: A restrained, sophisticated palette that communicates technical seriousness and enterprise maturity. Colors are muted, intentional, and never loud. The palette should feel closer to a Bloomberg Terminal or serious SaaS product than a marketing agency.

**Primary Color**: Deep Enterprise Navy `oklch(0.22 0.04 250)` - Darker, more subdued than typical "safe blues." Communicates gravity, technical depth, and enterprise seriousness. Used sparingly for primary CTAs and key anchors.

**Secondary Color**: Refined Slate `oklch(0.42 0.015 245)` - Muted, sophisticated secondary for less critical UI elements. Maintains professional restraint.

**Accent Color**: Intelligent Teal `oklch(0.58 0.12 200)` - Purposeful highlight suggesting AI/technology without being trendy or playful. Used for hover states, active elements, and strategic visual punctuation.

**Background**: Sophisticated Cool White `oklch(0.985 0.002 240)` - Nearly white with the slightest cool undertone. Creates breathing room without stark clinical feel.

**Surface/Card**: Pure White `oklch(1 0 0)` - Clean elevation from background with subtle shadows, never harsh borders.

**Text Primary**: Technical Charcoal `oklch(0.18 0.008 250)` - Nearly black with slight cool cast. Serious, readable, not overly stark.

**Text Secondary**: Professional Gray `oklch(0.48 0.008 245)` - Muted but still readable for supporting text. Allows hierarchy without weakness.

**Border/Divider**: Whisper Gray `oklch(0.92 0.003 240)` - Extremely subtle separation that doesn't compete with content.

**Foreground/Background Pairings**:
- Background (Sophisticated Cool White): Technical Charcoal text - Ratio 15.2:1 ✓
- Primary (Deep Enterprise Navy): Pure White text - Ratio 9.8:1 ✓  
- Accent (Intelligent Teal): Pure White text - Ratio 5.2:1 ✓
- Surface (Pure White): Technical Charcoal text - Ratio 16.1:1 ✓

All pairings exceed WCAG AAA standards for maximum readability and accessibility.

## Font Selection
Typography should project executive confidence, technical precision, and global enterprise acceptability. The pairing should feel authoritative without being corporate, modern without being trendy, technical without being cold.

**Primary Typeface**: Inter - Ultra-clean, highly legible sans-serif with excellent rendering across all devices and operating systems. Its neutral professionalism makes it acceptable in any enterprise context. Used for all headings, UI elements, and body text for typographic consistency and performance. Enables OpenType features (cv02, cv03, cv04, cv11) for refined character alternates.

**Technical Accent**: IBM Plex Mono - Professional monospaced font for code snippets, technical callouts, data points, and system identifiers. More refined than standard programmer fonts, maintains seriousness. Used sparingly for intentional effect.

**Typographic Hierarchy**:
- **H1 (Hero Headlines)**: Inter SemiBold / 48-60px / -0.02em tracking / 1.1 line-height - Commanding presence, tight leading for impact
- **H2 (Major Section Headers)**: Inter SemiBold / 36-48px / -0.01em tracking / 1.2 line-height - Clear hierarchical breaks
- **H3 (Subsection Titles)**: Inter Semibold / 20-24px / -0.005em tracking / 1.3 line-height - Card and component headers
- **H4 (Content Blocks)**: Inter Semibold / 15-17px / 0em tracking / 1.4 line-height - In-content emphasis
- **Body Large (Introductory)**: Inter Regular / 18-20px / 0em tracking / 1.6 line-height - Section introductions
- **Body (Standard Content)**: Inter Regular / 15-16px / 0em tracking / 1.6 line-height - Primary reading text
- **Body Small (Supporting)**: Inter Regular / 13-14px / 0em tracking / 1.5 line-height - Captions, labels, metadata
- **Technical Callouts**: IBM Plex Mono Regular / 13-14px / 0.02em tracking / 1.5 line-height - Code, technical specs

**Typography Principles**:
- Generous line-height for comfortable reading (minimum 1.5x for body text)
- Tight tracking on large headings for visual impact (-0.02em to -0.01em)
- Consistent vertical rhythm across all text elements
- Clear size jumps between hierarchy levels (minimum 20% difference)
- Limited to 2 typeface families for cohesion and performance

## Animations
Motion should reinforce executive credibility through precision and restraint—never through spectacle or playfulness. Every animation must serve a clear functional purpose: establishing spatial relationships, providing interaction feedback, or guiding attention to important changes.

**Core Principles**:
- Purposeful: Every motion has a job (orient, relate, feedback, guide)
- Subtle: Animations should be felt rather than noticed
- Fast: Nothing delays user action (200-300ms maximum)
- Physics-based: Natural easing curves, never linear
- Respectful: Minimal motion for accessibility, reduced motion respected

**Specific Applications**:
- Content fade-in on scroll: 300ms ease-out, subtle opacity shift (0.9→1.0)
- Card hover elevation: 150ms ease, 2px lift with shadow expansion
- Button interactions: 100ms ease for press states
- Page transitions: 200ms cross-fade, no slides or bounces
- Navigation active states: Instant background shift, no animation delay
- Focus rings: Instant appearance for accessibility
- NO parallax effects, auto-playing carousels, or attention-seeking motion

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
