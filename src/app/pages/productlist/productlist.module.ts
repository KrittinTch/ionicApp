import { ProductlistService } from './productlist.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductlistPage } from './productlist.page';
import { resolve } from 'path';

const routes: Routes = [
  {
    path: '',
    component: ProductlistPage,
    resolve: {
      Products: ProductlistService

    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductlistPage]
})
export class ProductlistPageModule {}
