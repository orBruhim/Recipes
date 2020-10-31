import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListRoutingModule } from './shoppingList-routing.module';

@NgModule ({
    declarations: [ ShoppingListComponent,
        ShoppingEditComponent,
     ],
    imports: [RouterModule,
            FormsModule,
            CommonModule,
            ShoppingListRoutingModule
            ]
})
export class ShoppingListModule {}
