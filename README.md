# Portfolio Website - React App

A modern, bold portfolio website built with React, featuring a dark hero section and a light section with skill tags.

## Features

- **React Components**: Modular, reusable component structure
- **Modern Design**: Dark/light contrast with bold typography
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects and smooth transitions
- **Skill Tags**: Colorful, sticker-like design elements showcasing skills
- **Fast Development**: Powered by Vite for instant HMR (Hot Module Replacement)

## Setup Instructions

### 1. Install Dependencies

First, install Node.js dependencies:

```bash
npm install
```

### 2. Remove Background from Profile Photo

To remove the background from your profile photo:

1. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Place your profile photo** in the project root (e.g., `profile-photo.jpg`)

3. **Run the background removal script:**
   ```bash
   python remove_background.py profile-photo.jpg profile-photo-no-bg.png
   ```

   Replace `profile-photo.jpg` with your actual photo filename. The script will create a PNG file with transparent background.

4. **Move the processed photo to the public folder:**
   ```bash
   mv profile-photo-no-bg.png public/
   ```

### 3. Run the Development Server

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### 4. Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder. You can preview the production build with:

```bash
npm run preview
```

## File Structure

```
bootcamp-week6/
├── public/
│   └── profile-photo-no-bg.png  # Your profile photo (add this)
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Header component with navigation
│   │   ├── Hero.jsx             # Hero section with title and CTA
│   │   ├── ProfileSection.jsx   # Profile section with photo and skills
│   │   └── SkillTag.jsx         # Reusable skill tag component
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React entry point
│   └── styles.css               # All CSS styles
├── index.html                   # HTML template
├── package.json                 # Node.js dependencies
├── vite.config.js              # Vite configuration
├── remove_background.py        # Background removal script
└── requirements.txt            # Python dependencies
```

## Customization

### Update Personal Information

Edit `src/components/Header.jsx` to update:
- Name (currently "Devanta Ebison")

Edit `src/components/Hero.jsx` to update:
- Title (currently "PRODUCT DESIGNER")
- Description text
- CTA button text

Edit `src/components/ProfileSection.jsx` to update:
- Skill tags data (in the `skills` array)

### Modify Colors

Edit `src/styles.css` to change:
- Skill tag colors (`.design-strategy`, `.ecomm`, `.motion`, etc.)
- Background colors (`.dark-section`, `.light-section`)

### Adjust Skill Tags

Modify the `skills` array in `src/components/ProfileSection.jsx` to add, remove, or edit skill tags. Each skill object can have:
- `id`: Unique identifier
- `type`: CSS class name (matches existing styles)
- `title`: Main title text
- `subtitle`: Optional subtitle text
- `icons`: Array of icon types (`'circle'`, `'star'`, `'star-white'`)
- `extraIcon`: Additional icon text (like `'e'` for the ecomm tag)
- `icon`: Special icon type (like `'globe'` for usability)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The profile photo should be a high-resolution image for best results
- The background removal script uses AI (rembg) which works best with portraits
- Make sure your photo has good contrast between the subject and background for best removal results

