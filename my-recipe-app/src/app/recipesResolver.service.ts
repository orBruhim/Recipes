import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { DataStorageService } from './data-storage.service';
import { Recipe } from './recipes/Recipe.model';

@Injectable ({
    providedIn: 'root'
})
export class RecipesResolverService implements
Resolve <Recipe[]> {
constructor(private dataStorageService: DataStorageService) {}
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
return this.dataStorageService.fetchRecipes();
}
}
