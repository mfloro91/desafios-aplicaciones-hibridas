import express from "express";

const app = express();

const peliculas = [
    { titulo: "El Señor de los Anillos: La Comunidad del Anillo", año: 2001, director: "Peter Jackson" },
    { titulo: "Interstellar", año: 2014, director: "Christopher Nolan" },
    { titulo: "El Padrino", año: 1972, director: "Francis Ford Coppola" },
    { titulo: "La La Land", año: 2016, director: "Damien Chazelle" },
    { titulo: "Parasite", año: 2019, director: "Bong Joon-ho" }
];

console.log(peliculas);

const PORT = 3000;

/*
app.get("/", (req, res) => {
    res.send('Florencia Rossi')
})

app.get("/materia", (req, res) => {
    res.send('Aplicaciones híbridas')
})

app.get("/profesor", (req, res) => {
    res.send('Camila Marcos Galban')
})*/

// Unificando con switch

app.get("/", (req, res) => {
    res.send('Florencia Rossi')
})

app.get("/:route", (req, res) => {
    const { route } = req.params;
    switch (route) {
        case "materia":
            res.send("Aplicaciones híbridas");
            break;
        case "profesor":
            res.send("Camila Marcos Galban");
            break;
        default:
            res.status(404).send("Ruta no encontrada");
    }
});

app.get("/peliculas/:titulo", (req, res) => {
    const pelicula = peliculas.filter(p => p.titulo.toLowerCase().includes(req.params.titulo.toLowerCase()))
    if (pelicula.length === 0) {
        return res.status(404).send('404: Película no encontrada')
    }
    res.json(pelicula)
});


app.listen(PORT, () => console.log("Server running on port http://localhost:3000"));


