# SIYA'S PHYSIOTHERAPY & REHABILITATION CENTRE
## Comprehensive Website Implementation Plan & Architecture Specification

---

## 1. Executive Summary & Project Identity

* **Business Name:** Siya’s Physiotherapy & Rehabilitation Centre
* **Website Nature:** Premium healthcare, rehabilitation, and clinical lead-generation website
* **Target Audience:** Patients experiencing acute or chronic musculoskeletal conditions (back pain, neck pain, knee issues), post-operative recovery, sports injuries, and elderly mobility rehabilitation
* **Primary Conversion Goal:** Direct WhatsApp appointment enquiries
* **Secondary Conversion Goals:** Direct telephone calls (`tel:`) and structured appointment enquiry form submissions
* **Implementation Phase:** Preparation & Planning (No code or page implementation until explicit approval)

---

## 2. Visual Reference & Design Direction

### 2.1 Visual Reference Benchmark
The primary visual reference is the 5-page visual concept provided in the workspace:
`Siya’s Physiotherapy Website Mockup.png`

The design exhibits a high-end, clean, and trustworthy healthcare aesthetic tailored to medical excellence.

### 2.2 Curated Color System
* **Primary Brand Royal Purple:** `#532997` (Header elements, primary action buttons, key section titles)
* **Dark Royal Purple (Hover / Depth):** `#421F7B`
* **Soft Lavender / Violet Tints (Backgrounds & Cards):** `#F5F3FF`, `#EDE9FE`
* **Card Border / Subtle Accent:** `#DDD6FE` / `#E2E8F0`
* **Conversion Action Green (WhatsApp):** `#25D366` / `#16A34A`
* **Neutral Dark (Headings & Body Copy):** `#0F172A` (Headings), `#334155` (Body Text)
* **Neutral Light / Clean Surfaces:** `#FFFFFF` (Surface white), `#F8FAFC` (Page backdrop)
* **Subtle Elevation / Shadow:** `0 4px 20px -2px rgba(83, 41, 151, 0.08)` and `0 10px 30px -4px rgba(83, 41, 151, 0.12)`

### 2.3 Typography & Components
* **Heading Typography:** Plus Jakarta Sans / Outfit (Crisp, warm, authoritative, clean clinical elegance)
* **Body Typography:** Inter / DM Sans (High legibility, balanced metrics)
* **Component Styling:**
  * Rounded corners (`border-radius: 14px` to `20px` for cards, `9999px` for pill badges and buttons)
  * Restrained, soft purple-tinted shadows (avoiding heavy black drop shadows)
  * Generous padding and white space to evoke cleanliness and calm
  * High contrast ratios meeting WCAG AAA / AA accessibility guidelines

---

## 3. Responsive Layout Strategy: Desktop vs Mobile

Rather than simply collapsing desktop elements into a shrunken single column, the implementation features two intentionally tailored responsive experiences:

### 3.1 Desktop Layout Architecture
* **Header & Navigation:** Full-width sticky navigation bar with high-contrast clinic logo, clear page navigation links (Home, About, Treatments, Patient Stories, Contact), and a prominent "Book Appointment" CTA button.
* **Hero Experience:** Spacious horizontal split layout featuring the headline, concise value proposition, primary action buttons (Book Appointment, WhatsApp, Call Now), and quick benefit badges on the left, paired with a professional doctor portrait on the right.
* **Grid Layouts:** 3-column and 4-column balanced card grids with ample negative space.
* **Max Container Width:** Constrained between `1200px` and `1280px` to maintain comfortable eye-scanning lines.
* **Footer:** Comprehensive 4-column desktop footer containing clinic identity, quick links, treatment list, verified clinic contact details, and emergency disclaimer.

### 3.2 Mobile Layout Architecture
* **Header & Navigation:** Slim, sticky header featuring clinic logo and an accessible animated slide-out hamburger menu with large tap targets.
* **Hero Experience:** Vertically stacked hierarchy optimized for immediate clarity:
  1. Compelling headline: *"Move Better. Feel Stronger. Live Healthier."*
  2. Doctor portrait placeholder (compact and well-framed)
  3. Immediate booking CTA buttons with tactile touch targets (min 48px height)
* **Content Cards:** Single-column layout with horizontal padding (`16px` to `20px`), ensuring large typography and touchable elements.
* **Sticky Quick-Action Bottom Bar:** Floating or fixed bottom bar with direct "WhatsApp" and "Call Now" buttons, engineered to automatically hide or yield when interacting with forms or when approaching the page footer to avoid UI obstruction.
* **Layout Safeguards:** Strict `overflow-x: hidden` enforcement to eliminate horizontal scroll stutter.

---

## 4. Page Scope & Content Architecture

### 4.1 Page 1: Home Page (Complete Overview & Lead Generation)
* **Hero Section:**
  * Headline: *"Move Better. Feel Stronger. Live Healthier."*
  * Sub-headline: *"Expert Physiotherapy & Rehabilitation for a Pain-Free and Active Life."*
  * Doctor portrait image placeholder (framed with soft rounded edges).
  * Quick conversion pill buttons: "Book Appointment" (Purple), "WhatsApp" (Green), "Call Now" (Purple outline).
* **Core Benefit Badges:** Four clinical value indicators with icons:
  1. Pain Relief
  2. Faster Recovery
  3. Improved Mobility
  4. Better Quality of Life
* **Treatment Highlights:** Three core verified treatment cards:
  * Back Pain Relief
  * Neck & Shoulder Pain Rehabilitation
  * Knee Pain & Joint Care
* **Clinical Excellence Feature Card:** "Professional Care, Personalised Recovery" with treatment visual and video consultation preview.
* **"Why Choose Siya's?" Section:**
  * Experienced Physiotherapists
  * Personalised Treatment Plans
  * Modern Equipment & Techniques
  * Friendly & Supportive Environment
* **Doctor Introduction Section:** Welcoming message and philosophy preview.
* **FAQ Preview & Location Teaser:** Quick accordion questions and clinic map link.
* **Closing Conversion Banner:** "Book Your Appointment Today — Take the first step towards a pain-free life."

### 4.2 Page 2: About Us (Doctor Profile & Philosophy)
* **Page Header:** Header banner with breadcrumbs (`Home > About Us`) and calming clinic ambiance background.
* **Our Story & Mission:** Clinic origin, core mission of restoring pain-free movement, and patient-first ethos.
* **Doctor Profile:**
  * Doctor photograph placeholder.
  * Quote banner: *"Every patient's recovery journey is unique, and I am committed to providing personalised care for a healthier, stronger you."*
  * Full name, verified qualifications, and clinical background (displayed strictly from verified data).
* **Clinical Qualifications & Credentials:**
  * Bachelor / Master in Physiotherapy (BPT / MPT)
  * Certified in Advanced Manual Therapy
  * Specialized Training in Musculoskeletal / Sports Rehabilitation
  * Documented years of clinical practice
* **Key Metric Counters:**
  * 500+ Happy Patients (Verified milestone)
  * 5+ Years Experience (Verified milestone)
  * 100% Personalised Treatment Protocols
* **Our Vision:** Ongoing commitment to modern therapeutic techniques and ethical patient care.
* **Direct Appointment CTA.**

### 4.3 Page 3: Treatments & Services
* **Page Header:** Breadcrumbs (`Home > Treatments`) and treatment ambiance header.
* **Primary Dedicated Treatment Sections (Core Scope):**
  1. **Back Pain Physiotherapy:** Relief from lumbar strain, herniated discs, sciatica, posture imbalances, and chronic stiffness.
  2. **Neck & Shoulder Pain:** Treatment for cervical spondylosis, postural stress, trapezius spasm, and frozen shoulder.
  3. **Knee Pain Rehabilitation:** Care for osteoarthritis, runner's knee, ligament rehab (ACL/MCL), and post-injury strengthening.
* **Content Standard:** Medically responsible, ethical descriptions outlining assessment, manual therapy, therapeutic exercise, and ergonomic advice without sensational guarantees.
* **Contextual Treatment CTAs:** Each treatment card features a direct "Book Consultation for [Treatment]" button linking to the prefilled WhatsApp flow.
* **Secondary / Specialised Treatments (Marked pending clinic confirmation):**
  * Sports Injury Rehabilitation
  * Post-Surgical Rehabilitation
  * Neurological Rehabilitation
  * Posture Correction Programmes
  * Home Visit Physiotherapy

### 4.4 Page 4: Patient Stories & Clinic Gallery
* **Page Header:** Breadcrumbs (`Home > Patient Stories`).
* **Ethical Standards & Medical Compliance:**
  * All reviews and stories will be published strictly with genuine, documented patient consent.
  * Absolutely no fabricated ratings, invented names, or stock photos passed off as real patients.
  * Avoid deceptive "Before & After" mobility claims unless substantiated with clinical case documentation and patient authorization.
* **Clinic Facility Gallery:** Authentic photographs of the treatment rooms, exercise equipment, electrotherapy units, and reception area.
* **Real Patient Feedback Carousel:** Genuine reviews, condition treated, and feedback on therapist compassion and care.
* **Video Testimonial Placeholder:** Clinical video consultation or patient feedback video card.

### 4.5 Page 5: Contact & Appointments
* **Page Header:** Breadcrumbs (`Home > Contact Us`).
* **Direct Contact Channels:**
  * Click-to-WhatsApp button with prefilled enquiry prompt.
  * Direct Click-to-Call button (`tel:`) with official clinic phone number.
* **Appointment Enquiry Form:**
  * Full Name
  * Phone Number
  * Service / Condition (Back Pain, Neck Pain, Knee Pain, General Assessment)
  * Preferred Date
  * Preferred Time Slot (Morning / Afternoon / Evening)
  * Message / Symptoms Description
  * Direct submission trigger that generates a formatted WhatsApp message or email notification.
* **Clinic Location & Timing Information:**
  * Complete street address and prominent landmarks.
  * Verified operating hours (Monday - Saturday, Sunday timings).
* **Interactive Google Map Embed:** Responsive iframe pointing to the verified Google Maps clinic location.
* **Frequently Asked Questions (Accordion):**
  * Do I need a doctor's prescription before visiting?
  * How many sessions are typically required?
  * What conditions are treated at Siya’s?
  * Are home physiotherapy sessions available?
  * What should I wear to my first appointment?
  * What are the consultation and session fees?
* **Clear Appointment Disclaimer:** *"Submitting an enquiry via form or WhatsApp expresses your interest in a slot. Our clinic reception will contact you directly to confirm the final booking time."*

---

## 5. WhatsApp & Telephone Integration Architecture

### 5.1 Prefilled WhatsApp Enquiry URL
To maximize conversion from interested visitors to confirmed appointments, all WhatsApp buttons will utilize a standard URI structure:

```
https://wa.me/<VERIFIED_PHONE_NUMBER>?text=<URL_ENCODED_MESSAGE>
```

#### Message Template (Standard):
```text
Hello Siya’s Physiotherapy & Rehabilitation Centre,
I would like to enquire about an appointment.
Treatment: [Back pain / Neck pain / Knee pain / General Enquiry]
Preferred date: [Date]
Preferred time: [Time]
Please let me know the available appointment slots.
```

#### Standard URL Encoded Parameter:
`Hello%20Siya%E2%80%99s%20Physiotherapy%20%26%20Rehabilitation%20Centre%2C%0A%0AI%20would%20like%20to%20enquire%20about%20an%20appointment.%0ATreatment%3A%20%5BBack%20pain%20%2F%20Neck%20pain%20%2F%20Knee%20pain%5D%0APreferred%20date%3A%20%5BDate%5D%0APreferred%20time%3A%20%5BTime%5D%0A%0APlease%20let%20me%20know%20the%20available%20appointment%20slots.`

### 5.2 Telephone Call Integration
* Standard telephone URI: `tel:<VERIFIED_PHONE_NUMBER>`
* Visual label: "+91 [Verified Number]"
* Mobile action triggers native phone dialer directly.

### 5.3 Medical Process Clarity
A clearly displayed micro-disclaimer will state that opening or sending a WhatsApp message is an enquiry and does not constitute a locked or emergency appointment until confirmed by clinic staff.

---

## 6. Technical Architecture & SEO Strategy

### 6.1 Proposed Technology Stack
* **Framework:** React + Vite (Fast build times, minimal bundle size, instant HMR)
* **Styling:** Modular Vanilla CSS with CSS Custom Properties (Design Tokens for colors, spacing, typography, and shadows)
* **Icons:** Lightweight SVG icon set (Lucide React or clean inline SVG)
* **Image Optimization:** Modern WebP format with `srcset`, responsive sizing, and `loading="lazy"` for below-the-fold media.

### 6.2 SEO Architecture & Standards
* **Page Titles & Meta Descriptions:** Dedicated, keyword-researched meta tags for each page:
  * *Home:* "Siya’s Physiotherapy & Rehabilitation Centre | Expert Physiotherapy"
  * *About:* "About Dr. Siya & Our Clinic | Siya’s Physiotherapy & Rehabilitation"
  * *Treatments:* "Physiotherapy for Back, Neck & Knee Pain | Siya’s Rehabilitation"
  * *Stories:* "Patient Recovery Stories & Clinic Gallery | Siya’s Physiotherapy"
  * *Contact:* "Book an Appointment | Siya’s Physiotherapy & Rehabilitation Centre"
* **Semantic Structure:** Exactly one `<h1>` per page, followed by logical `<h2>`, `<h3>` heading hierarchies.
* **Crawlability:** Clean client-side routes with server fallback, canonical link tags (`<link rel="canonical">`), XML Sitemap (`sitemap.xml`), and robots configuration (`robots.txt`).
* **Schema Markup (JSON-LD):**
  * `MedicalBusiness` / `Physiotherapy` structured data schema including name, telephone, address, opening hours, and accepted payment types.
  * `MedicalCondition` / `MedicalTherapy` schema for specific treatment pages.
  * `FAQPage` schema on the Contact & FAQ page.
* **Local SEO Strategy:**
  * Target keywords: *physiotherapy centre*, *rehabilitation clinic*, *back pain physiotherapy*, *neck pain treatment*, *knee physiotherapy* coupled with the verified locality/city.
  * Strict NAP (Name, Address, Phone) consistency across all pages.
* **Realistic Disclaimer:** Strict adherence to ethical SEO best practices — SEO optimizes discoverability, indexing, and relevance; first-page Google rankings cannot be guaranteed as rankings depend on external search engine algorithms and local competition.

---

## 7. Record of Pending Information & Content Dependencies

The following content items are currently pending clinic confirmation and will use clear, dignified placeholders during initial development:

| Item | Status | Placeholder Used in Plan | Action Required from Clinic |
| :--- | :--- | :--- | :--- |
| **Doctor Full Name & Title** | Pending | `[Dr. Siya Khan, BPT, MPT]` | Provide verified full name and official title |
| **Academic Qualifications** | Pending | `[BPT / MPT - Musculoskeletal / Sports]` | Provide exact degree certificates & university |
| **Clinical Registrations** | Pending | `[State Council Registration Number]` | Provide medical/physiotherapy council number |
| **Clinic Complete Address** | Pending | `[123, Main Road, Near Landmark, City - 000000]` | Provide official clinic premises address |
| **Official Phone Number** | Pending | `[+91 98765 43210]` | Provide active clinic calling number |
| **Official WhatsApp Number** | Pending | `[+91 98765 43210]` | Provide WhatsApp Business account number |
| **Operating Hours** | Pending | `[Mon - Sat: 9:00 AM - 8:00 PM, Sun: By Appointment]` | Provide confirmed clinic schedule |
| **Google Maps Coordinates / CID** | Pending | `[Interactive Map Placeholder]` | Provide Google Business Profile Maps link |
| **Authentic Doctor Photographs** | Pending | `[Clinical Portrait Placeholder]` | High-resolution lab coat / clinical photograph |
| **Clinic Interior & Equipment Photos** | Pending | `[Modern Clinic Ambiance Placeholders]` | Real photos of treatment beds, reception, machines |
| **Genuine Patient Testimonials** | Pending | `[Sample Clinical Cases with Explicit Consent]` | Collect approved written or video feedback |
| **Secondary Services Offered** | Pending | `[Omitted from core until confirmed]` | Confirm if Neuro, Post-Surgical, Home Care offered |

*Strict Policy:* Under no circumstances will credentials, patient quotes, medical claims, or addresses be fabricated or hallucinated.

---

## 8. Frontend Design Skill & Configuration Status

* **Installed Skill:** `frontend-design`
* **Source:** `https://github.com/bhaumikgohel/Antigravity-SKILLS` (Verified commit / tree)
* **Project Directory:** `.agents/skills/frontend-design/`
* **Files Present:** `SKILL.md` (metadata & guidelines), `LICENSE.txt` (Apache 2.0 terms)
* **Metadata Status:** Valid YAML frontmatter, correctly registered in the project workspace.
* **Activation Mode:** Progressive disclosure / On-demand activation by Antigravity assistant when building components and pages.

---

## 9. Next Steps (Pending Approval)

1. Review and approve this planning document (`SIYA_WEBSITE_PLAN.md`).
2. Supply verified clinic details (Doctor credentials, address, phone/WhatsApp number).
3. Authorize Phase 1 of build: Project scaffolding (React + Vite + Design System Tokens).
4. Implement the five approved pages adhering closely to the visual mockup reference.
