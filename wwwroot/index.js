var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<B>Server Information</B><br>");
  res.write('<P></P>');
  res.write('Index<br>');
  res.write('&nbsp;&nbsp;&nbsp;&nbsp;Port:8080<br>');
  res.write('<P></P>');
  res.write('Ftp Server<br>');
  res.write('&nbsp;&nbsp;&nbsp;&nbsp;Port:2121<br>');
  res.write('&nbsp;&nbsp;&nbsp;&nbsp;User:anonymous/<br>');
  res.write('<P></P>');
  res.write('Blog<br>');
  res.write('&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.julong.tk:3000">http://www.julong.tk:3000</a><br>');
  res.end('<br><br><br><br>Julong');
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');
