import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';

import {HomePageModule} from "../home/home/home.module";
import {CalenderPageModule} from "../calender/calender/calender.module";
import {MePageModule} from "../me/me/me.module";
import {PrebookteePageModule} from "../prebooktee/prebooktee/prebooktee.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    PrebookteePageModule,
    CalenderPageModule,
    MePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
