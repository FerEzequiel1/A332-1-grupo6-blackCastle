window.addEventListener('load', ()=> {
    const form = document.getElementById('formContacto')
    const nombre = document.getElementById('nombre')
    const email = document.getElementById('email')
    const telefono = document.getElementById('telefono')
    const mensaje = document.getElementById('mensaje')

        if(form)
        {
            form.addEventListener('submit', e => {
                //e.preventDefault();
                validaCampos();
            })
        }
        else
        {
            console.error('El formulario no se encontró');
        }
    
    const validaCampos = ()=> {
        //capturar los valores ingresados por el usuario
        let validado = true;
        const nombreValor = nombre.value.trim();
        const emailValor = email.value.trim();
        const telefonoValor = telefono.value.trim();
        const mensajeValor = mensaje.value.trim();
    
        //validando campo 
        if(!nombreValor){
            validaFalla(nombre, 'Campo vacío')
            validado = false;
        }else{
            validaOk(nombre)
        }

        //validando campo email
        if(!emailValor){
            validaFalla(email, 'Campo vacío')
            validado = false;            
        }else if(!validaEmail(emailValor)) {
            validado = false;
            validaFalla(email, 'El e-mail no es válido')
        }else {
            validaOk(email)
        }
         //validando campo telefono        
        if(!telefonoValor) {
            validado = false;
            validaFalla(telefono, 'Campo vacío')
        } else if (telefonoValor.length < 8) {  
            validado = false;           
            validaFalla(telefono, 'Debe tener 8 caracteres cómo mínimo.')
        } else {
            validaOk(telefono)
        }

         //validando campo mensaje
        if(!mensajeValor){
            validado = false;
            validaFalla(mensaje, '')
        } 
        else {
            validaOk(mensaje)
        }
        return validado;
    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'formulario-container falla'
    }
    const validaOk = (input) => {
        const formControl = input.parentElement
        formControl.className = 'formulario-container ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }
})