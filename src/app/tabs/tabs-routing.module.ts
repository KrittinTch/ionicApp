import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'home', loadChildren: 'src/app/home/home.module#HomePageModule' },
      { path: 'store', loadChildren: 'src/app/store/store.module#StorePageModule' },
      { path: 'reward', loadChildren: 'src/app/reward/reward.module#RewardPageModule' },
      { path: 'cart', loadChildren: 'src/app/cart/cart.module#CartPageModule' },
      { path: 'account', loadChildren: 'src/app/account/account.module#AccountPageModule' },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
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
export class TabsPageRoutingModule { }
