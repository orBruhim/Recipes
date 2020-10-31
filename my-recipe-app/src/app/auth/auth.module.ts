import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';

@NgModule ({
    declarations: [AuthComponent],
    imports: [RouterModule,
            FormsModule,
            CommonModule,
            RouterModule.forChild ([{path: '', component: AuthComponent}]
            )
]
})

export class AuthModule {}
