const consultaCep = fetch('https://viacep.com.br/ws/06395280/json/')
    .then(resposta => resposta.json())
    .then(r => {
        if(r.erro){
            throw Error('Esse cep não existe!')
        }
    console.log(r.cep)
    console.log(r.logradouro)
    console.log(r.bairro)
    console.log(r.uf)
    console.log(r)
    })
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log('Processamento conscluído!'))
