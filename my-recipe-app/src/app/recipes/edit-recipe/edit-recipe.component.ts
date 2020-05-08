import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  name: string;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeService: RecipesService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    this.route.params
    .subscribe(
      (params: Params) => {
        this.name = params['name'];
        this.editMode = params['name'] != null;
    }
    );
    this.initForm();
  }

  onCancel() {
    this.router.navigate(['../']);
  }

  onSubmit() {
   if (this.editMode) {
     this.recipeService.updateRecipe(this.name, this.recipeForm.value);
   } else {
     this.recipeService.addRecipe(this.recipeForm.value);
   }
   this.onCancel();
    }

  onAddIngridient() {
    (<FormArray>this.recipeForm.get('ingridients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null)
      })
    );
  }

  private initForm() {
    let description = '';
    let imagepath = '';
    let name = '';
    let fullRecipe = '';
    const recipeIngridients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.name);
      description = recipe.description;
      imagepath = recipe.imagepath;
      name = recipe.name;
      fullRecipe = recipe.fullRecipe;
      if (recipe['ingridients']) {
        for (let ingridient of recipe.ingridients) {
          recipeIngridients.push(
            new FormGroup ({
              'name': new FormControl (ingridient.name, Validators.required),
              'amount': new FormControl (ingridient.amount, Validators.required)
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup ({
      'name': new FormControl (name, Validators.required),
      'imagepath': new FormControl (imagepath, Validators.required),
      'description': new FormControl (description, Validators.required),
      'ingridients' : recipeIngridients,
      'fullRecipe' : new FormControl (fullRecipe)
    });
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingridients')).controls;
  }
  onDeleteIngridient(i: number) {
    (<FormArray>this.recipeForm.get('ingridients')).removeAt(i);
  }

}
