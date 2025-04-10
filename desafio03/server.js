import http from "http";
import {alumno, platformOS} from "./index.js";

const PORT = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/' && req.method === 'GET'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('Página de inicio');
    }
    if(req.url === '/alumno' && req.method === 'GET'){
        res.writeHead(200, {'content-type': 'application/json'});
        res.write('El alumno es:');
        res.end(JSON.stringify(alumno));
        return;
    }
    if(req.url === '/info' && req.method === 'GET'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('Info del sistema operativo:');
        res.end(platformOS);
        return;
    } else {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("Ruta no encontrada");
    }
})

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})