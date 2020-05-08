import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AppRoutingModule } from './app-routing.module';
import { AppDropDownDirective } from './app-drop-down.directive';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { FullRecipeComponent } from './recipes/full-recipe/full-recipe.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipesComponent,
    AppDropDownDirective,
    RecipeDetailComponent,
    FullRecipeComponent,
    NotFoundComponent,
    EditRecipeComponent,
    ShoppingEditComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
