const form = document.getElementById('form-Atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado Reprovado">Reprovado</span>';
const notainima = parseFloat(prompt('digite a nota minima:'));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFnal();
});

function adicionaLinha(){
    
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtiviade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`a atividade ${inputNomeAtividade.value} ja foi inserida`);
    }else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtiviade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtiviade.value}</td>`
        linha += `<td>${inputNotaAtiviade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    
        linhas += linha

    }

    inputNomeAtividade.value = '';
    inputNotaAtiviade.value = '';
}

function atualizaTabela(){
    const CorpoTabela = document.querySelector('tbody');
    CorpoTabela.innerHTML = linhas;
}
 
function atualizaMediaFnal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('Media-Final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('Media-final-resultado').innerHTML = mediaFinal >= notainima ? spanAprovado : spanReprovado;
    
}

function calculaMediaFinal(){
    let somaDasNotas = 0;
    for(let i =0; i< notas.length; i++){
        somaDasNotas += notas[i];
    }

   return somaDasNotas / notas.length;
}