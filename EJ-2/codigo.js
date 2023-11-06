let nota = parseInt(prompt("Indique su nota"));

while (nota < 0 || nota > 10 || isNaN(nota)) {
    if (isNaN(nota)) {
        alert("Introduce un número válido");
    } else {
        alert("Número erróneo");
    }
    nota = parseInt(prompt("Indique su nota"));
}

switch (nota) {
    case 0:
    case 1:
    case 2:
        alert("Muy deficiente");
        break;

    case 3:
    case 4:
        alert("Insuficiente");
        break;

    case 5:
    case 6:
        alert("Suficiente");
        break;

    case 7:
        alert("Bien");
        break;

    case 8:
    case 9:
        alert("Notable");
        break;

    case 10:
        alert("Sobresaliente");
        break;

    default:
        alert("Número erróneo");
        break;
}