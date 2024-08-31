import Livro from "./livro";

const livros:  Array<Livro>=[
    new Livro(1,2,"Um conto para dormir", "Não há esperança no sonho, apenas pesadelos....",["Alguem de Freitas"] ),
    new Livro(2,1, "Harry Potter e os Lannister", "Harry e seus amigos aventuram em Westeros",["George Martão", "Hillary Clinton" ] ),
    new Livro(3,3, "As Aventuras de Doro", "Dora decidiu ser transgenero e esta é sua história", ["Porquinho da India", "Amon rá"]),
];
 
class ControleLivro {
    // public constructor(parameters) {};

    obterLivros(): Array<Livro> {
        return livros;
    }

    incluir( livro:Livro ){
        const codigos = livros.map( livro => livro.codigo );
        const CodigoMaisAlto = Math.max( ...codigos );
    
        livro.codigo = CodigoMaisAlto + 1;

        console.log( "livro-controle",livro )
        livros.push( livro );
    }

    excluir( codigo:number ){
       const livroEncontrado = livros.findIndex( livro => livro.codigo === codigo );
       livros.splice( livroEncontrado, 1 );
    }
}

export default ControleLivro

