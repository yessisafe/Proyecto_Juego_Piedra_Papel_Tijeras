
//??????
let cambiaImagen = Array();
cambiarImagen[0] = "./imagenes/papel.jpeg";
cambiarImagen[1] = "./imagenes/piedra.jpeg";
cambiarImagen[2] = "./imagenes/tijeras.jpeg";


//no sé si funcione
mostrarImgRandom = () => {
    let imagen = Math.floor(Math.random() * 3);
    switch(imagen){
        case 0:
            document.getElementById("").src = "Imagenes/piedra.jpeg";
            document.getElementById("").value = "0";
            break;
        case 1:
            document.getElementById("").src = "Imagenes/papel.jpeg";
            document.getElementById("").value = "1";
            break;
        case 2:
            document.getElementById("").src ="Imagenes/tijeras.jpeg";
            document.getElementById("").value ="2";
            break;
        default: alert("something has gone wrong.");
        break;
    }
    return;
}


/*IDEA INCOMPLETA
//-------------
function selecionar() {
    document.getElementById("").addEventListener("click", function(){

        document.getElementById("").innerHTML =
        Math.floor(Math.random() * 4);

    })
}
*/

//---------------------------Condicional If para opciones-------------------------------------
//-----------------Eleccion del usuario PIEDRA
if(opcionUsuario===piedra)
{
    if(opcionMaquina===piedra)
    {
        mensaje += empate;
    }
    if(opcionMaquina===papel)
    {
        mensaje += "La piedra pierde contra el papel" + pierde;
        marcadorMaquina++;
    }
    if(opcionMaquina===tijeras)
    {
        mensaje+= "La piedra rompe las tijeras" + gana;
        marcadorUsuario++;
        mostrar();
    }
}

//-----------------Eleccion del usuario PAPEL
if(opcionUsuario===papel)
{
    if(opcionMaquina===papel)
    {
        mensaje+= empate;
    }
    if(opcionMaquina===piedra)
    {
        mensaje += "El papel envuelve la piedra" + pierde;
        marcadorMaquina++;
    }
    if(opcionMaquina===tijeras){
        mensaje+= "Las tijeras cortan el papel" + gana;
        marcadorMaquina++;
    }
}

//-----------------Eleccion del usuario TIJERAS
if(opcionUsuario===tijeras)
{
    if(opcionMaquina===papel)
    {
        mensaje += "Las tijeras cortan el papel" + gana;
        marcadorUsuario++;
        mostrar();
    }
    if(opcionMaquina===piedra)
    {
        mensaje+= "La piedra rompe las tijeras" + pierde;
        marcadorMaquina++;
    }
    if(opcionMaquina===tijeras)
    {
        mensaje+= empate;
    }
}