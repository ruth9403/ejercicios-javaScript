edad="1";
function myEdad(){
    let contmayor=0;
    let conttotal=0;
    while (edad !== '0') {
        edad=prompt('Por favor ingresa la edad a validar, ó 0 para salir:');
        if (edad==='0' || isNaN(edad)){
            alert(`Error, vuelva a ingresar`);
            continue;
        }else{
            conttotal+=1;
            if (parseInt(edad)> 18){
                ++contmayor;
            }
        }
    }
    document.getElementById("DemoEdad").innerHTML =`Usted digitó ${contmayor} edades mayores de las ${conttotal} ingresadas`;
    alert(`Usted digitó ${contmayor} edades mayores de las ${conttotal} ingresadas`)
} 
