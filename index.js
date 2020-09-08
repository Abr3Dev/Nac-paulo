function mascaraCPF(cpfListener) {
        let tamanho = cpfListener.value.length;
        if (tamanho === 3) {
            cpfListener.value = cpfListener.value + '.';
        } if (tamanho === 7) {
            cpfListener.value = cpfListener.value + '.';
        } if (tamanho === 11) {
            cpfListener.value = cpfListener.value + '-';
        }
}
function mascaraNConta(NContaListener){
    let tamanho = NContaListener.value.length

    if(tamanho === 5){
        NContaListener.value = NContaListener.value + '-';
    }
}

function validaCPF(cpf){    
    if(cpf.length < 14){
        return "CPF deverá ser válido"
    }

}

function validaEndereço(endereco){
    if(endereco.length > 100){
        return "O endereço deverá ser menor que 100 caracteres."
    }
}

function validNumero(numero){
    if(numero.typeof == Number){
        return "O número deverá ser apenas NÚMEROS!"
    }
    if(numero.length > 6){
        return "O número deverá ser válido"
    }
}

function validaNome(nome){
    if(nome  == null || nome == "a"){
        return "O nome deverá ser preenchido, e entre 2 a 50 caracteres"
    }
}
function validaNumero(numero){
    if(numero.length < 0 || numero.length > 6){
        return "O número deverá ser válido"
    }
}

function contaValor(tipoConta, renda){
    if(tipoConta === 'corrente' && renda < 300 || tipoConta === 'poupanca' && renda < 300 ){
        return 'Você deverá possuir uma renda acima de 300 pseudo moedas';
    }
    else if(tipoConta === 'especial' && renda < 20900){
        return 'Você precisa ter uma renda de no mínimo 20900 pseudo moedas para criar uma conta especial' ;

    }
    else if(tipoConta === 'corrente' && renda < 20900 || tipoConta === 'poupanca' && renda < 20900 ){
        return 'Você possui uma renda acima do esperado para uma conta corrente ou poupança'
    }
    else{
        return ''
    }    
}

function submit(){ 
    let form = document.querySelector('form');
    let nome = document.querySelector('#nome');
    let cpf = document.querySelector('#cpf');
    let NConta = document.querySelector('#nr-conta');
    let tipoConta = document.querySelector('#tipoConta');
    let renda = document.querySelector('#renda');
    let numero = document.querySelector('#numero');
    let endereco = document.querySelector('#endereco');
    let erros = []

    
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
        
        erros.push(validaNome(nome.value));
        erros.push(validaEndereço(endereco.value));
        erros.push(validaNumero(numero.value));
        erros.push(validaCPF(cpf.value));
        erros.push(contaValor(tipoConta.value, renda.value));
        let erro = document.querySelector('.erro');
    
       console.log(erros)
    });
}

window.onload = submit()

