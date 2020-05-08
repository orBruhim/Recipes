import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { ShoppingService } from './shopping.service';
import { Ingridient } from '../recipes/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
 })
export class ShoppingListComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  shopping: Ingridient [];
  editItem: Ingridient;
  constructor( private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.shopping = this.shoppingService.getShopping();
    this.sub = this.shoppingService.ingridientChanged
    .subscribe (
      (ingridients: Ingridient[]) => {
          this.shopping = ingridients;
        }
      );
  }
  onEditItem(i: number) {
    this.shoppingService.startedEditing.next(i);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}





