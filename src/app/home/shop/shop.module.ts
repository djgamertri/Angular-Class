import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ItemComponent } from './item/item.component';
import { CategoriaComponent } from './categoria/categoria.component';



@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShopModule { }
