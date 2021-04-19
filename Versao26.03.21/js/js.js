function verifyTime(){
    let hE = document.getElementById("input-he").value
    let hS = document.getElementById("input-hs").value
    
    if(hE > hS){
        alert("Ajuste de Hora inserido Inválido. Verifique os valores informados.")
    }    
}

function verifyDate(){
    let dE = document.getElementById("input-data-entrada").value
    let dS = document.getElementById("input-data-saida").value
    
    if(dE > dS){
        alert("A Data de Entrada não pode ser maior que a Data de Saída")
    }
}