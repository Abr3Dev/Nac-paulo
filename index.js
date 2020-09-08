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

function validaTudo(){

    if(cpf.length > 14 || nome.value == "" || 
        tipoConta === 'corrente' && renda > 300 || 
    tipoConta === 'poupanca' && renda > 300 ||  tipoConta === 'especial' && renda > 20900 ||
    tipoConta === 'corrente' && renda < 20900 || tipoConta === 'poupanca' && renda < 20900 ||
    numero.length > 0 || numero.length < 6 || numero.value == "" || cpf.value == "" || renda.value == "")
    {
        //Validacao campos vazios
        if(numero.value == "" || cpf.value == "" || renda.value == "" || nome.value == "" || renda.value == ""){
            return "Falta de preenchimento de dados"
        }
        //Validacao CPF
        if(cpf.length < 14){
            return "CPF deverá ser válido"
        }

        //Validacao Numero
        if(numero.length < 0 || numero.length > 6){
            return "Numero invalido"
        }

        //Validacao Nome
        if(nome.value == "" || nome.length < 3){
            return "Nome invalido"
        }

        //Validacao Tipo de conta e renda
        if(tipoConta === 'corrente' && renda < 300 || tipoConta === 'poupanca' && renda < 300 ){
            return 'Você deverá possuir uma renda acima de 300 pseudo moedas';
        }

        if(tipoConta === 'especial' && renda < 20900){
            return 'Você precisa ter uma renda de no mínimo 20900 pseudo moedas para criar uma conta especial' ;
        }

        if(tipoConta === 'corrente' && renda > 20900 || tipoConta === 'poupanca' && renda > 20900 ){
            return 'Você possui uma renda acima do esperado para uma conta corrente ou poupança'
        }
    }
    else{
        return "Cadastro Realizado com sucesso"
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
        
        erros.push(validaTudo(tipoConta.value, renda.value));
        let erro = document.querySelector('.erro');
    
        for (let i = 0; i < erros.length; i++) {
        
           let span = document.createElement('p');

           span.innerHTML = erros[i];
           
           erro.appendChild(span)
        }

    });
}

window.onload = submit()

