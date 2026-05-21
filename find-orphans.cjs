const fs = require('fs');
const path = require('path');

function getFiles(dir, ext) {
  let files = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      files = files.concat(getFiles(full, ext));
    } else if (f.endsWith(ext)) {
      files.push(full);
    }
  });
  return files;
}

const pages = getFiles('dist', 'index.html').map(f =>
  f.replace('dist', '').replace('index.html', '').split(path.sep).join('/')
);

const allContent = getFiles('src/pages', '.jsx').map(f =>
  fs.readFileSync(f, 'utf8')
).join('');

const orphans = pages.filter(p =>
  p !== '/' && !allContent.includes(p)
);

orphans.forEach(p => console.log('ORPHAN:', p));
console.log('\nTotal orphans:', orphans.length);
