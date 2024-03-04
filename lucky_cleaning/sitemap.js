const { SitemapStream, streamToPromise } = require('sitemap');
const axios = require('axios');
const fs = require('fs');

const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about-us', changefreq: 'weekly', priority: 0.8 }, // Added About page
  { url: '/services', changefreq: 'weekly', priority: 0.8 }, // Added Services page
  { url: '/contact-us', changefreq: 'weekly', priority: 0.8 },// Added contact-us page
  { url: '/404', changefreq: 'weekly', priority: 0.8 }, // Added 404 page
  // Add more URLs here if needed
];

const generateSitemapXml = async () => {
  const links = [];

  for (const url of urls) {
    const { data } = await axios.get('https://cleaningwithlucky.com' + url.url); // Fetching complete URLs

    if (data && data.match && data.match(/<title>/)) {
      links.push({
        url: url.url,
        changefreq: url.changefreq,
        priority: url.priority,
        lastmod: new Date().toISOString().split('T')[0],
      });
    }
  }

  const sitemapStream = new SitemapStream({ hostname: 'https://cleaningwithlucky.com' });

  links.forEach(link => {
    sitemapStream.write(link);
  });

  sitemapStream.end();

  const sitemapXML = await streamToPromise(sitemapStream).then(data => data.toString());

  fs.writeFileSync('public/sitemap.xml', sitemapXML);
};

generateSitemapXml();
