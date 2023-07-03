// 1. PAR O IMPAR

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

// 2. MAYOR O MENOR

function mayorOmenor(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(numero1 + " es Mayor que " + numero2);
  } else if (numero1 < numero2) {
    console.log(numero1 + " es Menor que " + numero2);
  } else {
    console.log("Los números ingresados con Iguales");
  }
}
console.log("XXXXXXXXXXXXXXXXXXXXXX 2. MAYOR O MENOR XXXXXXXXXXXXXXXXXXXXXX");

mayorOmenor(5, 7);

console.log("XXXXXXXXXXXXXXXXXXXXXX 2. MAYOR O MENOR XXXXXXXXXXXXXXXXXXXXXX");

mayorOmenor(9, 9);

//3. MULTIPLO DE 5

console.log("XXXXXXXXXXXXXXXXX 3. MULTIPLO DE 5 XXXXXXXXXXXXXXXXXXXXXXXXXXX");

function MultiploDeCinco(num) {
  if (num % 5 === 0) {
    console.log(num + " es múltiplo de 5.");
  } else {
    console.log(num + " No es múltiplo de 5.");
  }
}

MultiploDeCinco(25);

MultiploDeCinco(8);

// 4. IMPRIMIR NUMEROS DESDE CERO HASTA NUMERO DADO

console.log("XXXX 4. IMPRIMIR NUMEROS DESDE CERO HASTA NUMERO DADO XXXXXXX");

const imprNumHasta = (num) => {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
};

imprNumHasta(3);

// 5. IMPRIMIR PALABRA

console.log("XXXXXXXXXXXXX 5. IMPRIMIR PALABRA XXXXXXXXXXXXXXXXXXXXXXXXXX");

function imprimirPalabra(palabra, num) {
  for (let i = 0; i < num; i++) {
    console.log(palabra);
  }
}

imprimirPalabra("hola", 2);

// 6. IMPRIMIR ARRAYS

console.log("XXXXXXXXXXXXXXX 6. IMPRIMIR ARRAYS XXXXXXXXXXXXXXXXXXXXXXXXXX");

function imprimirArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

const paises = ["Venezuela", "Argentina", "Chile", "Colombia", "Brasil"];
imprimirArray(paises);

console.log(
  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
);

const nombres = ["Juan", "María", "Pedro"];
imprimirArray(nombres);

// 7. IMPRIMIR UN ARRAYS EXCEPTO LA 5TA. POSICIÓN

console.log("XXX 7. IMPRIMIR UN ARRAYS EXCEPTO LA 5TA. POSICIÓN XXXXXXXXXX");

function imprArraySinQuintaPosic(array) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
}
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprArraySinQuintaPosic(num);

// 8. ARRAY MULTIPLOCADO POR UN NUMERO

console.log("XXX 8. ARRAY MULTIPLOCADO POR UN NUMERO XXXXXXXXXX");

function multiplicarArray(array, numero) {
  for (let i = 0; i < array.length; i++) {
    const resultado = array[i] * numero;
    console.log(resultado);
  }
}
const matriz = [1, 2, 3, 4, 5];
const numero = 2;

multiplicarArray(matriz, numero);
