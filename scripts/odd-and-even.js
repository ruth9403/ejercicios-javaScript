num='1';
function myParImpar(){
    let contpar=0;
    let contimpar=0;
    while (num !== '0') {
        num=prompt('Por favor ingresa los números a validar, ó escribe "0" para ver el resultado: ');
        if (isNaN(num) || num === null){
            alert(`Error, no digitaste un número, vuelve a ingresar`);
            return;
        }else if (parseInt(num) % 2 === 0){
            ++contpar;
        }else{
            ++contimpar;
        }
    }
    if (contpar === contimpar){
        alert(`Usted ingresó igual números pares que impares`);
        document.getElementById("DemoParImpar").innerHTML =`Usted ingresó igual números pares que impares`;
    }else if(contpar>contimpar){
        alert(`Usted ingresó más números pares que impares`);
        document.getElementById("DemoParImpar").innerHTML =`Usted ingresó más números pares que impares, en total ${contpar} pares`;
    }else{
        alert(`Usted ingresó más números impares que pares`);
        document.getElementById("DemoParImpar").innerHTML =`Usted ingresó más números impares que pares, en total ${contimpar} impares`;
    }

    console.log(contpar);
    console.log(contimpar);
    console.log(num);
    
} 