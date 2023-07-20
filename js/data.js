 /*Formas de mostrar algo en pantalla en js   
    console.log("Hola mundo");    
    alert("estoy mostrando un mensaje en pantalla");
     document.write("Bienvenido a mi pagina"); */ 
     /*Variable con datos númericos*/
     /*
     var suma=20+5;
     console.log("el numero ingresado es:"+suma);
     /*
     /*Datos de cadena o string*/
     var nombre="Juan";
     console.log("Tu nombre es:"+nombre);
     /*Datos booleanos*/
     var estudiante=false;
     var edad;
     /*Ejemplo de ciclo if*/
     /*calcular si una persona es mayor o menor de edad*/
     
     edad=prompt("Ingrese una edad");
     if(edad>18){
        alert("eres mayor de edad");
     }
     else{
        alert("eres menor de edad");
     }
     /*Ejemplo ciclo for*/
     /*Mostrar en pantalla los 5 primeros numeros*/
     for(let i=1;i<=5;i++){
        console.log(i);
     }
     /*Ejemplo ciclo while*/
     var i=1;
     while(i<=5){
        console.log(i);
        i++;
     }
     function ejemploconst(){
      const pi=3.14;
      pi=3.14;
     }