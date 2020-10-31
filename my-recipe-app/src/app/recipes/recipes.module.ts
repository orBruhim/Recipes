import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FullRecipeComponent } from './full-recipe/full-recipe.component';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeDetailComponent,
        FullRecipeComponent,
        EditRecipeComponent,
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        CommonModule,
        RecipesRoutingModule
    ]
})
export class RecipesModule {}

