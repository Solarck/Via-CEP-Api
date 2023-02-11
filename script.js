async function buscaEndereco(cep) {
    try {
        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let consultaCepConvertida = await consultaCep.json()

        if (consultaCepConvertida.erro) {
            throw Error('Cep não existente!')
        }

        const cidade = document.getElementById('cidade')
        const logradouro = document.getElementById('endereco')
        const estado = document.getElementById('estado')
        const bairro = document.getElementById('bairro')

        cidade.value = consultaCepConvertida.localidade
        logradouro.value = consultaCepConvertida.logradouro
        estado.value = consultaCepConvertida.uf
        bairro.value = consultaCepConvertida.bairro

        console.log(consultaCepConvertida)
        return consultaCepConvertida

    } catch (erro) {
        console.log(erro)
    }
}

const cep = document.getElementById('cep')
// focusout é um evento que funciona após clicar fora do campo selecionado.
cep.addEventListener("focusout", () => buscaEndereco(cep.value))

