const form = document.getElementById("form-cliente")
const btnEnviar = document.getElementById("btn-enviar")

form.addEventListener("submit", (event)=>{
    event.preventDefault() // evita recarregar a página antes de enviar os dados
    // pegar dados do formulário
    const dados = pegarDadosCliente();
    // enviar dados para a API
    try {

    } catch {
        
    }
})

function pegarDadosCliente(){
    let cliente = new Object()
    cliente.nome_completo = document.getElementById("nome_completo").value;
    cliente.cpf = document.getElementById("cpf").value;
    cliente.estado = document.getElementById("estado").value;
    cliente.cidade = document.getElementById("cidade").value;
    cliente.bairro = document.getElementById("bairro").value;
    cliente.n_casa = document.getElementById("numero").value;
    cliente.rua = document.getElementById("rua").value;
    cliente.cep = document.getElementById("cep").value;
    cliente.email = document.getElementById("email").value;
    cliente.telefone = document.getElementById("telefone").value;
    cliente.senha = document.getElementById("senha").value;
    return cliente;
}
