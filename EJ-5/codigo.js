const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
let numero = parseInt(prompt("Ingrese un número de DNI y se le asignará una letra."));
let continuar = true;
let resultado, letra;

while (continuar) {

    if (numero < 0 || numero > 99999999) {
        alert("El numero no puede ser menor a 0 ni mayor a 99999999")
    } else if (isNaN(numero)) {
        alert("Solamente puede ingresar numeros, evite las letras, caracteres especiales o dejar el espacio vacío.")
    } else {
        resultado = numero % 23;

        letra = letras[resultado];
        alert("La letra asignada al DNI " + numero + " es: " + letra)
    }

    continuar = confirm("Desea continuar?");
    if (continuar) {
        numero = parseInt(prompt("Ingrese un número de DNI y se le asignará una letra."))
    }
}
