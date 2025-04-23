const livros = require("./livros.json");

function mostralivros(){
    livros.forEach((livro) => {
        console.log(livro.titulo + " - " + 
            livro.autor + "\nAno: " + 
            livro.ano + "\nPáginas: " +
            livro.paginas + "\nPreço: R$ " +
            livro.preco +
            "\n"
        )
    })
}

function adicionaLivro(titulo, autor, editora, ano, sinopse, paginas, genero, preco) {
    livros.push({
        titulo: titulo,
        autor: autor,
        editora: editora,
        ano: ano,
        sinopse: sinopse,
        paginas: paginas,
        genero: genero,
        preco: preco
    });
    console.log("Livro adicionado com sucesso!")
}

adicionaLivro(
    "A Revolução dos Bichos", 
    "George Orwell", 
    "Companhia das Letras", 
    2007, 
    "É uma fábula política que narra a insurreição dos animais de uma granja contra seus donos humanos. No entanto, a revolução degenera em uma tirania ainda mais opressiva",
    152,
    ["Fábula", "Ficção política"], 
    43.62);


// JSON = JavaScript Object Notation
//Gera um arquivo JSON dos livros
// fs = file save - trabalhar com os arquivos
function criarArquivo(){
    let livrosTexto = JSON.stringify(livros);
    const fs = require('fs')
    fs.writeFileSync("livros.json", livrosTexto)
}

// criarArquivo();
mostralivros();
