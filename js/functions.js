const inicio = alert("¡Bienvenida/o! Este es un Simulador de prueba desarrollado en JavaScript. \n\nPRESIONA 'ACEPTAR' PARA CONTINUAR");

let trueOrFalse = true;
let nombreOk = "";
let edad = "";

const porcentajeIva = 0.21;

function valorIva(costoServicio) {
    return costoServicio * porcentajeIva;
}

while (trueOrFalse) {
    const nombre = prompt("¿Cuál es tu nombre?");
    
    if (isNaN(nombre) && nombre !== "") {
        nombreOk = nombre.charAt(0).toUpperCase() + nombre.slice(1); 
        edad = prompt(`¡Hola ${nombreOk}! Debes ser mayor de edad para continuar. ¿Tienes más de 18 años?\n- (S)Si\n- (N)No\n\n Importante: responder por: 'Si' o 'No'`).toLowerCase();
        if (edad === "s" || edad === "si" || edad === "S" || edad === "Si") {
            trueOrFalse  = false;
            const calculadora = parseInt(prompt("Elegí el servicio por el que deseas consultar:\n- (1) Administración de Sistemas\n- (2) Soluciones en la nube\n- (3) Consultoria en Innovación y Soluciones Tenológicas"));
            switch (calculadora) {
                case 1:
                    const numero1 = Number(prompt("Ingrese la cantidad de computadoras que tiene en su empresa, para calcular el costo aproximado del servicio de Administración de Sistemas"));
                    costoServicio = numero1 * 5538;
                    alert(`El servicio de Administración de Sistemas para su empresa, tendría un valor aproximado de $ARG ${costoServicio} + $ARG ${valorIva(costoServicio)} IVA`);
                    break;
                case 2:
                    const numero2 = Number(prompt("Ingrese la cantidad de servidores en la nube que necesita para su empresa"));
                    costoServicio = numero2 * 8946;
                    alert(`El servicio de Cloud Computing, tendria un valor aproximado de $ARG ${costoServicio} + $ARG ${valorIva(costoServicio)} IVA`);
                    break;
                case 3:
                    const numero3 = Number(prompt("Ingrese la cantidad de horas de asesoria que crea necesitar"));
                    costoServicio = numero3 * 5000;
                    alert(`La Consultoria en Innovación y Soluciones Tecnologica, tendría un valor aproximado de $ARG ${costoServicio} + $ARG ${valorIva(costoServicio)} IVA`);
                    break;
                default:
                    alert("Opción valida. Por favor, seleccione entre la opción '1', '2' o '3'");
                    break;
            }
            if (calculadora !="") {
                const verificar = prompt("¿Quieres hacer otra consulta?\n- (S)Si\n- (N)No").toUpperCase();
                if(verificar == "N") {
                    trueOrFalse = false;
                    } else {
                        trueOrFalse = true;
                    }
            }
        } else if (edad === "n" || edad === "no" || edad === "N" || edad === "No") {
            alert("Lo siento, debes ser mayor de edad para continuar.\n\nO podes cambiar tu respuesta por 'Si'... Pero no digas nada 'guiño, guiño...'");
        } else {
            alert("Opción no válida. Por favor, selecciona 'Si' o 'No'");
        }
    } else {
        alert("Debes decirme tu nombre para poder continuar");
    }

    console.log(`- Nombre: ${nombreOk}\n- Es mayor de edad: ${edad}\n- Costo Servicio: ${costoServicio}\n- Valor del IVA: ${valorIva(costoServicio)}`)
}