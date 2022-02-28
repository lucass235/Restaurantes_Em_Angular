import { LOCALE_ID, NgModule } from "@angular/core";
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PreloadAllModules, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ROUTES } from "./app.routes";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { OrderSumaryComponent } from "./order-sumary/order-sumary.component";
import { CartComponent } from "./restaurant-detail/cart/cart.component";
import { MenuItemComponent } from "./restaurant-detail/menu/menu-item/menu-item.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { ReviewsItemComponent } from "./restaurant-detail/reviews/reviews-item/reviews-item.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";
import { RestaurantComponent } from "./restaurants/restaurant/restaurant.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { SharedModule } from "./shared/shared.module";
import { HashLocationStrategy, Location, LocationStrategy } from "@angular/common";
import { LoginComponent } from './security/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    CartComponent,
    MenuItemComponent,
    ReviewsComponent,
    ReviewsItemComponent,
    OrderSumaryComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
