window.addEventListener("load", ()=> {
    const form = document.getElementById("form");
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const email = document.getElementById("email");
    const edad = document.getElementById("edad");
    const sexo = document.querySelectorAll("#FielsetSexo .formulario-sexo");
    const interes = document.querySelectorAll("#FielsetTemas .formulario-interes");
    const pais = document.getElementById("pais");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (estadoValidaciones.name &&
            estadoValidaciones.surname &&
            estadoValidaciones.email &&
            estadoValidaciones.edad &&
            estadoValidaciones.sexo &&
            estadoValidaciones.interes &&
            estadoValidaciones.pais){
                estadoValidaciones.name = false;
                estadoValidaciones.surname = false;
                estadoValidaciones.email = false;
                estadoValidaciones.edad = false;
                estadoValidaciones.sexo = false;
                estadoValidaciones.interes = false;
                estadoValidaciones.pais = false;
                modal.style.display = "block";
                form.reset();
            }else {
            if (estadoValidaciones.name == false && name.value == ""){
                valida(name, "El nombre es requerido");
            }
            if (estadoValidaciones.surname == false && surname.value == ""){
                valida(surname, "El apellido es requerido");
            }
            if (estadoValidaciones.email == false && email.value == ""){
                valida(email, "El e-mail es requerido");
            }
            if (estadoValidaciones.edad == false && edad.value == ""){
                valida(edad, "La edad es requerida");
            }
            if (estadoValidaciones.sexo == false){
                errorSexo.style.display="block";
                errorSexo.innerHTML="Debe seleccionar un sexo";
            }
            if (estadoValidaciones.interes == false){
                errorInteres.style.display="block";
                errorInteres.innerHTML="Debe seleccionar un interes";
            }
            if (estadoValidaciones.pais == false){
                errorPais.style.display="block";
                errorPais.innerHTML="Debe seleccionar un pais";
            }
        }
    });

    const estadoValidaciones = {
        name: false,
        surname: false,
        email: false,
        edad: false,
        sexo: false,
        interes: false,
        pais: false,
    }

    name.addEventListener("blur", function () {
        if (name.value == ""){
            valida(name, "El nombre es requerido");
            estadoValidaciones.name = false;
        }else if (name.value.length < 3 ){
            valida(name, "Ingrese mas de 3 digitos");
            estadoValidaciones.name = false;
        }else {
            valida(name, "");
            estadoValidaciones.name = true;
        }
    })

    name.addEventListener("focus", function (){
        valida(name, "");
    })

    surname.addEventListener("blur", function () {
        if (surname.value == ""){
            valida(surname, "El apellido es requerido");
            estadoValidaciones.surname = false;
        }else if (surname.value.length < 3 ){
            valida(surname, "Ingrese mas de 3 digitos");
            estadoValidaciones.surname = false;
        }else {
            valida(surname, "");
            estadoValidaciones.surname = true;
        }
    })

    surname.addEventListener("focus", function (){
        valida(surname, "");
    })

    email.addEventListener("blur", function () {
        if (email.value == ""){
            valida(email, "El e-mail es requerido");
            estadoValidaciones.email = false;
        }else if (!validaEmail(email.value)){
            valida(email, "El e-mail no es valido");
            estadoValidaciones.email = false;
        }else {
            valida(email, "");
            estadoValidaciones.email = true;
        }
    })

    email.addEventListener("focus", function (){
        valida(email, "");
    })

    edad.addEventListener("blur", function () {
        if (edad.value == ""){
            valida(edad, "La edad es requerida");
            estadoValidaciones.edad = false;
        }else if (edad.value < 0 || edad.value > 120){
            valida(edad, "Ingrese edad entre 0 y 120");
            estadoValidaciones.edad = false;
        }else {
            valida(edad, "");
            estadoValidaciones.edad = true;
        }
    })

    edad.addEventListener("focus", function (){
        valida(edad, "");
    })

    let errorSexo = document.getElementById("errorSexo");
    sexo.forEach((input)=>{
        input.addEventListener("click", (e) =>{
            if(e.target.checked){
                estadoValidaciones.sexo = true;
                errorSexo.style.display="none";
            }else{
                estadoValidaciones.sexo = false;

            }
        })
    })

    let errorInteres = document.getElementById("errorInteres");
    function validateTema() {
        let cantCheckTema = 0;
            for (let i = 0; i < interes.length; i++) {
                if (!interes[i].checked){
                    cantCheckTema++;
                };
            }
            if (cantCheckTema == interes.length) {
                estadoValidaciones.interes = false;
            }else{
                estadoValidaciones.interes = true;
                errorInteres.style.display="none";
            }
        }

    interes.forEach((input) =>{
        input.addEventListener("click", validateTema);
    });

    pais.addEventListener("click", (e) =>{

        if(e.target.value == "Argentina" || e.target.value == "Chile" || e.target.value == "Brasil" || e.target.value == "Uruguay"){
            estadoValidaciones.pais = true;
            errorPais.style.display="none";
        }else{
            estadoValidaciones.pais = false;
        }
    })

    const valida = (input, msje) => {
        const formControl = input.parentElement;
        const aviso = formControl.querySelector("p");
        aviso.innerText = msje;

        formControl.className = "fieldset falla";
    }

        /*Expresiones regulares*/

    const validaEmail = (email) => {
        return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
    }

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("submit");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

})

//////////////////////////////////////////////////////////////////////////////////////////