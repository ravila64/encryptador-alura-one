// var globales
const arrayEncr=[];
const arrayDesc=[];

// definir botones
/*enlace html con js*/
var mensaje = document.getElementById("message");
var msgSalida = document.getElementById("msgEncrypt");
var msgError = document.getElementById("msgError");
/*enlazar botones desde html con js */
const btnEncripta = document.getElementById("btnEncrypt");
const btnDesEncripta = document.getElementById("btnDesEncrypt");
const btnCopiar = document.getElementById("btnCopy");
const btnClear = document.getElementById("btnClear");

// llamar codigo encryptar, al presionar boton
btnEncripta.addEventListener("click",encryptar);
// ********** funcion encriptar **********
function encryptar(){
  //alert("Entra a encriptar");
  const str = pasar_minusculas(mensaje.value.trim());
  console.log(str);
  const cadena=String(str).split(' ');
  console.log(cadena);
  var encr="";
  msgError.value="";
  if(str.length!=0){
    _eliminar_array_encr();
    msgError.value="Limpiando variables ....";
  }else{
    msgError.value="Debe tener mensaje a encriptar....";
    return false;
  }
  if(!validarTexto()){
    msgError.value="El texto solo puede contener letras minúsculas y espacios, sin tíldes o símbolos especiales";
    message="El texto solo puede contener letras minusculas y espacios";
    return false;
  }
  // PROCESO CON CADENA 
  cadena.forEach(element => {
    var str=element+" ";
    for (let index = 0; index < str.length; index++) {
      const letra = str[index];
      switch (letra) {
        case 'a':
          encr=encr.concat('', "ai");
          break;
        case 'e':
          encr=encr.concat('', "enter");
          break;
        case 'i':
          encr=encr.concat('', "imes");
          break;
        case 'o':
          encr=encr.concat('', "ober");
          break;
        case 'u':
          encr=encr.concat('', "ufat");
          break;
        default:
          encr=encr.concat('', letra);
          break;  
    }
      //console.log(letra);
    };
    arrayEncr.push(encr);
    encr="";
    });
    console.log(arrayEncr);
    // colocar texto en salida encriptado y borrar entrada
    let texto=arrayEncr.join(' ');
    //console.log("Texto "+texto+ " Tipo "+typeof(texto));
    msgSalida.value=texto;
    mensaje.value="";
    //console.log("msgSalida Tipo "+typeof(msgSalida));
}

// llamar codigo desencryptar, al presionar boton
btnDesEncripta.addEventListener("click",desencryptar);
// ********** funcion desencriptar **********
function desencryptar(){
  //alert("Entra a Desencriptar");
  const str = pasar_minusculas(mensaje.value.trim());
  const last=String(str).split(' ');   // array
  console.log("Last "+last);
  var strTarget="";
  msgError.value=""
  msgSalida.value=""
  if(arrayDesc.length!=0){
    _eliminar_array_desc();
  };
  if (str.length==0){
      msgError.value="No hay mensaje para desencriptar !!!";
      return false;
  }
  if(!validarTexto()){
    msgError.value="El texto solo puede contener letras minúsculas y espacios, sin tíldes o símbolos especiales";
    message.value="El texto solo puede contener letras minusculas y espacios";
    return false;
  }
  last.forEach(element => {
    var word=element;
    let index = 0;
    while (index < word.length ){
      const letra = word[index];
      if((letra!='a')&&(letra!='e')&&(letra!='i')&&(letra!='o')&&(letra!='u')){
          strTarget=strTarget.concat('',letra);
          index++;
      } else {
        switch (letra) {
            case 'a':
              strTarget=strTarget.concat('', "a");
              index=index+2;  // ai
              break;
            case 'e':
              strTarget=strTarget.concat('', "e");
              index=index+5;  // enter
              break;
            case 'i':
              strTarget=strTarget.concat('', "i");
              index=index+4;  //  imes
              break;
            case 'o':
              strTarget=strTarget.concat('', "o");
              index=index+4;  // ober
              break;
            case 'u':
              strTarget=strTarget.concat('', "u");
              index=index+4;  // ufat
              break;
      } // switch
      } // endif
    } // endwhile
    arrayDesc.push(strTarget);
    strTarget="";
  });
  // guardar strTarget en textArea entrada y borrar textArea salida
  let texto=arrayDesc.join(' ');
  console.log("ArrayDesc "+arrayDesc);
  msgSalida.value=texto;
  mensaje.value="";
}

function pasar_minusculas(str1){
  return String(str1).toLowerCase();
}

// validar texto.
function validarTexto() {
  var textarea = document.getElementById("message");
  var txt = textarea.value;
  var regex = /^[A-Za-z\s]+$/; // Expresión regular para letras y espacios
  if (!regex.test(txt)) {
        //alert("El texto solo puede contener letras y espacios.");
    return false;
  }
  return true;
}

// llamar codigo copiar, al presionar boton
btnCopiar.addEventListener("click",_copy);
function _copy(){
  //alert("_copy");
  msgError.value="Seleccione [permitir], en caso de pregunta en su explorador";
  var texto="";
  if(msgSalida.value != ""){
    msgSalida.select();
    document.execCommand("copy");
    navigator.clipboard.writeText(msgSalida.value);
    navigator.clipboard.readText()
    .then(text => {
      mensaje.value=text;
      console.log('Texto del portapapeles:', text)
    })
    .catch(err => {
      msgError.value=String(err);
      console.error('Error al leer del portapapeles:', err)
    });
    mensaje.value=texto;
    msgSalida.value="";
   }
    else{
      msgError.value="No hay texto a copiar, en salida !!!";
    }
}

// llamar codigo pegar, al presionar boton
btnClear.addEventListener("click",_clear);
function _clear(){
  _eliminar_array_encr();
  _eliminar_array_desc();
  mensaje.value=""
  msgSalida.value=""
  msgError.value=""
}

// eliminar elementos del arreglo
function _eliminar_array_encr(){
  //alert("Elimina arrayEncr");
  let elementos=arrayEncr.length;
  console.log("Elementos ",elementos, " ARRAY ",arrayEncr);
  for (let index = 0; index < elementos; index++) {
    arrayEncr.pop();
  }
}

function _eliminar_array_desc(){
  //alert("Elimina arrayEncr");
  let elementos=arrayDesc.length;
  console.log("Elementos ",elementos, " ARRAY ",arrayDesc);
  for (let index = 0; index < elementos; index++) {
    arrayDesc.pop();
  }
}

