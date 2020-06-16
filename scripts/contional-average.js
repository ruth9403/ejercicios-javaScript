num='0';
sumatoria=0;
prom=0;
function myPromCon(){
    let conttotal=0;
    while (num !== 'salir') {
        let num=prompt('Por favor ingresa los números a validar, recuerda que solo se calculará el promedio de los numeros con 1 dígito, escribe "salir" para ver el resultado: ');
        if (isNaN(num) && num !=='salir'){
            alert(`Error, no digitaste un número, vuelve a ingresar`);
            return;
        }if(num === 'salir'){
            break;
        }else{
            if (num.length === 1){
                sumatoria+=parseInt(num);
                conttotal+=1;
                prom= sumatoria/conttotal;
            }
        }
    }
    console.log(sumatoria);
    console.log(conttotal);
    console.log(prom);
    document.getElementById("DemoPromCond").innerHTML =`El promedio de los números de un dígito es ${prom}`;
    alert(`El promedio de los números de un dígito es ${prom}`)
} 