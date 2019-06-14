var arreglo_tareas = [];

dibujarLista();

function addTarea(){
    //Objeto javascript
    var tarea = {
        nombre: document.getElementById("campo_tarea").value,
        fecha_creacion: "",
        fecha_tarea: document.getElementById("campo-fecha").value
    };
    //Añadiendo un objeto javascript al arreglo
    arreglo_tareas.push(tarea);

    console.log(arreglo_tareas);
    // Como el arreglo ya tiene un elemento
    //Procedo a ejecutar el metodo que dibuja la lista
    dibujarLista();
}

function dibujarLista(){
    
    if(arreglo_tareas.length > 0)
    {
         var textoTareas = "";
        /*// Recorriendo un arreglo con forEach
         arreglo_tareas.forEach(function(item, index){
            textoTareas += item + "<br>";
        })
        */
       //Usando for para recorrer el arreglo
       for(let i = 0; i < arreglo_tareas.length; i++)
       {
           console.log(arreglo_tareas[i]);
            textoTareas += arreglo_tareas[i].nombre + " -- "+ arreglo_tareas[i].fecha_tarea +"<br>";
       }
       
        document.getElementById("mensaje").innerHTML = textoTareas;
    }else{
        document.getElementById("mensaje").innerHTML = "No hay tareas";
    }
}
