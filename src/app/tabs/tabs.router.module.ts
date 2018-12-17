import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: '../home/home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'prebooktee',
                children: [
                    {
                        path: '',
                        loadChildren: '../prebooktee/prebooktee/prebooktee.module#PrebookteePageModule'
                    }
                ]
            },
            {
                path: 'calender',
                children: [
                    {
                        path: '',
                        loadChildren: '../calender/calender/calender.module#CalenderPageModule'
                    }
                ]
            },
            {
                path: 'me',
                children: [
                    {
                        path: '',
                        loadChildren: '../me/me/me.module#MePageModule'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {}
