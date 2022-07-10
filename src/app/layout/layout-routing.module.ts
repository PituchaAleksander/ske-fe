import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditBookComponent } from './add-edit-book/add-edit-book.component';
import { CartComponent } from './cart/cart.component';
import { LayoutComponent } from './layout.component';
import { LibraryComponent } from './library/library.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        {
          path: '',
          redirectTo: 'library',
          pathMatch: 'prefix'
        },
        {
            path: 'library',
            canActivate: [],
            component: LibraryComponent
        },
        {
            path: 'cart',
            canActivate: [],
            component: CartComponent
        },
        {
          path: 'orders',
          canActivate: [],
          component: OrdersComponent
        },
        {
          path: 'book',
          canActivate: [],
          component: AddEditBookComponent
        },
        {
          path: 'book/:id',
          canActivate: [],
          component: AddEditBookComponent
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
