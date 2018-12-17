import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import {HomePage} from "../home/home/home.page";
import {CalenderPage} from "../calender/calender/calender.page";
import {MePage} from "../me/me/me.page";
import {PrebookteePage} from "../prebooktee/prebooktee/prebooktee.page";

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: '',
                redirectTo: '/tabs/(home:home)',
                pathMatch: 'full',
            },
            {
                path: 'home',
                outlet: 'home',
                component: HomePage
            },
            {
                path: 'prebooktee',
                outlet: 'prebooktee',
                component: PrebookteePage
            },
            {
                path: 'calender',
                outlet: 'calender',
                component: CalenderPage
            },
            {
                path: 'me',
                outlet: 'me',
                component: MePage
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {}
