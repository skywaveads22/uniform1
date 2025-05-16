export default function imageLoader({ src, width, quality }) {
  const baseUrl = process.env.NETLIFY ? '' : '/uniform1';
  const normalizedSrc = src.startsWith('/') ? src.slice(1) : src;
  return `${baseUrl}/${normalizedSrc}${width ? `?w=${width}` : ''}${quality ? `&q=${quality}` : ''}`;
} 