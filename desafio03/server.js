import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end('Hola, cree un servidor y conecta correctamente')
})

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})