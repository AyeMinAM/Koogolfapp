import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrebookteePage } from './prebooktee.page';
import { DetailComponent } from "../detail/detail.component";

const routes: Routes = [
    { path: '', component: PrebookteePage },
    { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [PrebookteePage,DetailComponent]
})
export class PrebookteePageModule {}
