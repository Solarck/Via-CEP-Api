async function buscaEndereco() {
    try {
        const consultaCep = await fetch('https://viacep.com.br/ws/06395280/json/')
        let consultaCepConvertida = await consultaCep.json()

        if (consultaCepConvertida.erro) {
            throw Error('Cep não existente!')
        }

        console.log(consultaCepConvertida)

    } catch (erro) {
        console.log(erro)
    }
}

buscaEndereco()

