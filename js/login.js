window.addEventListener('load', ()=> {
    const form = document.getElementById('formulario')
    const usuario = document.getElementById('usuario')
    const email = document.getElementById('email')
    const pass = document.getElementById('pass')
    const passConfirma = document.getElementById('passConfirma')

        if(form)
        {
            form.addEventListener('submit', e => {
                e.preventDefault();
                if(validaCampos())
                    {
                        guardarDatos();
                        //descargarDatos();
                    }
            })
        }
        else
        {
            console.error('El formulario no se encontró');
        }
    
    const validaCampos = ()=> {
        //capturar los valores ingresados por el usuario
        let validado = true;
        const usuarioValor = usuario.value.trim();
        const emailValor = email.value.trim();
        const passValor = pass.value.trim();
        const passConfirmaValor = passConfirma.value.trim();
    
        //validando campo usuario
        //(!usuarioValor) ? console.log('CAMPO VACIO') : console.log(usuarioValor)
        if(!usuarioValor){
            //console.log('CAMPO VACIO')
            validaFalla(usuario, 'Campo vacío')
            validado = false;
        }else{
            validaOk(usuario)
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
         //validando campo password        
        if(!passValor) {
            validado = false;
            validaFalla(pass, 'Campo vacío')
        } else if (passValor.length < 8) {  
            validado = false;           
            validaFalla(pass, 'Debe tener 8 caracteres cómo mínimo.')
        } else {
            validaOk(pass)
        }

         //validando campo password Confirmación
        if(!passConfirmaValor){
            validado = false;
            validaFalla(passConfirma, 'Confirme su password')
        } else if(passValor !== passConfirmaValor) {
            validado = false;
            validaFalla(passConfirma, 'La password no coincide')
        } else {
            validaOk(passConfirma)
        }
        return validado;
    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form_input falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form_input ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }

    const guardarDatos = () => {
        const data = {
            usuario: usuario.value,
            email: email.value,
            pass: pass.value,
            passConfirma: passConfirma.value
        };

        localStorage.setItem('formData', JSON.stringify(data));
        alert('Datos guardados en localStorage');
    };
/*
    const descargarDatos = () => {
        const data = JSON.parse(localStorage.getItem('formData'));
        if (data) {
            const dataStr = JSON.stringify(data);
            const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
            const exportFileDefaultName = 'datos.json';

            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
        } else {
            alert('No hay datos guardados en localStorage');
        }
    };
*/
})