import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PanierService } from './service/panierService.service';
import { Panier } from './panier/panier';
@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink, Panier],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {

    readonly panier = inject(PanierService);

    ouvrirPanier(): void {
        this.panier.toggle();
        console.log("panier pressed");

    }
}
