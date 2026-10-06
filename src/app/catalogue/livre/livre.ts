import { Component, computed, input, signal } from '@angular/core';
import { Livre as LivreModel } from '../../model/Livre';
import { RouterLink } from '@angular/router';
import { MatCard, MatCardHeader, MatCardFooter, MatCardTitle } from '@angular/material/card';


@Component({
  selector: 'app-livre',
  imports: [RouterLink, MatCard, MatCardHeader, MatCardFooter, MatCardTitle],
  templateUrl: './livre.html',
  styleUrl: './livre.css',
})
export class Livre {
  livre = input.required<LivreModel>();
  couleur = computed(() => {
    const couleurs = [
      '#E8D5C4',
      '#D6E4E5',
      '#E5D9F2',
      '#F5E6A8',
      '#CDE8D2',
      '#F2C6C2',
      '#D9D2E9',
      '#C9D6E8'
    ];

    return couleurs[this.livre().id % couleurs.length];
  });


}
