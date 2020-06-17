let num="0";
function myNumALetra(){
    num=prompt('Por favor ingresa un numero del 1 al 10, para ver su equivalente en letras: ');
    let i=0;
    while (i<= parseInt(num)) {
        letra=String.fromCharCode(64+i);
        ++i;
    }
    alert(`El numero ${num} equivale a la letra ${letra}`);
    document.getElementById("DemoNumALetra").innerHTML =`El numero ${num} equivale a la letra ${letra}`;

    console.log(i);
    console.log(num);
    console.log(letra);
    
} 