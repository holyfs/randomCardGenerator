/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function() {
  //write your code here

  //Funcion de nueva carta cada 10 seg.
  let footer = document.createElement("h3");
  footer.innerHTML =
    "This card will reset every 10 seconds, or you can push this button";
  footer.style.position = "relative";
  footer.style.marginLeft = "25%";
  document.body.appendChild(footer);
  var intervalID = window.setInterval(nuevaCarta, 10000);
  function nuevaCarta() {
    location.reload();
  }

  //numeroDeCarta
  let numero = document.querySelector(".numero");
  let numeroDeCarta = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let numeroRandom = Math.floor(Math.random() * 13);

  //PaloDeCarta
  let paloUp = document.querySelector(".paloUp");
  let paloDown = document.querySelector(".paloDown");
  let tipoDeCarta = ["♦", "♥", "♠", "♣"];
  let tipoRandom = Math.floor(Math.random() * 4);

  //color
  if (tipoDeCarta[tipoRandom] === "♦" || tipoDeCarta[tipoRandom] === "♥") {
    paloUp.classList.add("corazon");
    paloDown.classList.add("corazon");
    numero.classList.add("corazon");
  }

  //Boton
  let button = document.createElement("Button");
  button.innerHTML = "Your new card";
  button.style.position = "absolute";
  button.style.marginLeft = "46%";
  document.body.appendChild(button);
  button.addEventListener("click", event => {
    location.reload();
  });

  //impresiones
  paloUp.innerText = tipoDeCarta[tipoRandom];
  paloDown.innerText = tipoDeCarta[tipoRandom];
  numero.innerText = numeroDeCarta[numeroRandom];
};
