import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav/nav.component';
import { ItemComponent } from './shop/item/item.component';
import { CategoriaComponent } from './shop/categoria/categoria.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    ShopComponent,
    HomeComponent, 
    FooterComponent,
    NavComponent,
    ItemComponent,
    CategoriaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
