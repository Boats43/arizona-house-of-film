const fs = require('fs');
const path = require('path');
const glob = require('glob') || (() => {
  // fallback manual glob
  function walkDir(dir, ext, results = []) {
    fs.readdirSync(dir).forEach(f => {
      const full = path.join(dir, f);
      if (fs.statSync(full).isDirectory()) walkDir(full, ext, results);
      else if (f.endsWith(ext)) results.push(full);
    });
    return results;
  }
  return { sync: (pattern) => walkDir(pattern.replace('/**/*.jsx',''), '.jsx') };
})();

const PAGES_DIR = path.join(__dirname, 'src', 'pages');

function walkDir(dir, results = []) {
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walkDir(full, results);
    else if (f.endsWith('.jsx')) results.push(full);
  });
  return results;
}

const pages = walkDir(PAGES_DIR);

const missingHelmet = [];
const missingCanonical = [];
const missingDescription = [];
const missingSchema = [];
const missingOG = [];
const missingImages = [];
const titleMap = {};
const noindexMissing = [];

// CDN patterns that are known broken
const BROKEN_CDN = 'horizons-cdn.hostinger.com';

pages.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');

  // Check helmet import (react-helmet or react-helmet-async)
  const hasHelmet = /from ['"]react-helmet(-async)?['"]/.test(content);
  if (!hasHelmet) missingHelmet.push(file);

  // Check canonical
  const hasCanonical = /rel=["']canonical["']/.test(content);
  if (hasHelmet && !hasCanonical) missingCanonical.push(file);

  // Check meta description
  const hasDescription = /name=["']description["']/.test(content);
  if (hasHelmet && !hasDescription) missingDescription.push(file);

  // Check schema JSON-LD
  const hasSchema = /application\/ld\+json/.test(content);
  if (hasHelmet && !hasSchema) missingSchema.push(file);

  // Check OpenGraph - og:title is sufficient signal
  const hasOG = /property=["']og:title["']/.test(content);
  if (hasHelmet && !hasOG) missingOG.push(file);

  // Extract title - only flag LITERAL string {pageTitle} as broken
  // (JSX interpolation like {pageTitle} where pageTitle is a variable is fine)
  // We detect truly broken titles: <title>{pageTitle}</title> where pageTitle 
  // is NOT defined as a const/let/var in the file
  const titleMatch = content.match(/<title>\{(\w+)\}<\/title>/);
  if (titleMatch) {
    const varName = titleMatch[1];
    // Check if this variable is actually defined in the file
    const varDefined = new RegExp(`(const|let|var|})\\\\s*${varName}[\\\\s,;{]`).test(content);
    if (!varDefined) {
      // Truly broken - variable not defined
      if (!titleMap['BROKEN_TITLE']) titleMap['BROKEN_TITLE'] = [];
      titleMap['BROKEN_TITLE'].push(file);
    }
    // If variable IS defined, title is fine - don't flag it
  } else if (titleMatch === null) {
    // Check for hardcoded duplicate titles
    const hardcodedTitle = content.match(/<title>([^{<][^<]*)<\/title>/);
    if (hardcodedTitle) {
      const t = hardcodedTitle[1].trim();
      if (!titleMap[t]) titleMap[t] = [];
      titleMap[t].push(file);
    }
  }

  // Check missing images - skip iframes, skip og: meta, only check img src and CSS url()
  const imgMatches = content.matchAll(/<img[^>]+src=["']([^"']+)["']/g);
  for (const m of imgMatches) {
    const src = m[1];
    if (src.includes(BROKEN_CDN)) {
      missingImages.push({ file, missing: src });
    } else if (src.startsWith('https://arizonahouseoffilm.com/images/') || src.startsWith('/images/')) {
      // Check if local /images/ file exists in public
      const imgPath = src.startsWith('/') ? src : src.replace('https://arizonahouseoffilm.com','');
      const localPath = path.join(__dirname, 'public', imgPath);
      if (!fs.existsSync(localPath)) {
        missingImages.push({ file, missing: src });
      }
    }
  }

  // Check for noindex on 404 page
  const is404 = file.endsWith('NotFound.jsx');
  if (is404) {
    const hasNoindex = /noindex/.test(content);
    if (!hasNoindex) noindexMissing.push(file);
  }
});

// Find duplicate hardcoded titles only
const duplicateTitles = {};
Object.entries(titleMap).forEach(([title, files]) => {
  if (files.length > 1 || title === 'BROKEN_TITLE') {
    duplicateTitles[title] = files;
  }
});

console.log('\n================ AHOF SEO AUDIT ================');
console.log(`Pages scanned: ${pages.length}\n`);

console.log('Missing Helmet:');
console.table(missingHelmet);

console.log('\nMissing Canonical:');
console.table(missingCanonical);

console.log('\nMissing Meta Description:');
console.table(missingDescription);

console.log('\nMissing Schema JSON-LD:');
console.table(missingSchema);

console.log('\nMissing OpenGraph:');
console.table(missingOG);

console.log('\nMissing/Broken Image Files:');
console.table(missingImages);

if (Object.keys(duplicateTitles).length > 0) {
  console.log('\nDuplicate or Broken Titles:');
  console.table(duplicateTitles);
} else {
  console.log('\nDuplicate Titles: ✅ None found');
}

console.log('\n404 Pages Missing NOINDEX:');
console.table(noindexMissing);

console.log('\n=============== END OF REPORT ==================\n');

