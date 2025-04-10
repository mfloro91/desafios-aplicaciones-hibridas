// Leyendo datos alumno

import { readFile } from "fs/promises"

let alumno = [];

async function readFiles() {
    try {
        const data = await readFile('datosAlumno.txt', 'utf8');
        alumno.push(data)
        console.log(alumno);
    } catch (err) {
        console.log(err)
    }
}

readFiles()

export {alumno};

// Devolviendo info del Sistema Operativo

import os from "os"

//const arquitecturaOS = os.arch();
//const cpuOS = os.cpus();
const platformOS = os.platform();

export {platformOS};


