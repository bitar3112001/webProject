import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { AccountCompComponent } from './account-comp/account-comp.component';
import { ItemsComponent } from './items/items.component';
import { AddItemComponent } from './add-item/add-item.component';
import { CartItemComponent } from './cart-item/cart-item.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path:'login',component:LogInComponent},
  {path:'secondPage/:id',component:SecondPageComponent},
  {path:'SettingPage',component:AccountCompComponent},
  {path:'itemList',component:ItemsComponent},
  {path:'addItem',component:AddItemComponent},
  {path:'cartItem',component:CartItemComponent}
  // { path: '**', component: LogInComponent },
  // {path:'user/signin', component:SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
