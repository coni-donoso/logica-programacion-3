// Función para calcular el factorial de un número
function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calcularFactorial(n - 1);
}

// Función para solicitar un número al usuario y mostrar el resultado
function solicitarNumero() {
    let numeroEntrada = prompt("Por favor, ingrese un número:");

    // Validar entrada
    if (isNaN(numeroEntrada) || numeroEntrada === null || numeroEntrada.trim() === "") {
        alert("Por favor, ingrese un número válido.");
        solicitarNumero();
        return;
    }

    // Convertir a número
    let numero = Number(numeroEntrada);

    if (!Number.isInteger(numero) || numero < 0) {
        alert("Por favor, ingrese un número entero positivo.");
        solicitarNumero();
        return;
    }

    // Calcular factorial
    let resultadoFactorial = calcularFactorial(numero);
    
    // Mostrar resultado en el DOM
    document.getElementById('resultado').textContent = `El factorial de ${numero} es ${resultadoFactorial}.`;
}

// Llamar a la función para solicitar el número cuando se carga la página
solicitarNumero();