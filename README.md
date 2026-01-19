# Premium Portfolio Website

A modern, high-performance portfolio website built with Next.js 14, TypeScript, Framer Motion, and GSAP. Features advanced scroll animations (both horizontal and vertical), smooth scrolling, and optimized performance.

## 🚀 Features

- **Next.js 14** with App Router and TypeScript
- **Advanced Animations**: Framer Motion for vertical scroll animations, GSAP for horizontal scroll
- **Smooth Scrolling**: Lenis for buttery-smooth scroll experience
- **Performance Optimized**: Code splitting, lazy loading, image optimization
- **Responsive Design**: Tailwind CSS with custom design system
- **SEO Optimized**: Meta tags, structured data, semantic HTML
- **Accessibility**: WCAG compliant, keyboard navigation

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Smooth Scroll**: Lenis
- **Forms**: React Hook Form, EmailJS
- **Icons**: React Icons

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Configuration

### EmailJS Setup

To enable the contact form, configure EmailJS in `components/sections/Contact.tsx`:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Replace the placeholders:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

## 🏗️ Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Page sections
│   ├── animations/         # Reusable animation components
│   ├── ui/                 # UI components
│   └── layout/             # Layout components
├── lib/
│   ├── animations.ts       # Animation variants
│   └── constants.ts        # Constants
└── public/                 # Static assets
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```js
colors: {
  primary: {
    1: '#0061ff',
    2: '#60efff',
  },
  // ... more colors
}
```

### Animations

Animation variants are defined in `lib/animations.ts`. Modify or add new variants as needed.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

Build the production bundle:

```bash
npm run build
```

The output will be in the `.next` folder. Deploy according to your platform's requirements.

## 📊 Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Smooth 60fps animations
- Optimized bundle size with code splitting

## 📄 License

This project is private and personal.

## 👤 Author

**Ayush Singh**
- GitHub: [@ayush1184](https://github.com/ayush1184)
- LinkedIn: [Ayush Singh](https://www.linkedin.com/in/ad1184/)

---

Built with ❤️ using Next.js and modern web technologies.
