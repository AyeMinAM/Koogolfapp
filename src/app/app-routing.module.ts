import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home/home.module#HomePageModule' },
  { path: 'me', loadChildren: './me/me/me.module#MePageModule' },
  { path: 'calender', loadChildren: './calender/calender/calender.module#CalenderPageModule' },  { path: 'prebooktee', loadChildren: './prebooktee/prebooktee/prebooktee.module#PrebookteePageModule' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
