const mensajes = [
  "Kamuu yakinn sayangg??",
  "Yakinn bebb??",
  "Yakinn bangett nihh??",
  "Aku janji kirimm papp",
  "Pliss bebb",
  "Akuu cintaa kamuu 99999x",
  "akuu janjii bakalaan jadii yaang terbaikk buatt kamuu",
  "cobaa pikirinn lagii dehh",
  "kamuu sayangg akuu kan??",
  "jangann gituu dongg saayangg",
  "Akuu janjii bakalan berubah kokk",
  "Akuu jaanji bakalann jadii yangg terbaiik buaat kamuu",
  "Pliss bebb",
  "Akuu cintaa kamuu 99999x",
  "Yakinn bebb??",
  "Aku janji kirimm papp",
  "kamu sayang aku kan??",
  "Plisss sayanggg",
  "Oke??",
];

const boton_no = document.getElementById("btn-no");
const boton_yes = document.getElementById("btn-yes");
const boton_whatsapp = document.getElementById("btn-whatsapp");

const mensaje = document.getElementById("mensaje");
const resultado = document.getElementById("resultado");

let count = 1;

boton_no.addEventListener("mouseover", function () {
  let sonido = document.getElementById("miSonido");
  sonido.play();
  const randomX = Math.random() * (window.innerWidth - boton_no.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - boton_no.offsetHeight);
  mensaje.innerText = mensajes[count - 1];

  boton_yes.style.height = 8 * count + "%";
  boton_yes.style.width = 10 * count + "%";
  boton_no.style.height = 50 - 7 * count + "px";
  boton_no.style.width = 200 - 10 * count + "px";
  boton_no.style.maxWidth = "100vw";

  boton_no.style.position = "absolute";
  boton_no.style.left = randomX + "px";
  boton_no.style.top = randomY + "px";
  boton_yes.style.position = "absolute";
  boton_yes.style.left = 40 - count * 3.5 + "%";
  boton_yes.style.top = 50 - count * 3 + "%";
  count += 1;
});

boton_yes.addEventListener("click", function () {
  let sonido = document.getElementById("miSonido2");
  sonido.play();
  resultado.style.display = "flex";
  resultado.style.flexDirection = "column";
  resultado.style.alignItems = "center";
  resultado.style.position = "absolute";
  resultado.style.zIndex = "50";
});

boton_whatsapp.addEventListener("click", function () {
  var telefono = "1234567890";
  var mensaje = "Hola, te perdoné";
  let url =
    "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
  window.open(url);
});
