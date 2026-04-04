const http = require('http');

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('#EXTM3U\n#EXTINF:-1,Test\nhttp://test.com/stream.ts');
}).listen(process.env.PORT || 3000);
