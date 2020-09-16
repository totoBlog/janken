let jankenRed = Math.floor(Math.random() * 3 + 1);
let jankenWhite = Math.floor(Math.random() * 3 + 1);

if(jankenRed === 1){
  let guRed = 1;
}
else if(jankenRed === 2){
  let chokiRed = 2;
  document.getElementById("red").classList.remove("fa-hand-rock");
  document.getElementById("red").classList.add("fa-hand-scissors");
}
else {
  let paRed = 3;
  document.getElementById("red").classList.remove("fa-hand-rock");
  document.getElementById("red").classList.add("fa-hand-paper");
}

if(jankenWhite === 1){
  let guWhite = 1;
}
else if(jankenWhite === 2){
  let chokiWhite = 2;
  document.getElementById("white").classList.remove("fa-hand-rock");
  document.getElementById("white").classList.add("fa-hand-scissors");
}
else {
  let paWhite = 3;
  document.getElementById("white").classList.remove("fa-hand-rock");
  document.getElementById("white").classList.add("fa-hand-paper");
}

if(jankenRed === 1 && jankenWhite === 2 || jankenRed === 2 && jankenWhite === 3 || jankenRed === 3 && jankenWhite === 1) {
  document.querySelector("h3").innerHTML = "❤　赤組の勝ち";
  document.querySelector("h3").style.color = "red";
}
else if(jankenWhite === 1 && jankenRed === 2 || jankenWhite === 2 && jankenRed === 3 || jankenWhite === 3 && jankenRed === 1) {
  document.querySelector("h3").innerHTML = "白組の勝ち　❤";
}
else {
  document.querySelector("h3").innerHTML = "❤　あいこ　❤";
  document.querySelector("h3").style.color = "#f3c623";
}
