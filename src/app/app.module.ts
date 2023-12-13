import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OfferComponent } from './offer/offer.component';
import { DealsComponent } from './deals/deals.component';
import { CategoryComponent } from './category/category.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { SettingCompComponent } from './setting-comp/setting-comp.component';
import { AccountCompComponent } from './account-comp/account-comp.component';
import { PersonalCompComponent } from './personal-comp/personal-comp.component';
import { ChildCategoryComponent } from './child-category/child-category.component';
import { ChildDealsComponent } from './child-deals/child-deals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestingComponent } from './testing/testing.component';
import { PreferencesService } from './preferences.service';
import { ItemsComponent } from './items/items.component';
import { AddItemComponent } from './add-item/add-item.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AccountSettingComponent,
    NavbarComponent,
    OfferComponent,
    DealsComponent,
    CategoryComponent,
    SecondPageComponent,
    SettingCompComponent,
    AccountCompComponent,
    PersonalCompComponent,
    ChildCategoryComponent,
    ChildDealsComponent,
    TestingComponent,
    ItemsComponent,
    AddItemComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
