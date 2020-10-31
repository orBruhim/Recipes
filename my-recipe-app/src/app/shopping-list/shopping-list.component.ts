import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { ShoppingService } from './shopping.service';
import { Ingridient } from '../recipes/ingridient.model';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  animations: [
    trigger ('list', [
      state ('normal', style ({
        opacity: 1,
      })),
      transition ('void => *' , [
         style ({
          opacity: 0,
        }), animate (800)
      ]),
    ])
  ]
 })
export class ShoppingListComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  shopping: Ingridient [];
  editItem: Ingridient;
  constructor(private shoppingService: ShoppingService,
              private route: Router) { }

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





