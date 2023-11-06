let continuar = true;
let cadena;
let frase = "";

while (continuar) {
    cadena = prompt("Ingrese una cadena de texto");
    frase += "-" + cadena;
    continuar = confirm("¿desea continuar?");
}
(frase.includes("--") || frase.includes("null") || frase == "-")
    ? document.write("No se ingresó una cadena de texto.")
    : document.write(frase)