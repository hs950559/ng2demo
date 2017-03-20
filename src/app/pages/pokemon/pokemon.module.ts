import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonComponent } from './pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonService} from './services/pokemon.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PokemonRoutingModule
  ],
  declarations: [PokemonComponent, PokemonListComponent, PokemonDetailComponent],
  providers: [PokemonService]
})
export class PokemonModule { }
