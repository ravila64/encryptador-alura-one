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
  msgError.value="sin mensajes";
  if(str.length!=0){
    _eliminar_array_encr();
    //msgError.value="Limpiando variables ....";
  }else{
    msgError.value="Debe tener mensaje a encriptar....";
    return;
  }
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
  }
  else {
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
}

function pasar_minusculas(str1){
  return String(str1).toLowerCase();
}
function validar_input(){
  var valida=true;
  // <input type="text" id="input1" value="Hola">
  // var contenido = document.getElementById("input1").value;
  
  return valida;
}

// llamar codigo copiar, al presionar boton
btnCopiar.addEventListener("click",_copy);
function _copy(){
  //alert("_copy");
  if(msgSalida.value != ""){
    msgSalida.select();
    document.execCommand("copy");
    navigator.clipboard.writeText(msgSalida.value);
   }
    else{
      msgError.value="No hay texto a copiar, en salida !!!";
      //alert("No hay texto a copiar, en salida");
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