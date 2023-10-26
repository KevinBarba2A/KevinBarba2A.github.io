function checkRegistro(form) {
  password1 = form.password1.value;
  password2 = form.password2.value;
  nombreyapellido = form.nombreyapellidos.value;

  // If password not entered
  if (nombreyapellido == "") {
    alert("Porfavor escribe tu nombre y apellido/s");
  }

  if (password1 == "") alert("Por favor, introduzca la contraseña");
  // If confirm password not entered
  else if (password2 == "")
    alert("Por favor, introduzca la contraseña de confirmación");
  // If Not same return False.
  else if (password1 != password2) {
    alert("La contraseña no coincide: Por favor, inténtelo de nuevo...");
    return false;
  }
  if (document.getElementById("terms-id").checked == false) {
    alert("Por favor acepte los terminos y condiciones.");
  }

  // If same return True.
  else {
    window.open("../Login/registro_aviso.html");
    return true;
  }
}
