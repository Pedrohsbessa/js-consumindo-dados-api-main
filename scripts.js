async function endereço(cep) {
    try {

        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const result = await consultaCep.json()
        if (result.erro) {
            throw Error('cep inexistente')
        }
        return result

        console.log(result);
    } catch (erro) {
        console.log(erro);
    }
}

endereço()