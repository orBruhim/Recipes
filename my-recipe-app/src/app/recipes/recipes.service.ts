import { Injectable} from '@angular/core';
import { Subject} from 'rxjs';

import { ShoppingService } from '../shopping-list/shopping.service';
import { Ingridient } from './ingridient.model';
import { Recipe } from './Recipe.model';

@Injectable ( {
    providedIn: 'root'
})
export class RecipesService {
    recipeChanged = new Subject <Recipe[]> ();
    constructor(private shoppingService: ShoppingService) {}
     recipes: Recipe[] = [];
//     new Recipe (
//     'Shakshuka',
//      'Tomatos with eggs',
//      'https://imaot.co.il/images/Uploads/RecipeImages/502848682018.jpg',
//      [
//               new Ingridient('eggs', '3'),
//               new Ingridient('onion', '1 big'),
//               new Ingridient('tomatos', '4 big'),
//               new Ingridient('garlic', '2'),
//               new Ingridient('parsley', '1 spoon')

//             ],
// 'Mix all ingredients except of eggs together, cook over medium heat 10 minuthes ans then break the eggs into and cook 5 more minutes. ',
//    ),
//    new Recipe (
//     'Pizza',
//     'dough with tomatos and chhese',
//     'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
//     [new Ingridient ('flour', '2 cups'),
//     new Ingridient ('eggs', '2'),
//     new Ingridient ('oil', '1 cup'),
//     new Ingridient ('tomato paste', '3 spoons'),
//     new Ingridient ('cheese', '250 g'),
//   ],
//      'mix all ingredient of dough together, then add tomato paste and cheese. Bake 25 minutes on 180 C. ',
//     ),
//    new Recipe (
//     'Hamburger',
//     'meat ball with bread',
//    'https://assets.biggreenegg.eu/app/uploads/2019/03/28145521/topimage-classic-hamburger-2019m04-800x534.jpg',
//     [new Ingridient ('meat', '1 kg'),
//     new Ingridient ('onion', '2'),
//     new Ingridient ('parsley', '100 g'),
//     new Ingridient ('bun', '1'),
//     new Ingridient ('ketchup', '1 spoon'),
//     ],
//     'cook the meat over medium heat for 7 minutes, then spread ketchup on the bun.',
//     )

//     ];

    getRecipes() {
        return this.recipes.slice ();
    }
    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }
    getRecipe(name: string) {
        const recipe = this.recipes.find (
            (r) => {
            return r.name === name;
            }
        );
        return recipe;
    }
    AddToShoppingList(ingridients: Ingridient[]) {
        this.shoppingService.AddShoppingFromRecipe(ingridients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(name: string, newRecipe: Recipe) {
            const recipe = this.recipes.find (
            (r) => {
            return r.name === name;
            }
        );
            if (recipe) {
                recipe.name = newRecipe.name;
                recipe.description = newRecipe.description;
                recipe.imagepath = newRecipe.imagepath;
                recipe.ingridients = newRecipe.ingridients;
            }
            this.recipeChanged.next(this.recipes.slice());
    }
    DeleteRecipe(name: string) {
        const index = this.recipes.findIndex (
            (r) => {
                return r.name === name;
            }
            );
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
            }
    }
