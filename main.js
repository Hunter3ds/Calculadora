const input1 = document.querySelector('#firstNo')
const input2 = document.querySelector('#secondNo')
let lastInput = input1;
let lastInput2 = input2;

function atualizarInput(valor){
    if(lastInput === input1 && !['+','-','*','%'].includes(valor)){
        input1.value += valor
    }else if(lastInput === input2 && !['+','-','*','%'].includes(valor)){
        input2.value +=valor
    }
}
input1.addEventListener('focus', ()=>{
    lastInput = input1;
    input1.selectionStart = input1.selectionEnd = input1.value.length;
});

input2.addEventListener('focus', ()=>{
    lastInput2 = input2;
    input2.selectionStart = input2.selectionEnd = input2.value.length;
});

function somar (){
    var resultado = new Calculadora(input1.value, input2.value)
    document.querySelector('#resultado').value = 'o resultado é' + resultado.soma()

}
let operacaoSoma= document.querySelector('#add');
operacaoSoma.onClick = ()=> somar();

function subtracao (){
    var resultado = new Calculadora(input1.value, input2.value)
    document.querySelector('#resultado').value = 'o resultado é' + resultado.subtracao();
}
let operacaoSubtracao = document.querySelector('#subtract');
operacaoSubtracao.onClick = ()=> subtracao()

function multiplicacao(){
    var resultado = new Calculadora(input1.value, input2.value)
    document.querySelector('#resultado').value = 'o resultado é' + resultado.multiplicacao();
}
let operacaoMultiplicacao = document.querySelector('#multiply');
operacaoMultiplicacao.onClick = ()=> multiplicacao();


function divisao(){
    var resultado = new Calculadora(input1.value, input2.value)
    document.querySelector('#resultado').value = 'o resultado é' + resultado.divisao();
}
let operacaoDivisao = document.querySelector('#divide')
operacaoDivisao.onClick = ()=> divisao();

function limpar(){
    input1.value = ""
    input2.value = ""
    document.querySelector('firstNo').value = "";
    document.querySelector("secondNo").value = "";
    document.querySelector("resultado").value = "";
    lastInput = input1;
    lastInput2 = input2;
}
const buttonLimpar = document.querySelector('#limparDisplay');
buttonLimpar.onClick=()=>limpar();

const buttonsNumericosEOperacoes = document.querySelectorAll('.keys');
buttonsNumericosEOperacoes.forEach((button)=>{
    button.addEventListener('click', ()=>{
        atualizarInput(button.textContent)
    });
});




