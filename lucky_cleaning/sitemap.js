const { SitemapStream, streamToPromise } = require('sitemap');
const { createReadStream, createWriteStream } = require('fs');

// Define the URLs for the sitemap
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about-us', changefreq: 'weekly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact-us', changefreq: 'weekly', priority: 0.8 },
  { url: '/404', changefreq: 'weekly', priority: 0.8 },
  // Add more URLs as needed
];

// Function to generate the sitemap XML
const generateSitemap = async () => {
  const sitemapStream = new SitemapStream({ hostname: 'https://cleaningwithlucky.com' });

  // Add URLs to the sitemap
  urls.forEach(url => {
    sitemapStream.write(url);
  });

  sitemapStream.end();

  // Convert sitemap stream to a string
  const sitemapXML = await streamToPromise(sitemapStream).then(data => data.toString());

  // Write sitemap XML to a file
  const writeStream = createWriteStream('public/sitemap.xml');
  writeStream.write(sitemapXML);
  writeStream.end();
};

generateSitemap();
