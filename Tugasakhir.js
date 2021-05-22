function buat_login() {
  var elem = document.getElementById("x");
  elem.parentElement.removeChild(elem);

  var p = document.createElement("p");
  var element = document.getElementsByTagName("div")[0];
  element.appendChild(p)
  p.className = "tulisan_login"
  p.innerHTML = "Silahkan Mendaftar"

  var form = document.createElement("form");
  element.appendChild(form)

  var label = document.createElement("label");
  label.innerHTML= "Nama User";
  form.appendChild(label)

  var input_nama = document.createElement("input");
  input_nama.type = "text";
  input_nama.name = "nama";
  input_nama.className = "form_login";
  input_nama.placeholder ="Nama User..."
  form.appendChild(input_nama);


  var label2 = document.createElement("label");
  label2.innerHTML = "Nomor Handphone";
  form.appendChild(label2);

  var input_nomorHP = document.createElement("input");
  input_nomorHP.type="text";
  input_nomorHP.name= "nomorHP";
  input_nomorHP.className= "form_login";
  input_nomorHP.placeholder= "Nomor Handphone."
  form.appendChild(input_nomorHP);

  var label3 = document.createElement("label");
  label3.innerHTML = "Username";
  form.appendChild(label3);

  var input_username = document.createElement("input");
  input_username.type="username";
  input_username.name= "username";
  input_username.className= "form_login";
  input_username.placeholder= "Username atau email.."
  form.appendChild(input_username);

  var label4 = document.createElement("label");
  label4.innerHTML = "Password";
  form.appendChild(label4);

  var input_password = document.createElement("input");
  input_password.type="password";
  input_password.name= "password";
  input_password.className= "form_login";
  input_password.placeholder= "password.."
  form.appendChild(input_password);

  var tombol= document.createElement("input");
  tombol.type= "submit";
  tombol.className= "tombol_login";
  form.appendChild(tombol);
}
