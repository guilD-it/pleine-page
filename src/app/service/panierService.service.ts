import { Injectable, computed, signal } from '@angular/core';
import { Livre } from '../model/Livre';

@Injectable({
    providedIn: 'root'
})
export class PanierService {

    private readonly articles = signal<Livre[]>([]);

    readonly panier = this.articles.asReadonly();
    readonly ouvert = signal(false);

    readonly nombreArticles = computed(() =>
        this.articles().length
    );

    readonly total = computed(() =>
        this.articles().reduce(
            (total, livre) => total + livre.prix,
            0
        )
    );

    ajouter(livre: Livre): void {
        this.articles.update(articles => [
            ...articles,
            livre
        ]);
    }

    retirer(id: number): void {
        this.articles.update(articles =>
            articles.filter(livre => livre.id !== id)
        );
    }

    ouvrir(): void {
        this.ouvert.set(true);
    }

    fermer(): void {
        this.ouvert.set(false);
    }

    toggle(): void {
        this.ouvert.update(ouvert => !ouvert);
        console.log(this.ouvert());
    }
}