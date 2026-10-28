const containerSlides = document.getElementById("slides")
let totalSlides = document.querySelectorAll(".cartao").length
let indiceAtual = 1

function moverCarrosselEsquerda(){    
    if(indiceAtual == 1){
        containerSlides.style.translate = "-33.3%"
        indiceAtual +=1
        return
    }

    if(indiceAtual == 2){
        containerSlides.style.translate = "-66.6%"
        indiceAtual +=1
        return
    }

    if(indiceAtual == 3){
        containerSlides.style.translate = "0%";
        indiceAtual = 1
    }
}

function moverCarrosselDireita(){
    if(indiceAtual == 1){
        containerSlides.style.translate = "-66.6%"
        indiceAtual =3
        return
    }

    if(indiceAtual == 2){
        containerSlides.style.translate = "0%"
        indiceAtual -=1
        return
    }

    if(indiceAtual == 3){
        containerSlides.style.translate = "-33.3%";
        indiceAtual -= 1
    }
}

function verificarCampo(campo){
    const cam = document.getElementById(campo)
    const erro = document.getElementById('erro_' + campo)

    if(cam.value <= 0){
        erro.textContent = "Preencha o campo!"
        cam.setAttribute('aria-invalid', 'true')
    }

    else{
        if(cam.type == "email"){
            if(!cam.checkValidity()){
                erro.textContent = "Preencha o campo!"
                return
            }
        }
        erro.textContent = ""
        cam.removeAttribute('aria-invalid', 'true')
    }
}

function verificarTermos(campo){
    const cam = document.getElementById(campo)
    const erro = document.getElementById('erro_aceiteTermos')

    if(!cam.checked){
        erro.textContent = "Aceite os termos"
    }
    else{
        erro.textContent = ""
    }
}

function verificarForm(){
    const campos = querySelectorAll('[required]');
    const primeiroCampoInvalido = false 

    campos.forEach(campo => {
        if (campo.validity.valueMissing) {
        campo.setAttribute('aria-invalid', 'true');
        
        if (!primeiroCampoInvalido) {
            primeiroCampoInvalido = campo;
        }
        } else {
            campo.removeAttribute('aria-invalid');
        }
    })
}