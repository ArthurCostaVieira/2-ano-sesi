function clickbotao(){
    let inputName = document.getElementById('inputNome')   
    if ( inputName.value.length < 1 ){
      alert("Favor informar seu nome!")
      return
      
    }
    let inputName2 = document.getElementById('inputSobrenome')   
    if ( inputName2.value.length < 1 ){
      alert("Favor informar seu sobrenome!")
      return
      
    }
    let inputName3 = document.getElementById('inputIdade')   
    if ( inputName3.value.length < 1 ){
      alert("Favor informar sua idade!")
      return
      
    }
    let inputName4 = document.getElementById('inputSala')   
    if ( inputName4.value.length < 1 ){
      alert("Favor informar sua sala!")
      return
      
    }
    let inputName5 = document.getElementById('inputEquipe')   
    if ( inputName5.value.length < 1 ){
      alert("Favor informar sua equipe!")
      return
      
    }
    let inputName7 = document.getElementById('inputMora')   
    if ( inputName7.value.length < 1 ){
      alert("Favor informar sua cidade!")
      return
      
    }

    let teste = {
       1 : inputName.value,
       2 : inputName2.value,
       3 : inputName3.value,
       4 : inputName4.value,
       5 : inputName5.value,
       7 : inputName7.value,
    }
    console.log(teste)
    console.log(teste.nome)

    let corpoTabela = document.getElementById('corpo-tabela')

    let testeeeee = "<tr><td>"+ inputName.value +"</td>" +
    "<td>"+teste.nome+"</td>" +
    "<td>"+teste.nome+"</td>" +
    "<td>"+teste.nome+"</td>" +
    "<td>"+teste.nome+"</td>" +
    "<td>"+teste.nome+"</td>" +
    "</tr>"
    console.log(testeeeee);

    corpoTabela.innerHTML = testeeeee


    
    
    }
  
  
  