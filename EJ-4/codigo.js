let continuar = true;
let numero;
let suma = 0;

while (continuar) {
    numero = parseInt(prompt("Ingrese un numero"));

    if (isNaN(numero)) {
        alert("No se ingresó un número válido")
    } else {
        suma = suma + numero;
    }

    continuar = confirm("Desea continuar añadiendo numeros?")
}

document.write("La suma total de los números que ingresó es de: " + suma);