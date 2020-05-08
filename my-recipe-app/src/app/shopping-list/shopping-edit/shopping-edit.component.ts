import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingridient } from 'src/app/recipes/ingridient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  sub: Subscription;
  shopping: Ingridient[];
  editMode = false;
  index: number;
  editedItem: Ingridient;
  @ViewChild('f') form: NgForm;
  constructor( private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.sub = this.shoppingService.startedEditing
    .subscribe(
      (i: number) => {
        this.editMode = true;
        this.index = i;
        this.editedItem = this.shoppingService.getShop(this.index);
        this.form.setValue({
          ingridient : this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
      );
  }
  onAddIngridient(f: NgForm) {
    const value = f.value;
    const ingridient = new Ingridient (value.ingridient, value.amount);
    if (this.editMode) {
      this.shoppingService.updateShopping(this.index, ingridient);
    } else {
      this.shoppingService.AddShopping(ingridient);
        }
    this.onClear();
     }

  onClear() {
  this.form.reset();
  this.editMode = false;
}
onDelete() {
this.shoppingService.deleteShop(this.index);
this.onClear();
}

ngOnDestroy() {
  this.sub.unsubscribe();
}
}
