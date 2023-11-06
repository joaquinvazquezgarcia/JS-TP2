
let edad = parseInt(prompt("Ingrese su edad."));

while (isNaN(edad) || edad < 0) {
    alert("No ingresó un numero valido, por favor intente nuevamente.")
    edad = parseInt(prompt("Ingrese su edad."));
}

if (edad >= 18) {
    document.write("Puede conducir")
}
else {
    document.write("Aún no puede conducir")
}
