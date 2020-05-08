import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';

import { RecipesService } from './recipes/recipes.service';
import { Ingridient } from './recipes/ingridient.model';
import { ShoppingService } from './shopping-list/shopping.service';
import { Recipe } from './recipes/Recipe.model';

@Injectable ({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient,
                private recipeService: RecipesService,
                private shoppingListService: ShoppingService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put ('https://recipe-book-b56ee.firebaseio.com/recipes.json', recipes)
        .subscribe(respose => {
            console.log(respose);
            });
    }
    fetchRecipes() {
        return this.http.get <Recipe[]>
         ('https://recipe-book-b56ee.firebaseio.com/recipes.json')
         .pipe(
             tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                    console.log(recipes);
                }));
    }

    storeShoppingList() {
        const shopping = this.shoppingListService.getShopping();
        this.http.put ('https://recipe-book-b56ee.firebaseio.com/shopping.json', shopping)
        .subscribe(respose => {
            console.log(respose);
            });
    }

    fetchShoppingList() {
        return this.http.get <Ingridient[]>
         ('https://recipe-book-b56ee.firebaseio.com/shopping.json')
         .pipe(
             tap(shopping => {
                    this.shoppingListService.setShopping(shopping);
                    console.log(shopping);
                }));
    }

}
