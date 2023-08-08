let esconder = document.getElementById("btnHide");
let fondo = document.getElementById("btnBg");

// function esconder() {
//   document.getElementById("lista").style.display = "none";
// }

fondo.addEventListener("click", () => {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);

  //   document.body.style.background = bgColor;
  document.getElementById("lista").style.backgroundColor = bgColor;
});
esconder.addEventListener("click", () => {
  document.getElementById("lista").style.display = "none";
});
