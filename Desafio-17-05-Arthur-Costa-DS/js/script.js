function clickbotao(){
    let inputName = document.getElementsByName('inputNome')
    console.log(outro);
    if ( inputName.value.length < 1 ){
        alert("favor informar Nome!")
        return
    }   
    let inputName2 = document.getElementsByName('inputSobrenome')
    if ( inputName2.value.length < 1 ){
        alert("favor informar Sobrenome!")
        return
    }
}

