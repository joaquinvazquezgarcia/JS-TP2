let numero = parseInt(prompt("Ingrese un numero no mayor a 50 y no menor a 0"));
let i;

while (isNaN(numero) || numero < 0 || numero > 50) {
    alert("No se pueden introducir letras, numeros menores a 0, numeros mayores a 50, ni dejar el recuadro vacío.")
    numero = parseInt(prompt("Ingrese un numero no mayor a 50 y no menor a 0"));
}


for (i = 0; i < numero; i++) {
    for (let h = 0; h <= i; h++) {
        document.write(h + 1)
    }
    document.write("<br  />")
}