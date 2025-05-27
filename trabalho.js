function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase()
}


function verificarSePodeSerAdotado(idade, porte) {
    return idade === 1 && porte === 'M'
}

function calcularConsumoDeRacao(nome, idade, peso) {
    const consumoDiario = peso * 300
    return consumoDiario
}

function decidirTipoDeAtividadePorPorte(porte) {
    if (porte === 'pequeno') {
        return 'brincar dentro de casa';
    }
}

async function buscarDadoAsync() {
    return 'Pipoca';
}


export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}