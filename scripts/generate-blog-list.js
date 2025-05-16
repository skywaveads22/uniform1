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

// Output files
const markdownFile = path.join(process.cwd(), 'output', 'blog-list.md');
const htmlFile = path.join(process.cwd(), 'output', 'blog-list.html');

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
async function generateBlogList() {
  // Array to store all blog posts
  let allPosts = [];

  // Read and process each category file
  for (const category of categories) {
    const posts = readJsonFile(category);
    if (posts && posts.length) {
      allPosts = [...allPosts, ...posts];
    }
  }

  // Sort posts by date (newest first)
  allPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  // Generate Markdown content
  let markdownContent = '# Complete Blog Post List\n\n';
  
  // Group by category
  const postsByCategory = {};
  categories.forEach(category => {
    postsByCategory[category] = allPosts.filter(post => post.category === category);
  });

  // Add posts to markdown by category
  for (const category of categories) {
    const categoryPosts = postsByCategory[category];
    if (categoryPosts.length) {
      const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
      markdownContent += `## ${categoryName} Articles\n\n`;
      
      categoryPosts.forEach(post => {
        const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        markdownContent += `- [${post.title}](https://uniformsa.com/blog/${post.slug}) - ${formattedDate}\n`;
      });
      
      markdownContent += '\n';
    }
  }

  // Generate HTML content
  let htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UniformSA - Complete Blog Post List</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    h1 {
      color: #0f766e;
      text-align: center;
      margin-bottom: 2rem;
    }
    h2 {
      color: #0f766e;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 0.5rem;
      margin-top: 2rem;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      margin-bottom: 1rem;
      padding: 0.5rem 0;
      border-bottom: 1px solid #f1f5f9;
    }
    a {
      color: #0f766e;
      text-decoration: none;
      font-weight: 500;
    }
    a:hover {
      text-decoration: underline;
    }
    .date {
      color: #64748b;
      font-size: 0.9rem;
      margin-top: 0.25rem;
    }
  </style>
</head>
<body>
  <h1>Complete Blog Post List</h1>
`;

  // Add posts to HTML by category
  for (const category of categories) {
    const categoryPosts = postsByCategory[category];
    if (categoryPosts.length) {
      const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
      htmlContent += `  <h2>${categoryName} Articles</h2>\n  <ul>\n`;
      
      categoryPosts.forEach(post => {
        const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        htmlContent += `    <li>\n      <a href="https://uniformsa.com/blog/${post.slug}">${post.title}</a>\n      <div class="date">${formattedDate}</div>\n    </li>\n`;
      });
      
      htmlContent += `  </ul>\n\n`;
    }
  }

  htmlContent += `</body>\n</html>`;

  // Write to files
  fs.writeFileSync(markdownFile, markdownContent, 'utf8');
  fs.writeFileSync(htmlFile, htmlContent, 'utf8');

  console.log(`Generated blog list in Markdown: ${markdownFile}`);
  console.log(`Generated blog list in HTML: ${htmlFile}`);
  console.log(`Total blog posts: ${allPosts.length}`);
}

// Run the main function
generateBlogList().catch(error => console.error('Error generating blog list:', error)); 