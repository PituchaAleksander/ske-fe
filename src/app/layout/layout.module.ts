import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LibraryComponent } from './library/library.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { AddEditBookComponent } from './add-edit-book/add-edit-book.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LibraryComponent,
    CartComponent,
    OrdersComponent,
    AddEditBookComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule
  ]
})
export class LayoutModule { }
