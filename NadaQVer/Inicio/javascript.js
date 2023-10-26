var indice = 0;
// Wait for the document to be ready
$(document).ready(function () {
  // Con la variable indice cambia el puntito inicial a blanco
  $(".paginacion li").eq(indice).css("background-color", "white");
  // Se añade un listener al click
  $(".paginacion li").click(function () {
    // Se almacena en el indice la posicion de la pagina clicada
    indice = $(this).index();
    // pone todos los puntitos en rosa
    $(".paginacion li").css("background-color", "#E451E9");
    // pone el actual en blanco
    $(this).css("background-color", "white");
    // esconde todas las diapositivas
    $(".slide").hide();
    // muestra solo la actual
    $(".slide").eq(indice).css("display", "flex").hide().fadeIn();
  });
  // Añades el click al boton de la derecha
  $(".derecha").click(function () {
    // asegura que la siguiente diapositiva no exceda el limite actual
    indice++;
    if (indice > 4) {
      indice = 0;
    }
    $(".slide").hide();
    $(".slide").eq(indice).css("display", "flex").hide().fadeIn();
    $(".paginacion li").css("background-color", "#E451E9");
    $(".paginacion li").eq(indice).css("background-color", "white");
  });
  // lo mismo que el de la derecha
  $(".izquierda").click(function () {
    // comprueba que no baje de cero
    indice--;
    if (indice < 0) {
      indice = 4;
    }
    $(".slide").hide();
    $(".slide").eq(indice).css("display", "flex").hide().fadeIn();
    $(".paginacion li").css("background-color", "#E451E9");
    $(".paginacion li").eq(indice).css("background-color", "white");
  });
});

$("#img-boton-login").click(function () {
  // assumes element with id='img-boton-login'
  $("#login-aviso-id").fadeToggle();
});

document.getElementById("inicio-de-sesion").onclick = function () {
  window.open(
    "../Login/login.html",
    "_blank" // <- This is what makes it open in a new window.
  );
};

document.getElementById("visitar-sala-1").onclick = function () {
  window.open(
    "../Sala 1/sala1.html",
    "_blank" // <- This is what makes it open in a new window.
  );
};

document.getElementById("visitar-sala-2").onclick = function () {
  window.open(
    "../Sala 2/sala2.html",
    "_blank" // <- This is what makes it open in a new window.
  );
};

document.getElementById("visitar-sala-3").onclick = function () {
  window.open(
    "../Sala 3/sala3.html",
    "_blank" // <- This is what makes it open in a new window.
  );
};

document.getElementById("visitar-sala-4").onclick = function () {
  window.open(
    "../Sala 4/sala4.html",
    "_blank" // <- This is what makes it open in a new window.
  );
};

document.getElementById("visitar-sala-5").onclick = function () {
  window.open(
    "../Sala 5/sala5.html",
    "_blank" // <- This is what makes it open in a new window.
  );
};

function checkRegistro(form) {
  password1 = form.password1.value; // le decimos que password1 es igual al
  // valor del input con el name password1 del form
  password2 = form.password2.value;
  nombreyapellido = form.nombreyapellidos.value; // le decimos que nombreyapellido es igual al
  // valor del input con el name nombreyapellidos del form
  // Si no ponemos nada en el input del nombre y apellidos
  if (nombreyapellido == "") {
    alert("Porfavor escribe tu nombre y apellido/s"); // muestra una alerta
  }
  // Si no ponemos nada en el input de la contraseña
  if (password1 == "")
    alert("Por favor, introduzca la contraseña"); // muestra una alerta
  // Si no ponemos nada en el input de repetir contraseña
  else if (password2 == "")
    alert("Por favor, introduzca la contraseña de confirmación");
  // muestra una alerta
  // Si las dos contraseñas no son iguales
  else if (password1 != password2) {
    alert("La contraseña no coincide: Por favor, inténtelo de nuevo..."); // muestra una alerta
    return false; // devuelve false para que cancele la accion del submit
  }
  // Si la casilla no esta marcada
  if (document.getElementById("terms-id").checked == false) {
    alert("Por favor acepte los terminos y condiciones."); // muestra una alerta
  }

  // Si todo esta bien
  else {
    window.open("../Login/registro_aviso.html"); // Nos lleva a otra pagina
    return true; // return true para que el submit funcione
  }
}

function validarContacto() {
  var a =
    document.forms["contacto-form"]["nombre-apellidos"]
      .value; /* Crea una variable con el valor de la id del input */
  var c =
    document.forms["contacto-form"]["mensaje"]
      .value; /* Crea una variable con el valor de la id del input */
  if (
    !a ||
    !c ||
    document.getElementById("correo").value ==
      "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$" || // verifica que el valor de entrada sea un loquesea@loquesea.loquesea
    document.getElementById("terms-id").checked == false // si la casilla esta marcada o no
  ) {
    /* Comprueba que las variables a b c si estan vacias o no y si el input checkbox esta en 
    false (osea sin darle) */
    alert(
      "Porfavor, rellena los campos vacíos"
    ); /* Si alguna de las variables de antes esta vacia o el checkbox esta en false, 
    entonces envia mensaje de rellenar campos y return false para que no envie la info */
    return false;
  } else {
    window.open("../Contacto/contacto_aviso.html");
    /* Si todas las varibles (osea los inputs) estan completos y el checbox esta en true (osea le ha dado) 
    entonces te envia a la otra pagina y return true para enviar la info */
    return true;
  }
}

function entrarCuenta() {
  var var1 = document.getElementById("nombre-apellido-login-id").value; /* crea una variable con el id del 
  input extranyendo el valor con el .value */
  var var2 = document.getElementById("contrasena-login").value;

  if (var1 !== "Juan Rivas") { /* comprueba que la variable1 no es igual a Juan Rivas */
  } else if (var2 !== "profedameel10porfa") { /* Además, comprueba que la variable2 no es igual a
  profedameel10porfa */
    alert("Datos incorrectos, vuelva a intentarlo");/* si lo anterior es cierto envia alerta */
    return false; /* si lo anterior es cierto return false */
  } else {
    window.location.href = "../logueado/Inicio/Inicio.html"; /* Si lo anterior es falso, te envia a la pagina */
    /* location.href = "../logueado/Inicio/Inicio.html"; */
    return true; /*  si lo anterior es falso, return true */
  }
}
