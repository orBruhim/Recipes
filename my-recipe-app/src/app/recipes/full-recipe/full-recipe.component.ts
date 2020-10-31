import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from '../Recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-full-recipe',
  templateUrl: './full-recipe.component.html',
  styleUrls: ['./full-recipe.component.css']
})
export class FullRecipeComponent implements OnInit {
  recipeName = '';
  recipe: Recipe;
  videoUrl = '';
  constructor(private route: ActivatedRoute,
              private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipeName = this.route.snapshot.params.name;
    this.recipe = this.recipeService.getRecipe(this.recipeName);
  }

}
