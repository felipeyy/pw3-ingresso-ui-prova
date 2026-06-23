import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Container } from '../../shared/components/container/container';
import { Filme } from '../../core/model/filme';
import { Sessao } from '../../core/model/sessao';
import { Observable, of } from 'rxjs';
import { FilmeService } from '../../core/services/filme-service';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, Container],
  templateUrl: './detalhes.html',
  styleUrl: './detalhes.css'
})
export class DetalhesComponent implements OnInit {

  private filmeService = null;

  filme: Observable<Filme> = of();
  sessoes: Observable<Sessao[]> = of([]);

  ngOnInit(): void {
    this.filme = of( {id: 1, nome: 'Superman Legacy', duracao: 105, genero: 'ANIMACAO', classificacao: 'Não recomendado para menores de 14 anos', ano: 2025, capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqPpZ0IEtAuGFobO5n9ex1WNKAHlE70iJAVi0TIB8WuJ-NrskmMOQRm4&s=10', diretor: 'James Gunn', elenco: 'David Corenswet, Rachel Brosnahan, Nicholas Hoult', descricao: 'O universo DC imaginado do zero com uma mistura singular de ação épica, humor e emoção.', avaliacao: 7.6 });

    this.sessoes = of ([
      { id: 1, horario: '11:00', sala: 'Sala 1' , preco: 19.99 },
      { id: 2, horario: '13:30', sala: 'Sala 1' , preco: 19.99 },
      { id: 3, horario: '17:00', sala: 'Sala 1' , preco: 19.99 }
    ]);
  }


}
