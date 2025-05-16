// This file helps disable the Next.js plugin in Netlify
module.exports = {
  onPreBuild: () => {
    console.log('Disabling Next.js plugin');
    // This file exists to prevent the Next.js plugin from initializing
    // It doesn't need to do anything as its presence is enough
  }
}; 