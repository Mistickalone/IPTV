const http = require('http');
const https = require('https');

const USERNAME = "337873717105";
const PASSWORD = "775558539494";
const PROVIDER_URL = "http://freeiptv.ottc.xyz:80/get.php?username=" + USERNAME + "&password=" + PASSWORD + "&type=m3u_plus&output=ts";

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/x-mpegurl');
  res.setHeader('Transfer-Encoding', 'chunked');
  http.get(PROVIDER_URL, (providerRes) => {
    providerRes.pipe(res);
  });
}).listen(process.env.PORT || 3000);
