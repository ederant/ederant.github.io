const Formulario = document.getElementById('Formulario');
const inputs = document.querySelectorAll('#Formulario input');

let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//Validación del formulario
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    nombre: false,
    correo: false,
    telefono: false
}

const validarFormulario = (e) =>{
    switch (e.target.name){
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo_nombre').classList.remove('Input-formulario_incorrecto');
                document.getElementById('grupo_nombre').classList.add('Input-formulario_correcto');
                document.querySelector('#grupo_nombre i').classList.add('fa-check-circle');
                document.querySelector('#grupo_nombre i').classList.remove('fa-circle-xmark');
                document.querySelector('#texto .Form_error').classList.remove('Form_error_activo');
                campos['nombre'] = true;
            }
            else{
                document.getElementById('grupo_nombre').classList.add('Input-formulario_incorrecto');
                document.getElementById('grupo_nombre').classList.remove('Input-formulario_correcto');
                document.querySelector('#grupo_nombre i').classList.add('fa-circle-xmark');
                document.querySelector('#grupo_nombre i').classList.remove('fa-check-circle');
                document.querySelector('#texto .Form_error').classList.add('Form_error_activo');
                campos['nombre'] = false;
            }
        break;
        case "apellido":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo_apellido').classList.remove('Input-formulario_incorrecto');
                document.getElementById('grupo_apellido').classList.add('Input-formulario_correcto');
                document.querySelector('#grupo_apellido i').classList.add('fa-check-circle');
                document.querySelector('#grupo_apellido i').classList.remove('fa-circle-xmark');
                document.querySelector('#texto1 .Form_error').classList.remove('Form_error_activo');
                campos['apellido'] = true;
            }
            else{
                document.getElementById('grupo_apellido').classList.add('Input-formulario_incorrecto');
                document.getElementById('grupo_apellido').classList.remove('Input-formulario_correcto');
                document.querySelector('#grupo_apellido i').classList.add('fa-circle-xmark');
                document.querySelector('#grupo_apellido i').classList.remove('fa-check-circle');
                document.querySelector('#texto1 .Form_error').classList.add('Form_error_activo');
                campos['apellido'] = false;
            }

        break;
        case "correo":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('grupo_correo').classList.remove('Input-formulario_incorrecto');
                document.getElementById('grupo_correo').classList.add('Input-formulario_correcto');
                document.querySelector('#grupo_correo i').classList.add('fa-check-circle');
                document.querySelector('#grupo_correo i').classList.remove('fa-circle-xmark');
                document.querySelector('#texto2 .Form_error').classList.remove('Form_error_activo');
                campos['correo'] = true;
            }
            else{
                document.getElementById('grupo_correo').classList.add('Input-formulario_incorrecto');
                document.getElementById('grupo_correo').classList.remove('Input-formulario_correcto');
                document.querySelector('#grupo_correo i').classList.add('fa-circle-xmark');
                document.querySelector('#grupo_correo i').classList.remove('fa-check-circle');
                document.querySelector('#texto2 .Form_error').classList.add('Form_error_activo');
                campos['correo'] = false;
            }

        break;
        case "telefono":
            if(expresiones.telefono.test(e.target.value)){
                document.getElementById('grupo_telefono').classList.remove('Input-formulario_incorrecto');
                document.getElementById('grupo_telefono').classList.add('Input-formulario_correcto');
                document.querySelector('#grupo_telefono i').classList.add('fa-check-circle');
                document.querySelector('#grupo_telefono i').classList.remove('fa-circle-xmark');
                document.querySelector('#texto3 .Form_error').classList.remove('Form_error_activo');
                campos['telefono'] = true;
            }
            else{
                document.getElementById('grupo_telefono').classList.add('Input-formulario_incorrecto');
                document.getElementById('grupo_telefono').classList.remove('Input-formulario_correcto');
                document.querySelector('#grupo_telefono i').classList.add('fa-circle-xmark');
                document.querySelector('#grupo_telefono i').classList.remove('fa-check-circle');
                document.querySelector('#texto3 .Form_error').classList.add('Form_error_activo');
                campos['telefono'] = false;
            }

        break;
    }
}


inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

Formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(campos.nombre && campos.apellido && campos.correo && campos.telefono){
        Formulario.reset();
        document.getElementById('formulario_mensaje_exito').classList.add('formulario_mensaje_exito_activo')
        setTimeout(()=>{
            document.getElementById('formulario_mensaje_exito').classList.remove('formulario_mensaje_exito_activo')
        },5000);

        document.querySelectorAll('.Input-formulario_correcto').forEach((icono)=>{
            icono.classList.remove('Input-formulario_correcto');
        });

    }else{
        document.getElementById('formulario_mensaje').classList.add('formulario_mensaje_activo')
        setTimeout(()=>{
            document.getElementById('formulario_mensaje').classList.remove('formulario_mensaje_activo')
        },5000);
    }
});