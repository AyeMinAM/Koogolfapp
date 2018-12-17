import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import {HomePage} from "../home/home/home.page";
import {CalenderPage} from "../calender/calender/calender.page";
import {PrebookteeListPage} from "../prebooktee/prebooktee-list/prebooktee-list.page";
import {MePage} from "../me/me/me.page";

// import { Tab1Page } from '../tab1/tab1.page';
// import { Tab2Page } from '../tab2/tab2.page';
// import { Tab3Page } from '../tab3/tab3.page';

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
                path: 'prebookteelist',
                outlet: 'prebooktee',
                component: PrebookteeListPage
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
