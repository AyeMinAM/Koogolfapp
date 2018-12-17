import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrebookteePage } from './prebooktee.page';
import { PrebookTeeDetailComponent } from './detail/prebook-tee-detail.component';

const routes: Routes = [
    {
        path: '',
        component: PrebookteePage
    },
    {
        path: 'detail/:id',
        component: PrebookTeeDetailComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [PrebookteePage, PrebookTeeDetailComponent]
})
export class PrebookteePageModule {}
