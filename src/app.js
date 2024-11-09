/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function excuseGenerator() {
    /* Primero declaramos las variables (array) */

    let who = ["my dog", "my partner", "my little brother"];
    let verb = ["ate", "threw", "broke"];
    let object = ["my homework", "my computer", "my notebook", "my pendrive"];
    let when = ["this morning", "yesterday night"];

    /* Elegir una opción de cada array */
    let whoIndex = Math.floor(Math.random() * 3);
    let verbIndex = Math.floor(Math.random() * 3);
    let objectIndex = Math.floor(Math.random() * 4);
    let whenIndex = Math.floor(Math.random() * 2);

    let finalExcuse =
      "I'm so sorry, " +
      who[whoIndex] +
      " " +
      verb[verbIndex] +
      " " +
      object[objectIndex] +
      " " +
      when[whenIndex];

    return finalExcuse;
  }

  /* Ahora lo queremos mostrar en la pagina */
  let excuse = document.getElementById("excuse");
  excuse.textContent = excuseGenerator();
};
