import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/distinctUntilChanged';

import { Pokemon } from '../services/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['../sprite.scss', './pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Observable<Pokemon>;

  constructor(
    private title: Title,
    private router: ActivatedRoute,
    private pokemonService: PokemonService) { }

  ngOnInit() {
    this.title.setTitle('Pokémon Detail');
    this.pokemon = this.router.params.distinctUntilChanged().mergeMap(params => {
      return this.pokemonService.pokemon.map(pokemon => pokemon.find(p => p.id === +params['id']));
    });
  }
}
