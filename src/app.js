/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello rigo from the console! ");
};

function generateExcuse() {
  let who = ["The dog", "The fish", "The neighbor", "My grandma"];
  let action = ["ate", "broke", "burned", "crushed"];
  let what = ["my phone", "your car", "my keys", "my homework"];
  let when = [
    "yesterday",
    "during my lunch",
    "when I was taking a nap",
    "while I was in the shower"
  ];

  return (
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)]
  );
}
