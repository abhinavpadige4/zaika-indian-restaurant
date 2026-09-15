# Zaika Indian Restaurant Landing Page

A beautiful, responsive landing page for Zaika Indian Restaurant featuring rich red and gold theme, menu showcase, chef profiles, testimonials, and online booking system.

## 🌟 Features

- **Hero Section**: Full-width background with captivating tagline and call-to-action buttons
- **Menu Showcase**: Filterable grid of dishes with images, descriptions, and prices
- **Chef Profiles**: Beautifully designed cards showcasing our master chefs
- **Testimonials Slider**: Interactive customer reviews with ratings
- **Booking & Contact**: Reservation form with contact details and Google Maps integration
- **Rich Theme**: Elegant red (#C41E3A) and gold (#FFD700) color scheme
- **Fully Responsive**: Mobile-first design working on all devices
- **Performance Optimized**: Lazy-loaded images and optimized assets

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS with custom colors and animations
- **Icons**: Heroicons (SVG-based)
- **Build Tool**: Vite for fast development and production builds

## 📁 Project Structure

```
zaika-indian-restaurant/
├── public/
│   ├── assets/
│   │   ├── hero-bg.jpg
│   │   ├── menu/
│   │   ├── chefs/
│   │   └── testimonials/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   ├── AboutChefs.jsx
│   │   ├── Testimonials.jsx
│   │   ├── BookingContact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── menu.json
│   │   ├── chefs.json
│   │   └── testimonials.json
│   ├── index.css
│   ├── main.jsx
│   └── App.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhinavpadige4/zaika-indian-restaurant.git
   cd zaika-indian-restaurant
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🎨 Design System

### Colors
- **Primary Red**: `#C41E3A` (used for buttons, accents, highlights)
- **Secondary Gold**: `#FFD700` (used for highlights, special badges)
- **Dark Background**: `#1A1A1A` (for footer and text contrast)
- **Light Background**: `#F5F5F5` (main background color)

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body Text**: Inter (sans-serif, clean and readable)

### Breakpoints
- Mobile: < 640px
- Tablet: ≥ 640px
- Desktop: ≥ 1024px

## 📱 Responsive Design

The landing page is fully responsive and adapts to different screen sizes:

- **Mobile**: Single column layout with touch-friendly controls
- **Tablet**: Two-column grids for menu and chef sections
- **Desktop**: Three-column layouts for optimal space utilization

## 🔧 Customization

### Adding Menu Items
Edit `src/data/menu.json` to add new dishes:
```json
{
  "id": 9,
  "name": "New Dish Name",
  "description": "Description of the dish",
  "price": 12.99,
  "category": "veg",
  "image": "/assets/menu/new-dish.jpg",
  "special": false
}
```

### Adding Chefs
Edit `src/data/chefs.json` to add new team members:
```json
{
  "id": 4,
  "name": "Chef New Name",
  "image": "/assets/chefs/new-chef.jpg",
  "bio": "Chef biography here",
  "specialties": ["Specialty 1", "Specialty 2"],
  "experience": "X+ years"
}
```

## 🚀 Deployment

This project is configured for easy deployment to Vercel:

1. Push to GitHub
2. Import repository to Vercel
3. Vercel will automatically detect the Vite/React setup
4. Deploy with zero configuration

## 📸 Screenshots

![Hero Section](public/assets/hero-bg.jpg)
![Menu Section](public/assets/menu/butter-chicken.jpg)
![Chef Section](public/assets/chefs/arjun.jpg)
![Testimonials](public/assets/testimonials/priya.jpg)
![Booking Form](public/assets/contact-form.jpg)

## 🙏 Acknowledgments

- Inspired by authentic Indian restaurant aesthetics
- Images sourced from royalty-free collections
- Icons from Heroicons
- Fonts from Google Fonts (Inter & Playfair Display)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Made with ❤️ for Zaika Indian Restaurant**