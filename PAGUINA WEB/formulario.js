const formulario=document.getElementById('PEDIR')
const inputs= document.querySelectorAll('#PEDIR inputs')

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarformulario= (e) => { 
    switch (e.target.name) {
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){

            } else{
                
            } 
        break; 
        case "tel":
            console.log('funciona!');   
        break; 
        case "diseño":
            console.log('funciona!');   
        break; 
        case "cantidad":
            console.log('funciona!');   
        break; 
        case "direccion":
            console.log('funciona!');   
        break; 
        case "fecha":
            console.log('funciona!');   
        break; 
        case "fecha2":
            console.log('funciona!');   
        break; 
        case "detalles":
            console.log('funciona!');   
        break; 
    }
} 
 
inputs.forEach((input) => {
    input.addEventListener('keyup', validarformulario);
    input.addEventListener('blur', validarformulario);

})

PEDIR.addEventListener('submit', (e) => {
    e.preventDefault();
} );