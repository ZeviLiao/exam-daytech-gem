# Daytech Gem - Gemstone Collection Website

A React + TypeScript implementation of the Daytech gemstone collection website featuring a gem listing page and detailed product pages.

## Features

### Page 1: Gem List Page
- **Navigation Bar**: Sticky header with brand logo and menu items
- **Hero Section**: Eye-catching gradient banner introducing the collection
- **Category Filtering**: Filter gems by category (All, Ruby, Sapphire, Emerald, Diamond)
- **Sorting**: Sort gems by:
  - Name (A-Z or Z-A)
  - Price (Low to High or High to Low)
- **Gem Grid**: Responsive card grid displaying:
  - Gem image
  - Category badge
  - Name and specifications (weight, color, origin)
  - Price
  - Stock status and certification badges
  - Click-through to detail page

### Page 2: Gem Detail Page
- **Breadcrumb Navigation**: Easy navigation path
- **Product Image**: Large, high-quality gem image with certification badge
- **Detailed Information**:
  - Price and stock status
  - Comprehensive description
  - Complete specifications (weight, color, clarity, cut, origin, category)
- **Action Buttons**: Inquire and schedule viewing options
- **Additional Information**: Security, certification, and shipping details
- **Responsive Design**: Optimized for desktop and mobile

## Technology Stack

- **React 19.2.0** - UI framework
- **TypeScript** - Type safety
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients and animations

## Project Structure

```
src/
├── data/
│   └── gems.ts              # Hardcoded gem data (16 gems across 4 categories)
├── types/
│   └── gem.ts               # TypeScript interfaces and types
├── pages/
│   ├── GemList.tsx          # Gem listing page component
│   ├── GemList.css          # Gem listing page styles
│   ├── GemDetail.tsx        # Gem detail page component
│   └── GemDetail.css        # Gem detail page styles
├── App.tsx                  # Main app with routing
├── main.tsx                 # Application entry point
└── index.css                # Global styles
```

## Data Model

Each gem includes the following properties:
- `id`: Unique identifier
- `name`: Gem name
- `category`: Ruby, Sapphire, Emerald, or Diamond
- `price`: Price in USD
- `weight`: Weight in carats
- `color`: Color description
- `clarity`: Clarity grade
- `cut`: Cut type
- `origin`: Country/region of origin
- `description`: Detailed description
- `imageUrl`: Product image URL
- `certified`: Certification status
- `inStock`: Availability status

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Features Implemented

### Requirements Checklist
- ✅ Top navigation bar
- ✅ Filter/sorting block
- ✅ At least 3 gem category lists (implemented 4: Ruby, Sapphire, Emerald, Diamond)
- ✅ Click-through navigation to detail page
- ✅ Category filtering functionality
- ✅ All data hardcoded (no API calls)
- ✅ TypeScript implementation
- ✅ Responsive design
- ✅ Professional UI/UX matching reference design

## Key Implementation Details

### Filtering & Sorting
- Uses `useMemo` hook for optimized filtering and sorting performance
- Real-time updates when category or sort option changes
- Displays result count

### Routing
- `/` - Gem list page
- `/gem/:id` - Gem detail page with dynamic ID
- Back navigation support
- 404 handling for invalid gem IDs

### Styling Approach
- CSS modules for component-scoped styles
- Gradient backgrounds and modern UI elements
- Smooth transitions and hover effects
- Mobile-responsive grid layouts
- Consistent color scheme with purple/blue gradients

### Data
- 16 hardcoded gems (4 per category)
- Realistic gemstone data including specifications
- Mixed stock availability for realistic presentation
- Professional descriptions and pricing

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is for evaluation purposes.
