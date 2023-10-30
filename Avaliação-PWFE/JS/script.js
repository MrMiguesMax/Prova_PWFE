document.addEventListener("DOMContentLoaded", () => {

    let mediaTrabalho = document.getElementById("mediaTrabalho");
    let mediaProva = document.getElementById("mediaProva");
    let situacaoT = document.getElementById("situacaoT");
    let situacaoP = document.getElementById("situacaoP");
    let notaT1Input = document.getElementById("notaT1");
    let notaT2Input = document.getElementById("notaT2");
    let notaT3Input = document.getElementById("notaT3");
    let notaP1Input = document.getElementById("notaP1");
    let notaP2Input = document.getElementById("notaP2");
    let notaP3Input = document.getElementById("notaP3");
    
    let mediaT = 0;
    
    function mediaTrabalhoCalculo(){
        let notaT1 = parseFloat(notaT1Input.value);
        let notaT2 = parseFloat(notaT2Input.value);
        let notaT3 = parseFloat(notaT3Input.value);
    
        mediaT = (notaT1 + notaT2 + notaT3) / 3;
    
        mediaTrabalho.textContent = mediaT;
    
        if(mediaT >= 5){
            situacaoT.textContent = "Sua nota média de trabalhos foi APROVADA!";
        } else{
            situacaoT.textContent = "Sua nota média de trabalhos foi REPROVADA!";
        }
    }

    function mediaProvaCalculo(){
        let notaP1 = parseFloat(notaP1Input.value);
        let notaP2 = parseFloat(notaP2Input.value);
        let notaP3 = parseFloat(notaP3Input.value);
    
        mediaP = (notaP1 + notaP2 + notaP3) / 3;
    
        mediaProva.textContent = mediaP;
    
        if(mediaP >= 5){
            situacaoP.textContent = "Sua nota média da prova foi APROVADA!";
        } else{
            situacaoP.textContent = "Sua nota média da Prova foi REPROVADA!";
        }
    }
        document.getElementById("calcularBtnT").addEventListener("click", () => mediaTrabalhoCalculo());
        document.getElementById("calcularBtnP").addEventListener("click", () => mediaProvaCalculo());
    })