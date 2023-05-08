/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
console.log(str1.concat(' ', str2));*/

// var globales
var array_encr=[];
var array_desencr=[];
var str_target="";

// definir botones
/*enlace html con js*/
mensaje = document.getElementById("message");
msgSalida = document.getElementById("msgEncrypt");
msgError = document.getElementById("msgError");
/*enlazar botones desde html con js */
btnEncripta = document.getElementById("btnEncrypt");
btnDesEncripta = document.getElementById("btnDesEncrypt");
btnCopiar = document.getElementById("btnCopy");
btnPegar = document.getElementById("btnPaste");

// llamar codigo encryptar, al presionar boton
btnEncripta.addEventListener("click",encryptar);
// ********** funcion encriptar **********
function encryptar(){
  const str = mensaje.value.trim();
  str = pasar_minusculas(str);
  console.log(str);
  const cadena=String(str).split(' ');
  const strend=[];
  for (const iterator of cadena) {
    console.log(iterator);
    strend.push(iterator);
  }
  console.log(strend);
  var encr="";
  strend.forEach(element => {
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
  array_encr.push(encr);
    encr="";
  });
  // colocar texto en salida encriptado y borrar entrada
  const str1="";
  array_encr.forEach(element => {
    str1=str1.concat('',element);
  });
  msgSalida.value=str1;
  mensaje.value="";
  //return encr;
}

// llamar codigo desencryptar, al presionar boton
btnDesEncripta .addEventListener("click",desencryptar);
// ********** funcion encriptar **********
function desencryptar(){
  const str = pasar_minusculas(msgSalida.value.trim());
  const last=String(str).split(' ');
  console.log(last);
  
  last.forEach(element => {
    var word=element;
    let index = 0;
    while (index < word.length ){
      const letra = word[index];
      if((letra!='a')&&(letra!='e')&&(letra!='i')&&(letra!='o')&&(letra!='u')){
          str_target=str_target.concat('',letra);
          index++;
      } else {
         switch (letra) {
            case 'a':
              str_target=str_target.concat('', "a");
              index=index+2;  // ai
              break;
            case 'e':
              str_target=str_target.concat('', "e");
              index=index+5;  // enter
              break;
            case 'i':
              str_target=str_target.concat('', "i");
              index=index+4;  //  imes
              break;
            case 'o':
              str_target=str_target.concat('', "o");
              index=index+4;  // ober
              break;
            case 'u':
              str_target=str_target.concat('', "u");
              index=index+4;  // ufat
              break;
      } // switch
      } // endif
    } // endwhile
    //console.log(str_target);
  });
  // guardar str_target en textArea entrada y borrar textArea salida
  const str2="";
  last.forEach(element => {
    str2=str1.concat('',element);
  });
  mensaje.value=str2;
  msgSalida.value="";
  // return str_target;
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


function _copy(){


}

function _cut(){


}

function ejecutar(){
  //let str="RENE avila alonso";
  //guardar texto mensaje de ingreso
   
  if (validar_input(str)){
    alert("Cadena ok, validada...!!!");
  }else {
    alert("Debe corregir caracteres especiales cadena de entrada");
  }
  var encripto=encryptar(str);
  if (encripto!=null){
    alert("Proceso ok, de encriptar...");
  }
  
  array_encr.forEach(element => {
    console.log(element);
  });
  var first=desencryptar(array_encr);
  console.log(first);
}
