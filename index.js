const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,?!'_-&@#$%*()/:<>|+="

//codificar funçao

function codificarTexto(text, key){
    let condificarTexto = "";

    for(let i = 0; i< text.length; i++){
        const textChar = text[i];
        const keyChar = key[i % key.length];

        const textIndex = alfabeto.indexOf(textChar);
        const keyIndex = alfabeto.indexOf(keyChar);

        if(textIndex === -1){
            condificarTexto += textChar;
        }else{
            const newIndex = (textIndex + keyIndex) % alfabeto.length;
            codificarTexto += alfabeto[newIndex];
        }
    }
    return codificarTexto;
}
// decodificar funçao

function decodificarTexto(codificarTexto, key){
    let decodificarTexto = "";

    for(let i =0; i < decodificarTexto.length; i++){
        const codificarChar = condificarTexto[i];
        const keyChar = key[i % key.length];

        const codificarIndex = alfabeto.indexOf(codificarChar);
        const keyIndex = alfabeto.indexOf(keyChar);

        if(codificarTexto == -1){
            decodificarTexto += codificarTexto;
        }else{
            let newIndex = codificarIndex - keyIndex;
            if(newIndex < 0) newIndex += alfabeto.length;
            decodificarTexto += alfabeto[newIndex];
        }
    }

    return decodificarTexto;
}

// Update resultado

function updateResultado (isCodificar){
    const text = document.getElementById("message").value;
    const key = document.getElementById("key").value;

    let resultado = "";

    if(isCodificar){
        resultado = codificarTexto(text,key);
    }else{
        resultado = decodificarTexto(text,key);
    }

    document.getElementById("resultado").textContent = resultado;
}

// butao

document.getElementById("enc-btn").addEventListener('click', function(){
    updateResultado(true);
});

document.getElementById("enc-btn").addEventListener('click', function(){
    updateResultado(false);
});

//iniciar

document.addEventListener('DOMContentLoaded', () => {
    updateResultado(true);
});
