function numeroPrimo(a) {
    if (a <= 1) return "No es primo"; // Los números <= 1 no son primos
    for (let i = 2; i < a; i++) {
        if (a % i === 0) return "No es primo"; // Si hay un divisor, no es primo
    }
    return "Es primo"; // Si no hay divisores, es primo
}

module.exports = {numeroPrimo}

