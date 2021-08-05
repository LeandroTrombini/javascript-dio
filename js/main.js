function clicou(){
    document.getElementById('agradecimento').innerHTML = "Obrigado por clicar"
  
}

function redirecionar(){
    window.open("https://github.com/")  // ou
  //  window.location.href = "https://github.com"  //abre na mesma janela
}

function trocar(element){
    //document.getElementById('mousemove').innerHTML = "Obrigado por passar o mouse"
    element.innerHTML = "Obrigado por passar o mouse"
}

function voltar(element){
    //document.getElementById('mousemove').innerHTML = "Passe o mouse aqui"
    element.innerHTML = "Passe o mouse aqui"
}

function change(element){
    console.log(element.value)
}
/*
function sum(n1,n2) {
    return n1 + n2;
}
*/

/*
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade){
    var validar = true;
    if (idade >= 18){
        validar = true
    }else {
        validar = false;
    }
    return validar
}
var idade = prompt("Qual sua idade?")
console.log(validaIdade(idade))

*/


//console.log(sum(5,7))
//console.log(setReplace("Vai Japão", "Japão", "Brasil"))



/*
var d = new Date();
alert(d.getMonth()+1)
*/

/*var count;

for (count = 0; count <= 5; count++) {
    alert(count)
}

*/


/*
var count = 0;
while (count <= 5) {
    console.log(count);
    count++
}
*/
/*
var age = prompt("Qual sua idade?")

if (age >= 18){
    console.log('Maior de idade!')
}else {
    console.log('Menor de idade!')
}

var name = 'Leandro Trombini';
var age = 38
var text = "Japan is the best team of the world.";
var n1 = 5
var n2 = 38

var list = ["aple", 'orange']
list.push("uva")




console.log(`${name} tem ${age} anos!`)
console.log(text.replace("Japan", "Brasil"))
console.log(text.toUpperCase())
console.log(n1 * n2)
console.log(list)
console.log(list.reverse())

*/