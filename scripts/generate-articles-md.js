const fs = require('fs');
const path = require('path');

// Categories to process
const categories = [
  'aviation',
  'education',
  'government',
  'healthcare',
  'hospitality',
  'industrial',
  'security'
];

// Output file
const articlesFile = path.join(process.cwd(), 'articles.md');

// Function to read and parse JSON data
function readJsonFile(category) {
  const filePath = path.join(process.cwd(), 'src', 'data', `${category}.json`);
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error reading ${category}.json:`, error.message);
    return [];
  }
}

// Main function to generate the blog post list
async function generateArticlesList() {
  // Array to store all blog posts
  let allPosts = [];

  // Read and process each category file
  for (const category of categories) {
    const posts = readJsonFile(category);
    if (posts && posts.length) {
      allPosts = [...allPosts, ...posts];
    }
  }

  // Sort posts alphabetically by title
  allPosts.sort((a, b) => a.title.localeCompare(b.title));

  // Generate Markdown content
  let markdownContent = '# قائمة جميع مقالات الموقع\n\n';
  
  // Add all posts in alphabetical order
  allPosts.forEach((post, index) => {
    markdownContent += `${index + 1}. [${post.title}](https://uniformsa.com/blog/${post.slug})\n`;
  });

  // Write to file
  fs.writeFileSync(articlesFile, markdownContent, 'utf8');

  console.log(`Generated articles list in Markdown: ${articlesFile}`);
  console.log(`Total blog posts: ${allPosts.length}`);
}

// Run the main function
generateArticlesList().catch(error => console.error('Error generating articles list:', error)); 