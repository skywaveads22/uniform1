# Uniform Blogs

A static site for uniform-related content across various industries.

## Netlify Deployment Instructions

Due to challenges with Next.js image optimization and webpack processing of files in the public directory, we've implemented a custom deployment solution for Netlify:

### Solution Overview

1. **Manual Static Site Builder**: 
   - Created a standalone script (`scripts/manual-static-build.js`) that generates a static site with HTML files and WebP images
   - Completely bypasses Next.js build process and webpack, avoiding common deployment failures

2. **Image Handling**:
   - Converts all images to WebP format for better performance
   - Uses fallback images for any problematic JPG/JPEG files
   - Organizes images by category in a consistent structure

3. **Netlify Configuration**:
   - Updated `netlify.toml` to use our custom build script
   - Preserved critical files like `_redirects`, `robots.txt`, and sitemaps
   - Added appropriate caching headers for static assets

### Running a Local Build

To test the static site locally:

```bash
npm run netlify:static
```

This will create a `out` directory with the complete static site.

### Troubleshooting

If you encounter issues with the Netlify deployment:

1. Check the `netlify.toml` configuration to ensure it's using the `netlify:static` script
2. Verify that all WebP images were generated and copied to the output directory
3. Inspect the Netlify build logs for any errors related to image processing or file copying
4. If necessary, update the `scripts/manual-static-build.js` script to handle any missing file types or directories

## Development Instructions

For local development using the full Next.js application:

```bash
npm install
npm run dev
```

## License

Private - Unauthorized use, reproduction, or distribution is prohibited. 