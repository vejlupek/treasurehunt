import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3001;
const BASE = '/treasurehunt';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png':  'image/png',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff2':'font/woff2',
  '.woff': 'font/woff',
  '.ttf':  'font/ttf',
  '.txt':  'text/plain',
  '.xml':  'application/xml',
};

http.createServer((req, res) => {
  let url = req.url.split('?')[0];

  // Redirect root → /treasurehunt/
  if (url === '/') {
    res.writeHead(302, { Location: BASE + '/' });
    res.end();
    return;
  }

  // Strip /treasurehunt prefix
  if (url.startsWith(BASE + '/')) {
    url = url.slice(BASE.length);
  } else if (url === BASE) {
    url = '/';
  }

  // Resolve file path
  let filePath = path.join(__dirname, url);

  // Directory → try index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // Fallback: 404.html
  if (!fs.existsSync(filePath)) {
    filePath = path.join(__dirname, '404.html');
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(fs.readFileSync(filePath));
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';

  res.writeHead(200, { 'Content-Type': mime });
  res.end(fs.readFileSync(filePath));
}).listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}${BASE}/`);
});
