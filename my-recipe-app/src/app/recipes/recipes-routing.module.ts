import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGguard } from '../auth/auth.guard';
import { RecipesComponent } from './recipes.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesResolverService } from '../recipesResolver.service';
import { FullRecipeComponent } from './full-recipe/full-recipe.component';

const routes: Routes = [
{path: '',
canActivate: [AuthGguard],
 component: RecipesComponent,
  children:
[{path: 'new', component: EditRecipeComponent},
{path: ':name/recipe-detail', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
{path: ':name/edit', component: EditRecipeComponent, resolve: [RecipesResolverService] }
]},
{path: ':name/recipe-detail/full-recipe', component: FullRecipeComponent, resolve: [RecipesResolverService]}
];

@NgModule ({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RecipesRoutingModule {}
