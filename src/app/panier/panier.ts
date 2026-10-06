import { Component, inject } from '@angular/core';
import { PanierService } from '../service/panierService.service';

@Component({
  selector: 'app-panier',
  imports: [],
  templateUrl: './panier.html',
  styleUrl: './panier.css',
})
export class Panier {
    protected readonly panier = inject(PanierService);

}
