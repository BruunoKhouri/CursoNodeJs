import fs from 'fs';
import http from 'http';

const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        return res.end();
    });
});

server.listen(port, () => {
    console.log('server rodando:', port);
});