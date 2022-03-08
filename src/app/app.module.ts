import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import locatePt from "@angular/common/locales/pt";
import { ErrorHandler, LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PreloadAllModules, RouterModule } from "@angular/router";
import { ContactsService } from "app/contacts/contacts.service";
import { AppComponent } from "./app.component";
import { ApplicationErrorHandler } from "./app.error-handler";
import { ROUTES } from "./app.routes";
import { ContactsComponent } from "./contacts/contacts.component";
import { HeaderComponent } from "./header/header.component";
import { UserDetailComponent } from "./header/user-detail/user-detail.component";
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
import { LoginComponent } from "./security/login/login.component";
import { SharedModule } from "./shared/shared.module";

registerLocaleData(locatePt, "pt");

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
    UserDetailComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt" },
    { provide: ErrorHandler, useClass: ApplicationErrorHandler },
    ContactsService,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
