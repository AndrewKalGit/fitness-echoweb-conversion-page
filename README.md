# ConversionSystems - Fitness Studio Landing Page

A conversion-focused landing page for boutique fitness studios built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Clean, professional Equinox-inspired design
- Conversion-optimized layout with clear CTAs
- EmailJS integration for lead capture (server-side for security)
- Responsive design for all devices
- Privacy Policy and Terms & Conditions pages
- Google Analytics ready (GA4)
- Split components for easy maintenance

## Getting Started

### Prerequisites

- Node.js 18+ installed
- EmailJS account (free tier available)

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Fill in your EmailJS credentials

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## EmailJS Setup

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Create a free account if you don't have one
3. Add an Email Service (Gmail, Outlook, etc.)
4. Create an Email Template with these variables:
   - `{{studio_name}}`
   - `{{owner_name}}`
   - `{{email}}`
   - `{{phone}}`
   - `{{studio_type}}`
   - `{{member_count}}`
   - `{{current_website}}`
   - `{{biggest_challenge}}`
5. Copy your Service ID, Template ID, and Public Key to `.env.local`

### Example Email Template

```
New Conversion Audit Request

Studio Name: {{studio_name}}
Owner Name: {{owner_name}}
Email: {{email}}
Phone: {{phone}}

Studio Type: {{studio_type}}
Member Count: {{member_count}}
Current Website: {{current_website}}

Biggest Challenge:
{{biggest_challenge}}
```

## Project Structure

```
├── app/
│   ├── actions/
│   │   └── send-email.ts     # Server action for EmailJS
│   ├── page.tsx              # Main landing page
│   ├── privacy/page.tsx      # Privacy policy page
│   ├── terms/page.tsx        # Terms & conditions page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── hero-section.tsx
│   ├── problem-section.tsx
│   ├── solution-section.tsx
│   ├── outcomes-section.tsx
│   ├── case-studies-section.tsx
│   ├── social-proof-section.tsx
│   ├── pricing-section.tsx
│   ├── audit-section.tsx     # Contact form with EmailJS
│   ├── footer.tsx
│   └── ui/                   # shadcn/ui components
├── public/                   # Static images
└── .env.local.example        # Environment variables template
```

## Customization

### Colors and Gradients

The site uses a minimal gray palette with subtle gradients. Customize in `app/globals.css`:

```css
--background: 0 0% 100%;
--foreground: 0 0% 3.9%;
/* etc. */
```

### Content

Edit the component files in `/components` to update:
- Pricing tiers
- Case study content
- Testimonials
- Studio types
- CTAs

### Images

Replace placeholder images in `/public` with your own:
- `modern-fitness-studio-interior-with-training-equip.jpg`
- `mma-gym-training-with-heavy-bags-and-fighters.jpg`
- `boxing-gym-with-ring-and-training-equipment.jpg`
- `taekwondo-school-with-students-training-in-uniform.jpg`
- `boutique-fitness-studio-with-yoga-and-pilates-equi.jpg`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables in Vercel project settings
4. Deploy!

### Environment Variables on Vercel

Add these in your Vercel project settings under Environment Variables (without NEXT_PUBLIC_ prefix):
- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`
- `EMAILJS_PUBLIC_KEY`

## Analytics Setup (Optional)

To add Google Analytics 4:

1. Create a GA4 property at [Google Analytics](https://analytics.google.com)
2. Install the Vercel Analytics package (already included)
3. Add your measurement ID to the project

## License

This project is for client use. Customize and deploy as needed.

## Support

For questions or issues with setup, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
# fitness-echoweb-conversion-page
