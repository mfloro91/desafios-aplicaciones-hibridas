// Leyendo datos alumno

import { readFile } from "fs/promises"

async function readFiles() {
    try {
        const data = await readFile('datosAlumno.txt', 'utf8');
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

readFiles()

// Devolviendo info del Sistema Operativo

import os from "os"

const arquitecturaOS = os.arch();
const cpuOS = os.cpus();
const platformOS = os.platform();

console.log(arquitecturaOS, cpuOS, platformOS);






