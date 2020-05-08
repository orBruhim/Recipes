import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { FullRecipeComponent } from './recipes/full-recipe/full-recipe.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { RecipesResolverService } from './recipesResolver.service';


const appRoutes: Routes = [
{path: '', redirectTo: '/recipes', pathMatch: 'full'},
{path: 'recipes', component: RecipesComponent, children:
[{path: 'new', component: EditRecipeComponent},
{path: ':name/recipe-detail', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
{path: ':name/edit', component: EditRecipeComponent, resolve: [RecipesResolverService] }
]},
{path: 'recipes/:name/recipe-detail/full-recipe', component: FullRecipeComponent, resolve: [RecipesResolverService]},

{path: 'shoppingList', component: ShoppingListComponent},
{path: 'not-found', component: NotFoundComponent},
{path: '**', redirectTo: '/not-found'},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
