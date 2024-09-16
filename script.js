function ejecutarConsulta() {
    let tamanoLista = document.getElementById("tamanoLista").value;
    let listaBase = document.getElementById("listaBase").value.split(" ");
    let numeroConsultas = document.getElementById("numeroConsultas").value;
    let listaConsultas = document.getElementById("listaConsultas").value.split(" ");
    
    //validar el tamaño de la lista base con tamanoLista
    if (listaBase.length != tamanoLista(Number)) {
        alert("El tamano de la lista base debe ser igual al tamano de la lista base");
        return;
    }
    
    //validar el tamaño de la lista de consultas con numeroConsultas
    if (listaConsultas.length != numeroConsultas(Number)) {
        alert("El tamano de la lista de consultas debe ser igual al tamano de la lista de consultas");
        return;
    }
    
    let resultado = "";  // Variable para almacenar el resultado

    listaBase = listaBase.map(Number);  // Convertir a números la lista base
    listaConsultas = listaConsultas.map(Number);  // Convertir a números la lista de consultas

    // Procesar las consultas
    listaConsultas.forEach(consulta => {
        let menor = "X"; // Almacena el número más grande que es más pequeño que el número consultado. 

        //Se asinga X en caso de no encontrar un numero mas pequeño o mayor que la consulta

        let mayor = "X"; // Almacena el número más pequeño que es más grande que el número consultado.

        // Buscar el número más grande menor que la consulta
        for (let i = 0; i < listaBase.length; i++) {
            if (listaBase[i] < consulta) {
                menor = listaBase[i];
            }
        }

        // Buscar el número más pequeño mayor que la consulta
        for (let i = 0; i < listaBase.length; i++) {
            if (listaBase[i] > consulta) {
                mayor = listaBase[i];
                break;
            }
        }

        resultado += `${menor} ${mayor}\n`;
    });

    document.getElementById("resultado").textContent = resultado;
}