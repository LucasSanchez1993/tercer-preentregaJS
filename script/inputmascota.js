
let misAnalisis = [
  new analisis(1, "sangre", 7500),
  new analisis(2, "radiografia", 6002),
  new analisis(3, "orina", 4050),
  new analisis(4, "ecografia", 5000),
  new analisis(5, "cita regular", 3000),
];

let listaAnalisis = document.getElementById("selectAnalisis");
misAnalisis.forEach((unAnalisis) => {
  let item = document.createElement("option");
  item.value = unAnalisis.nombre.toString();
  item.innerText = unAnalisis.nombre;
  listaAnalisis.append(item);
});


const inputMascota = document.getElementById("nombre");
const inputEdad = document.getElementById("edad");
const inputPeso = document.getElementById("peso");
const inputMail = document.getElementById("mail");
const btnAgregarMascota = document.getElementById("agregarMascota");

const mascotas = [];

const mensaje = document.getElementById("mensaje");
btnAgregarMascota.addEventListener("click", (e) => {

    e.preventDefault()
    const nombreMascota = inputMascota.value;
    const edadMascota = inputEdad.value;
    const pesoMascota = inputPeso.value;
    const mailMascota = inputMail.value;
    const anilisisAnotados = selectAnalisis.value;
    
if (edadMascota < 20) {
    mensaje.innerHTML = `<div class="alert alert-primary" role="alert">
    "Edad aprovada para atender, turno agendado."
  </div>`
    
}
else{
  mensaje.innerHTML = `<div class="alert alert-secondary" role="alert">
      "Lo siento no podemos tratar a tu mascota, no tenemos las herramientas necesaria y no queremos una mala praxis. Intenten entendernos. Muchas gracias y que tengas y lindo dia."
     </div>`
}

mascotas.push(new Mascota(nombreMascota, edadMascota, pesoMascota, mailMascota));
console.log("esto se cargo ", mascotas);
console.log("aca estan los", anilisisAnotados);
mostrartabla(anilisisAnotados);

localStorage.setItem("mascotas", JSON.stringify(mascotas));
let anotados = JSON.parse(localStorage.getItem("mascotas"))
anotados.push
// Limpiar los campos

document.getElementById("nombre").value = "";
document.getElementById("edad").value = "";
document.getElementById("peso").value = "";
document.getElementById("mail").value = "";
document.getElementById("selectAnalisis").value = "";

})
//Meter todo en el localStorage



//Funcion de tabla
function mostrartabla(analisis){
  let tablaMascota = document.getElementById("tablaMascotas");
  tablaMascota.innerHTML = "";
  mascotas.forEach((unaMascota) => {
      let agendar = document.createElement("tr")
      agendar.innerHTML = `
      <td scope="row">${unaMascota.nombre}</td>
    <td>${unaMascota.edad.toString()}</td>
    <td>${unaMascota.peso.toString()}</td>
    <td>${analisis}</td>`;
  tablaMascota.append(agendar);
  })
}

//recuperar un analisis almacenado

const MascotaRecuperada = localStorage.getItem("nombre");
console.log("analisis recuperado es ", {MascotaRecuperada});

