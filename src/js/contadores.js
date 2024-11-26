// Configuración del contador
const targetPercentage_1 = 98; // Cambia esto al porcentaje deseado
const targetPercentage_2 = 92;
const targetPercentage_3 = 88;
const targetPercentage_4 = 77;
const targetPercentage_5 = 43;
const targetPercentage_6 = 37;

const duration = 2000; // Duración en milisegundos (2 segundos)
const intervalTime = 50; // Tiempo entre incrementos en milisegundos

const counterElement_1 = document.getElementById("counter_1");
let currentPercentage_1 = 0;

const counterElement_2 = document.getElementById("counter_2");
let currentPercentage_2 = 0;

const counterElement_3 = document.getElementById("counter_3");
let currentPercentage_3 = 0;

const counterElement_4 = document.getElementById("counter_4");
let currentPercentage_4 = 0;

const counterElement_5 = document.getElementById("counter_5");
let currentPercentage_5 = 0;

const counterElement_6 = document.getElementById("counter_6");
let currentPercentage_6 = 0;

// Cálculo del incremento por cada intervalo
const step_1 = (targetPercentage_1 / duration) * intervalTime;
const step_2 = (targetPercentage_2 / duration) * intervalTime;
const step_3 = (targetPercentage_3 / duration) * intervalTime;
const step_4 = (targetPercentage_4 / duration) * intervalTime;
const step_5 = (targetPercentage_5 / duration) * intervalTime;
const step_6 = (targetPercentage_6 / duration) * intervalTime;

const interval = setInterval(() => {
  currentPercentage_1 += step_1;

  // Redondear y actualizar el valor en pantalla
  counterElement_1.textContent = `${Math.min(
    Math.round(currentPercentage_1),
    targetPercentage_1
  )}%`;

  // Detener el intervalo cuando se alcance el porcentaje objetivo
  if (currentPercentage_1 >= targetPercentage_1) {
    clearInterval(interval);
  }
}, intervalTime);

const interva2 = setInterval(() => {
  currentPercentage_2 += step_2;

  // Redondear y actualizar el valor en pantalla
  counterElement_2.textContent = `${Math.min(
    Math.round(currentPercentage_2),
    targetPercentage_2
  )}%`;

  // Detener el intervalo cuando se alcance el porcentaje objetivo
  if (currentPercentage_2 >= targetPercentage_2) {
    clearInterval(interva2);
  }
}, intervalTime);

const interva3 = setInterval(() => {
  currentPercentage_3 += step_3;

  // Redondear y actualizar el valor en pantalla
  counterElement_3.textContent = `${Math.min(
    Math.round(currentPercentage_3),
    targetPercentage_3
  )}%`;

  // Detener el intervalo cuando se alcance el porcentaje objetivo
  if (currentPercentage_3 >= targetPercentage_3) {
    clearInterval(interva3);
  }
}, intervalTime);

const interva4 = setInterval(() => {
  currentPercentage_4 += step_4;

  // Redondear y actualizar el valor en pantalla
  counterElement_4.textContent = `${Math.min(
    Math.round(currentPercentage_4),
    targetPercentage_4
  )}%`;

  // Detener el intervalo cuando se alcance el porcentaje objetivo
  if (currentPercentage_4 >= targetPercentage_4) {
    clearInterval(interva4);
  }
}, intervalTime);

const interva5 = setInterval(() => {
  currentPercentage_5 += step_5;

  // Redondear y actualizar el valor en pantalla
  counterElement_5.textContent = `${Math.min(
    Math.round(currentPercentage_5),
    targetPercentage_5
  )}%`;

  // Detener el intervalo cuando se alcance el porcentaje objetivo
  if (currentPercentage_5 >= targetPercentage_5) {
    clearInterval(interva5);
  }
}, intervalTime);

const interva6 = setInterval(() => {
  currentPercentage_6 += step_6;

  // Redondear y actualizar el valor en pantalla
  counterElement_6.textContent = `${Math.min(
    Math.round(currentPercentage_6),
    targetPercentage_6
  )}%`;

  // Detener el intervalo cuando se alcance el porcentaje objetivo
  if (currentPercentage_6 >= targetPercentage_6) {
    clearInterval(interva6);
  }
}, intervalTime);
