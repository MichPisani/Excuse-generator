/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function excuseGenerator() {
    /* Primero declaramos las variables (array) */

    let who = ["my dog", "my partner", "my little brother", "my uncle"];
    let verb = ["threw", "broke", "shattered"];
    let object = ["my homework", "my computer", "my notebook", "my pendrive"];
    let when = ["this morning", "yesterday night", "last weekend"];

    /* Elegir una opción de cada array */
    let whoIndex = Math.floor(Math.random() * who.length);
    let verbIndex = Math.floor(Math.random() * verb.length);
    let objectIndex = Math.floor(Math.random() * object.length);
    let whenIndex = Math.floor(Math.random() * when.length);

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
