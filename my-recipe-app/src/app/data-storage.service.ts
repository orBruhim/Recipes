import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap, take, exhaustMap} from 'rxjs/operators';

import { RecipesService } from './recipes/recipes.service';
import { Ingridient } from './recipes/ingridient.model';
import { ShoppingService } from './shopping-list/shopping.service';
import { Recipe } from './recipes/Recipe.model';
import { AuthService } from './auth/auth.service';

@Injectable ({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient,
                private recipeService: RecipesService,
                private shoppingListService: ShoppingService,
                private authService: AuthService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put ('https://recipe-book-b56ee.firebaseio.com/recipes.json', recipes)
        .subscribe(respose => {
            console.log(respose);
            });
    }
    fetchRecipes() {
        return this.http.get <Recipe[]>
         ('https://recipe-book-b56ee.firebaseio.com/recipes.json', ).pipe(
         tap(recipes => {
            this.recipeService.setRecipes(recipes);
            console.log(recipes);
        }));

    }

    storeShoppingList() {
        const shopping = this.shoppingListService.getShopping();
        return this.http.put ('https://recipe-book-b56ee.firebaseio.com/shopping.json', shopping);
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
