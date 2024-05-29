
//******************************************************** */
//  **********captura de dato del formulario *************
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let direccion = document.getElementById("direccion");
let correo = document.getElementById("correo");
let tel = document.getElementById("tel");
let servicios = document.getElementById("servicios");
let message = document.getElementById("message");
//listas

let listaErrores = document.getElementById("listaErrores");
let listaMensajes = document.getElementById("listaMensajes");

limpiar();

function validar(){
//limpiamos los errores
listaErrores.innerHTML = ""; 
nombre.classList.remove("error");
apellido.classList.remove("error");
correo.classList.remove("error");
tel.classList.remove("tel");
servicios.classList.remove("error");

let errores = [];// inicializa la lista de errores

let nomb = nombre.value.trim(); //saca los espacios en blancos de campo
let apell = apellido.value.trim();
let corre = correo.value.trim();
let regCorreo = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/; //validacion exprecion regula para el correo
let regTel = /^[1-9]\d{9}$/; //validacion exprecion regula para el telefono

if(nomb.length == 0){ // condicional para validar nombre, nuestra el error y agrega un error a la lista
    errores.push("No ingreso nombre");
    nombre.classList.add("error");
    }else if(nomb.length > 12){
        errores.push("El nombre ingrsado es demaciado largo");
        nombre.classList.add("error");

    }
    //valida apellido
 if(apell.length == 0){
        errores.push("No ingreso apellido");
        apellido.classList.add("error");
    }else if(apell.length > 12){
        errores.push("El apellido ingrsado es demaciado largo");
        apellido.classList.add("error");
    
    }
     //valida direccion
 if(direccion.length > 10){
        errores.push("direccion demaciado larga");
        direccion.classList.add("error");
    }
     //valida correo
 if(corre.length == 0){
        errores.push("No ingreso correo");
        correo.classList.add("error");
    }else if(correo.value.length > 0 && !regCorreo.test(correo.value)){
         errores.push("El correo es invalido");
         correo.classList.add("error");
    }
     //valida telefono
 if(tel.length == 0){
         errores.push("No ingreso numero telefono");
         tel.classList.add("error");
    }else if(tel.value.length > 0 && !regTel.test(tel.value)){
         errores.push("El telefono no es valido");
         tel.classList.add("error");
    }
     //valida el selec
 if(servicios == 0 || servicios == ""){
         errores.push("No selecciono un servicio");
         servicios.classList.add("error");
    }
    

    for(let e of errores){ //se escriben en la lista de errore con cada error
         let li = document.createElement("li");
         li.innerHTML = e;
         listaErrores.appendChild(li);
        }
 if(errores.length == 0){ // si no hay errores 
          let li =document.createElement("li");// crea el elemento
       if(message.value.length ==0 ){ // se muetra mensaje si escribio algo en las sugerencias 
          li.innerHTML=`Hola ${nomb}, rebisaremos tu comentario nos estaremos comunicando al ${correo.value} lo antes posible`;
    }else{ // si no,se muetra que eligio un servicio 
          li.innerHTML=`Hola ${nomb}, gracias por requerir nuestros servisios, nos estaremos comunicando al ${correo.value} lo antes posible`;
            
        }
        listaMensajes.appendChild(li);
        document.forms[0].reset();
     return false;
    }else{
      return false;
    }
   }
function limpiar(){
    let listaMensajes = document.getElementById("listaMensajes")
    listaMensajes = "";
}



//********************************************* 
 //**************armado de carrusel*************

 let imagenes =['vielFoto.png','torrealtaTension.png','hombre-tecnico-electrico.png','pileta.png','obra.png'];
let cont = 0;
function carrusel(contenedor){
    contenedor.addEventListener(`click`,e =>{
        let atras = contenedor.querySelector(`.atras`);
        let adelante = contenedor.querySelector(`.adelante`);
        let img = contenedor.querySelector(`img`);
        tgt = e.target;
        if( tgt == atras){
            if(cont > 0){
                img.src = imagenes[cont -1];
                cont--;

            }else{
                img.src = imagenes[imagenes.length -1];
                cont = imagenes.length - 1;
            }

        }else if(tgt == adelante){
            if(cont < imagenes.length - 1){
                img.src = imagenes[cont +1];
                cont++;

            }else{
                img.src = imagenes[0];
                cont = 0;
            }

        }

 });
}
document.addEventListener("DOMContentLoaded",()=>{
    let contenedor = document.querySelector('.contenedor')
    carrusel(contenedor);
});







