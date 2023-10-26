$("#img-boton-login").click(function () {
  // assumes element with id='img-boton-login'
  $("#login-aviso-id").fadeToggle();
});

document.getElementById("inicio-de-sesion2").onclick = function () {
  window.open(
    "../../Login/login.html",
    "_blank" // <- This is what makes it open in a new window.
  );
};

document.getElementById("boton-contacto-id").onclick = function () {
  window.open(
    "../../Contacto/contacto.html",
    "_blank" // <- This is what makes it open in a new window.
  );
};
