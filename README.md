# Portfolio Website

A modern, bold portfolio website for a Product Designer, featuring a dark hero section and a light section with skill tags.

## Features

- **Modern Design**: Dark/light contrast with bold typography
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects and smooth transitions
- **Skill Tags**: Colorful, sticker-like design elements showcasing skills

## Setup Instructions

### 1. Remove Background from Profile Photo

To remove the background from your profile photo:

1. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Place your profile photo** in the project directory (e.g., `profile-photo.jpg`)

3. **Run the background removal script:**
   ```bash
   python remove_background.py profile-photo.jpg profile-photo-no-bg.png
   ```

   Replace `profile-photo.jpg` with your actual photo filename. The script will create a PNG file with transparent background.

4. **Verify the output:** Make sure `profile-photo-no-bg.png` exists and looks good.

### 2. View the Website

Simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then open `http://localhost:8000` in your browser.

## File Structure

```
bootcamp-week6/
├── index.html              # Main HTML file
├── styles.css              # All CSS styles
├── script.js               # JavaScript (if needed)
├── remove_background.py    # Background removal script
├── requirements.txt        # Python dependencies
├── profile-photo.jpg       # Your original photo (add this)
└── profile-photo-no-bg.png # Photo with removed background (generated)
```

## Customization

### Update Personal Information

Edit `index.html` to update:
- Name (currently "Devanta Ebison")
- Title (currently "PRODUCT DESIGNER")
- Description text
- Navigation links

### Modify Colors

Edit `styles.css` to change:
- Skill tag colors (`.design-strategy`, `.ecomm`, `.motion`, etc.)
- Background colors (`.dark-section`, `.light-section`)

### Adjust Skill Tags

Modify the skill tags in `index.html` and their styles in `styles.css` to match your skills.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The profile photo should be a high-resolution image for best results
- The background removal script uses AI (rembg) which works best with portraits
- Make sure your photo has good contrast between the subject and background for best removal results

