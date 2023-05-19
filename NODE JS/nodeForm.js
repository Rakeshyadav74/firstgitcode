const http=require('http');
const server=http.createServer((req,res)=>{
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head> <title>node js response</title></head>');
    res.write('<body><input type="text"><button>Send</button></body>');
    res.write('</html>')
    res.end();

});
server.listen(4000);