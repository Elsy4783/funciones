// 1. PAR O IMPAR//

function parImpar(num) {
  var num;
  num = prompt("Ingrese un número y el programa le dirá si es Par o Impar");
  if (num % 2 == 0) {
    console.log("El número  " + num + " es Par");
  } else {
    document.write("El número  " + num + " es Impar");
  }
}

parImpar();

// 2. MAYOR O MENOR//

function mayorOmenor(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(numero1 + " es Mayor que " + numero2);
  } else if (numero1 < numero2) {
    console.log(numero1 + " es Menor que " + numero2);
  } else {
    console.log("Los números ingresados con Iguales");
  }
}

mayorOmenor(5, 7);
