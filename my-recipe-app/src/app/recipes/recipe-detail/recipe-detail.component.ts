import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RecipesService } from '../recipes.service';
import { Ingridient } from '../ingridient.model';
import { Recipe } from '../Recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  showIngridients = false;
  constructor(private recipesService: RecipesService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
    this.recipe = this.recipesService.getRecipe (name);
    this.route.params.subscribe ((params: Params) => {
    this.recipe = this.recipesService.getRecipe (params['name']);
    });
  }

  onShowIngridients() {
    this.showIngridients = !this.showIngridients;
  }

  onAddShoppingFromRecipe() {
    this.recipesService.AddToShoppingList(this.recipe.ingridients);
  }
  onDelete() {
  this.recipesService.DeleteRecipe(this.recipe.name);
  this.router.navigate(['']);
  }
}
