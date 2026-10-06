import { Component, computed, Input, signal } from '@angular/core';
import { LIVRES } from '../model/Livre';
import { Livre } from './livre/livre';

@Component({
  selector: 'app-catalogue',
  imports: [ Livre],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.css',
})
export class Catalogue {
  protected readonly filtre = signal('');
  protected readonly resultats = computed(() =>
    LIVRES.filter(l => l.auteur.toLowerCase()
      .includes(this.filtre().toLowerCase()))
  );

}
