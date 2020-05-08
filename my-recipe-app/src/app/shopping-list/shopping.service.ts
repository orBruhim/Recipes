import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

import { Ingridient } from '../recipes/ingridient.model';

@Injectable({
    providedIn: 'root'
})

export class ShoppingService {
    startedEditing = new Subject <number> ();
    ingridientChanged = new Subject <Ingridient[]> ();
    ingridients = [
    new Ingridient ('Sugar', '4 kg'),
    new Ingridient ('Milk', '4 L'),
    ];

    getShopping() {
        return this.ingridients.slice();
    }
    getShop(index: number) {
        return this.ingridients[index];
    }
    AddShopping(ingridient: Ingridient) {
        this.ingridients.push (ingridient);
        this.ingridientChanged.next(this.ingridients.slice());
    }

    AddShoppingFromRecipe(ingridients: Ingridient[]) {
        this.ingridients.push(...ingridients);
        this.ingridientChanged.next(this.ingridients.slice());
    }

    updateShopping( i: number, newIngridient: Ingridient) {
        this.ingridients[i] = newIngridient;
        this.ingridientChanged.next(this.ingridients.slice());
    }
    deleteShop(index: number) {
        this.ingridients.splice(index , 1);
        this.ingridientChanged.next(this.ingridients.slice());

    }
    setShopping(shopping: Ingridient[]) {
        this.ingridients = shopping;
        this.ingridientChanged.next(this.ingridients.slice());
    }
}
