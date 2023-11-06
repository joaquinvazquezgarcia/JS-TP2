let i = parseInt(prompt("Ingrese un numero no mayor a 50 y no menor a 0"));

while (isNaN(i) || i < 0 || i > 50) {
    alert("No se pueden introducir letras, numeros menores a 0, numeros mayores a 50, ni dejar el recuadro vacío.")
    i = parseInt(prompt("Ingrese un numero no mayor a 50 y no menor a 0"));
}


for (i; i > 0; i--) {
    for (let h = 0; h < i; h++) {
        document.write(i)
    }
    document.write("<br  />")
}