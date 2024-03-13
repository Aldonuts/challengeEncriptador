let textoInput = '';
let llavesEncriptar = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};
let resultado = '';

function validar(){
    var regex = /^[A-Za-z0-9\s]+$/;
    if (regex.test(textoInput)) {
        return true
    }else{
        return false
    }   
}

function encriptar(){
    resultado = '';
    if (document.getElementById('inputTexto').value) {
        textoInput = document.getElementById('inputTexto').value;
        if (validar()) {            
            for(let letra of textoInput){
                if (llavesEncriptar[letra]) {
                    resultado += llavesEncriptar[letra]
                }else{
                    resultado += letra
                }
            }
            document.getElementById('noResultado').hidden = true;
            document.getElementById('siResultado').style.display = 'grid';
            document.getElementById('textoResultado').innerHTML = resultado;
        }else{
            alert('No se puede usar acentos ni caracteres especiales');
        }
    }else{
        alert('Primero, ingrese un texto.');
    }
}

function desencriptar(){
    resultado = '';
    if (document.getElementById('inputTexto').value) {
        textoInput = document.getElementById('inputTexto').value;
        if (validar()) {
            resultado = textoInput.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');
            document.getElementById('noResultado').hidden = true;
            document.getElementById('siResultado').style.display = 'grid';
            document.getElementById('textoResultado').innerHTML = resultado;            
        }else{
            alert('No se puede usar acentos ni caracteres especiales');
        }
    }else{
        alert('Primero, ingrese un texto.');
    }
}

function copiar(){
    navigator.clipboard.writeText(resultado);
    alert('Texto copiado al portapapeles.');
}