// Archivo js para el fornt de login

console.log("respuesta desde login.js")

//  1. Se define la funcion asincrona
const handleSubmit = async (e) => {
    console.log("corriendo funcion handleSubmit")
    // 1. define el envio tradicional del formulario
    e.preventDefault();
    


    // 2. se capturan los datos del HTML
    const formulario = e.target; // extrae el formulario
    const formData = new FormData(formulario) // formatea todos los campos del formulario con la etiqueta 'name'

    // 3. convertimos esos datos en un objeto simple de js
    const datosForm = Object.fromEntries(formData.entries());
    console.log(datosForm)

    try {


        // 4. se incia la peticion al servidor backend (antes pasamos por la ruta)
        const response = await fetch('/api/auth/login', {
            method: 'POST', // metodo http definido para la ruta 
            headers: {
                // avisamos al servidor que el cuerpo de la peticion es un JSON
                'Content-Type': 'application/json'
            },
            // enviamos el objeto de javaScrip
            body: JSON.stringify(datosForm)
        });


        // 5. convertimos la respuesta en JSON
        const data = await response.json();

        // 6. Logica de decision segun la respuesta del controller
        if (data.success) {
            // Caso: exito
            console.log(data.redirectTo)
            window.location.href = data.redirectTo;
        } else {
            // Caso: credenciales invalidas o usuario inactivo
            alert(data.message);
            window.location.reload();
        }
    } catch (error) {
        // Manejo basico de errores de red o del server
        console.error("Error recibido en el ogin.js", error);
        alert("error en la respuesta recibida en el login js")
    }
};