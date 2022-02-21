/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Fecha publicación enunciado: 17/01/22
 * Fecha publicación resolución: 24/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const divisibleBy = (number, base) => number % base == 0;

const isPrimo = (n) => {
  if (n == 1) return false;

  let result = true;

  for (let index = 2; index < n; index++) {
    if (divisibleBy(n, index)) {
      result = false;
      break;
    }
  }

  return result;
};

for (let number = 1; number <= 100; number++) {
  if (isPrimo(number)) {
    console.log(number);
  }
}
