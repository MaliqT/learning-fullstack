// Starting a HTTP server using node.js

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to the node.js home page");
    }

    else if (req.url === '/about') {
        res.end("Here is the about page");
    }

    else {
        res.end(`
            <h1>Oops!</h1>
            <p>We cannot seem to find the page you're looking for</p>
            <a href="/">back home</a>
            `);
    }
});

server.listen(5050);