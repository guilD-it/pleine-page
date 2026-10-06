import { Component, computed, inject, input } from '@angular/core';
import { LIVRES } from '../model/Livre';
import { Livre } from '../catalogue/livre/livre';
import { PanierService } from '../service/panierService.service';

@Component({
  selector: 'app-fiche',
  imports: [Livre],
  templateUrl: './fiche.html',
  styleUrl: './fiche.css',
})
export class Fiche {

  readonly id = input.required<string>();

  private readonly panier = inject(PanierService);

  protected readonly livre = computed(() =>
    LIVRES.find(l => l.id === Number(this.id()))
  );

  protected readonly ajoute = computed(() =>
    this.panier.panier().some(
      l => l.id === Number(this.id())
    )
  );

  protected ajouter(): void {
    const livre = this.livre();

    if (livre) {
      this.panier.ajouter(livre);
    }
  }

  protected readonly suggestions = computed(() =>
    LIVRES
      .filter(l => l.id !== Number(this.id()))
      .slice(0, 4)
  );
}