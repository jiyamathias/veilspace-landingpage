# App Screenshots

Place your Canva-exported screenshots here:

- auth.png       → Login / Sign Up screen
- feed.png       → Home Feed screen
- discover.png   → Discover Spaces screen
- post.png       → Post & Comments screen
- compose.png    → Compose Post screen

Recommended export size: 400×830px (or 2x at 800×1660px for retina)

After adding images, update AppPreview.tsx:
Replace the placeholder <div> inside each screen-frame with:
  <img src={screen.imagePath} alt={screen.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
