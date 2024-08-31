import { Component, OnInit } from '@angular/core';
import  ControleEditoraService from '../controle-editora.service';
import  ControleLivrosService  from '../controle-livros.service';
import  Livro  from '../livro';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})


export class LivroDadosComponent implements OnInit {

  editoras:{ codEditora: number; nome: string; }[] = [];

  autoresForm:string = "";

   livro:Livro = {
    codEditora: 1,
    codigo:0,
    titulo:"",
    resumo:"",
    autores:[]
  };
  
  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService) { }
  
  
  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras().map( editora => ({
      codEditora: editora.codEditora,
      nome: editora.nome,
    }));

    this.livro.codEditora = this.editoras[0].codEditora;
  }
  
  incluir=():void=>{
    this.livro = {
      ...this.livro,
      codigo: 0,
      autores: this.autoresForm.split('\n'),
      codEditora: Number( this.livro.codEditora ) ,
    };

    console.log( "livro", this.livro)

    this.servLivros.incluir( this.livro )
  }

  obterNome = (codEditora: number): string => this.servEditora.getNomeEditora(codEditora);
}
