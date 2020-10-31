import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';



const appRoutes: Routes = [
{path: '', redirectTo: '/recipes', pathMatch: 'full'},
{path: 'recipes', loadChildren: () => import ('./recipes/recipes.module'). then (m => m.RecipesModule)},
{path: 'shoppingList', loadChildren: () => import ('./shopping-list/shoppingList.module'). then (m => m.ShoppingListModule)},
{path: 'auth', loadChildren: () => import ('./auth/auth.module'). then (m => m.AuthModule)},
// {path: 'not-found', component: NotFoundComponent},
// // {path: '**', redirectTo: '/not-found'},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
