# IT Portfolio - William Sokol

Professional IT portfolio website showcasing technical expertise, projects, and experience.

**Live Site:** [https://williamsokol.github.io/IT-Portfolio](https://williamsokol.github.io/IT-Portfolio)

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or bun
- Git

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/williamsokol/IT-Portfolio.git
   cd IT-Portfolio
```

2. **Install dependencies**
```bash
   npm install
   # or
   bun install
```

3. **Start development server**
```bash
   npm run dev
   # or
   bun run dev
```

   The site will be available at `http://localhost:3000`

---

## 📝 Development Workflow

### Running the Development Server
```bash
npm run dev
```

This starts a local development server with:
- ✅ Hot module replacement (changes appear instantly)
- ✅ Fast refresh
- ✅ TypeScript type checking

### Making Changes

1. **Edit files** in the `src/` directory
2. **Save** - changes appear automatically in the browser
3. **Check browser console** for any errors

### Common Development Tasks

#### Update Content
- **Hero Section:** Edit `src/App.tsx` - Search for "Hero Section"
- **Projects:** Edit `src/App.tsx` - Search for "Projects Section"
- **Experience:** Edit `src/App.tsx` - Search for "Experience Section"
- **Skills:** Edit `src/App.tsx` - Search for "Skills Section"
- **Contact Info:** Edit `src/App.tsx` - Search for "Contact Section"

#### Add/Update Images
1. **For imported images:**
   - Add image to `src/assets/images/`
   - Import in component: `import myImg from '@/assets/images/myimg.jpg'`
   - Use: `<img src={myImg} />`

2. **For public images:**
   - Add image to `public/images/`
   - Use: `<img src={\`${import.meta.env.BASE_URL}images/myimg.jpg\`} />`

#### Update Resume/Documents
1. Add PDF to `public/Documents/`
2. Reference: `href={\`${import.meta.env.BASE_URL}Documents/filename.pdf\`}`

#### Add New Dependencies
```bash
npm install package-name
# or
bun add package-name
```

---

## 🧪 Testing & Quality Checks

### Build for Production (Test Before Deploy)
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

View the production build locally at `http://localhost:4173`


### Fix Common Issues

**TypeScript errors:**
```bash
npm run lint:types
```

**Import.meta.env errors:**
- Make sure `src/vite-env.d.ts` exists with:
```ts
  /// <reference types="vite/client" />
```

**Images not loading:**
- Check you're using `import.meta.env.BASE_URL` for public folder images
- Or import images from `src/assets/`

---

## 🚀 Deployment

### Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
1. ✅ Build the production version
2. ✅ Deploy to `gh-pages` branch
3. ✅ Update live site in 1-2 minutes

**Your site will be live at:** https://williamsokol.github.io/IT-Portfolio

### Full Update & Deploy Workflow
```bash
# 1. Make your changes in code

# 2. Test locally
npm run dev

# 4. Build and preview
npm run build
npm run preview

# 5. Commit changes to git
git add .
git commit -m "Description of changes"
git push

# 6. Deploy to GitHub Pages
npm run deploy
```

### Quick Deploy (Skip Git Push)

If you just want to deploy without pushing to main:
```bash
npm run deploy
```

This still updates the live site!

---

## 📁 Project Structure
```
IT-Portfolio/
├── src/
│   ├── assets/          # Images, fonts, other assets
│   ├── components/      # React components
│   │   └── ui/         # Shadcn UI components
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Entry point
│   ├── index.css       # Global styles
│   └── vite-env.d.ts   # Vite type definitions
├── public/
│   ├── images/         # Public images
│   └── Documents/      # PDFs, resumes
├── dist/               # Production build (generated)
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Dependencies and scripts
```

---

## 🛠️ Configuration Files

### vite.config.ts
- **base:** Set to `/IT-Portfolio/` for GitHub Pages
- Don't change unless deploying to different URL

### package.json
- **homepage:** GitHub Pages URL
- **scripts:** Development and deployment commands

### tailwind.config.js
- Tailwind CSS configuration
- Theme colors, fonts, etc.

---

## 🔧 Troubleshooting

### Site shows blank page after deployment
**Solution:** Hard refresh browser cache
- Windows/Linux: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

### Images not showing
**Solution:** Check image paths use `import.meta.env.BASE_URL`
```tsx
// ✅ Correct
<img src={`${import.meta.env.BASE_URL}images/photo.jpg`} />

// ❌ Wrong
<img src="/images/photo.jpg" />
```

### TypeScript errors about import.meta.env
**Solution:** Check `src/vite-env.d.ts` exists:
```ts
/// <reference types="vite/client" />
```

### Deploy fails
**Solution:**
```bash
# Make sure gh-pages is installed
npm install gh-pages --save-dev

# Try deploying again
npm run deploy
```

### Changes not showing on live site
1. Wait 2-3 minutes (GitHub Pages can be slow)
2. Hard refresh browser (clear cache)
3. Check GitHub Actions tab for deployment status

---

## 📧 Contact Form Setup

The contact form uses **Formspree**:

1. Sign up at https://formspree.io
2. Create a new form
3. Get your form ID
4. Update in `src/App.tsx`:
```tsx
   action="https://formspree.io/f/YOUR_FORM_ID"
```

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change theme colors:
```js
theme: {
  extend: {
    colors: {
      primary: '#6366f1',  // Change primary color
      // ... other colors
    }
  }
}
```

### Fonts
Add to `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');
```

### Add New Sections
1. Copy existing section structure from `src/App.tsx`
2. Update content
3. Add to navigation menu

---

## 📦 Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run lint` | Run all linters |
| `npm run lint:types` | TypeScript type check |
| `npm run lint:js` | ESLint check |
| `npm run lint:css` | Stylelint check |

---

## 🔄 Git Workflow

### Daily Development
```bash
# Pull latest changes
git pull

# Make changes...

# Stage and commit
git add .
git commit -m "Description of changes"

# Push to GitHub
git push
```

### Create a New Feature
```bash
# Create new branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push branch
git push -u origin feature/new-feature

# Merge to main (on GitHub or locally)
```

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 📚 Technologies Used

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + Shadcn
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Routing:** React Router
- **Form Handling:** React Hook Form + Zod
- **Deployment:** GitHub Pages

---

## 📄 License

This is a personal portfolio website. All rights reserved.

---

## 👤 Author

**William Sokol**
- Email: williamsokol0@gmail.com
- LinkedIn: [william-sokol-56040790](https://www.linkedin.com/in/william-sokol-56040790/)
- GitHub: [@williamsokol](https://github.com/williamsokol)

---

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome! Open an issue or contact me directly.

---

## 🙏 Acknowledgments

- Shadcn UI for component library
- Radix UI for accessible primitives
- Tailwind CSS for styling utilities
- Vite for blazing fast development

---

**Last Updated:** January 2025