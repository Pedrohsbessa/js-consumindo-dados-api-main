async function endereço(cep) {
    const erroMsg = document.querySelector('#erro');
    erroMsg.innerHTML = '';
    try {
        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const result = await consultaCep.json()
        if (result.erro) {
            throw Error('cep inexistente')
        }
        const cidade = document.querySelector('#cidade')
        const bairro = document.querySelector('#bairro')
        const logradouro = document.querySelector('#endereco')
        const estado = document.querySelector('#estado')

        cidade.value = result.localidade;
        logradouro.value = result.logradouro;
        estado.value = result.uf;
        bairro.value = result.bairro;

        console.log(result);
        return result

    } catch (erro) {
        erroMsg.innerHTML = `<p>Cep Inválido tente novamente</p>`
        cidade.value = ''
        bairro.value = ''
        console.log(erro);
    }
}

const cep = document.querySelector('#cep')
cep.addEventListener("focusout", () => {
    endereço(cep.value)

}) 