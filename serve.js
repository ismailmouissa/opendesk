// Optional local server: `node serve.js` then open http://localhost:4173
// (You can also just double-click index.html — no server is required.)
const http = require('http'), fs = require('fs'), path = require('path');
const port = process.env.PORT || 4173;
http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    if (err) { res.writeHead(500); return res.end('Cannot read index.html'); }
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store'});
    res.end(data);
  });
}).listen(port, () => console.log('OpenDesk running at http://localhost:' + port));
