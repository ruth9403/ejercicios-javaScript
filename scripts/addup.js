sumatoria=0;
function mySum(){
    let contnum=1;
    while (contnum <= 5) {
        let num=prompt(`Por favor ingresa No.${contnum}:`);
        if(isNaN(num) || typeof(num)===null){
            alert(`lo ingresado no es un numero`);
        }
        else{
            sumatoria+=parseInt(num);
            contnum+=1;
        }
    }
    document.getElementById("DemoSum").innerHTML =`la suma de sus numeros es ${sumatoria}`;
    alert(`la suma de sus numeros es: ${sumatoria}`)
} 
prom=0
function myProm(){
    if (isNaN(sumatoria)){
        alert(`Debe completar el paso "sumemos"`);
    }else{
        prom=sumatoria/5;
        alert(`el promedio de sus numeros es: ${prom}`);
        document.getElementById("DemoProm").innerHTML =`el promedio de sus numeros es ${prom}`;
    }
}