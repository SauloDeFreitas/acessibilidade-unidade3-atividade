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