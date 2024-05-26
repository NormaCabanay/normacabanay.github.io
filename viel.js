 //armado de carrusel
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
//  captura de dato del formulario 
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let direccion = document.getElementById("direccion");
let correo = document.getElementById("correo");
let tel = document.getElementsById("tel");
let servicios = document.getElementById("servicios");
let message = document.getElementById("message");
//listas
let listaErrores =document.getElementById("listaErrores");
let listaMensajes = document.getElementById("listaMensajes");


function validar(){
listaErrores.innerHTML = ""; 
nombre.classList.remove("error");
apellido.classList.remove("error");
correo.classList.remove("error");
servicios.classList.remove("error");

let errores = [];
let nomb = nombre.value.trim();
let apell = apellido.value.trim();
let corre = correo.value.trim();
let regCorreo = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
let regTel = /^[1-9]\d{11}$/;

if(nomb.length == 0){
    errores.push("No ingreso nombre");
    nombre.classList.add("error");
    }else if(nomb.length > 12){
        errores.push("El nombre ingrsado es demaciado largo");
        nombre.classList.add("error");

    }
    if(apell.length == 0){
        errores.push("No ingreso apellido");
        apellido.classList.add("error");
        }else if(apell.length > 12){
            errores.push("El apellido ingrsado es demaciado largo");
            apellido.classList.add("error");
    
    }
    if(direccion.length > 10){
            errores.push("direccion demaciado larga");
            direccion.classList.add("error");
    }
    if(corre.length == 0){
        errores.push("No ingreso correo");
        correo.classList.add("error");
        }else if(correo.value.length > 0 && !regCorreo.test(correo.value)){
            errores.push("El correo es invalido");
            correo.classList.add("error");
        }
    if(tel.length == 0){
            errores.push("No ingreso numero telefono");
            tel.classList.add("error");
            }else if(tel.value.length > 0 && !regTel.test(tel.value)){
                errores.push("El telefono no es valido");
                tel.classList.add("error");
            }
    if(servicios== 0 || servicios==""){
                errores.push("No selecciono un servicio");
                servicios.classList.add("error");
            }
           for(let err of errores){
            let li = document.createElement("li");
            li.innerHTML = err;
            listaErrores.appendChild(li);
           }
           if(errores.length == 0){
            let li =document.createElement("li");
            if(message.value.length > 0 ){
                li.innerHTML=`Hola ${nomb}, rebisaremos tu comentario nos estaremos comunicando al ${correo.value} lo antes posible`;
            } else{
                li.innerHTML=`Hola ${nomb}, gracias por requerir nuestros servisios, nos estaremos comunicando al ${correo.value} lo antes posible`;
            
            }
            listaMensajes.appendChild("li");
            document.forms[0].reset();
            return false;
           }else{
            return false;
           }


}




