import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { RecipesService } from './recipes.service';
import { Recipe } from './Recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],

})
export class RecipesComponent implements OnInit, OnDestroy {
  recipes = [];
  sub: Subscription;
  constructor( private recipesService: RecipesService,
               private router: Router) {}

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
    this.sub = this.recipesService.recipeChanged
    .subscribe (
      (recipes: Recipe[]) => {
      this.recipes = recipes;
    }
    );
  }
  newRecipe() {
    this.router.navigate(['recipes/new']);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
