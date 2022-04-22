import { Routes } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { OrderSumaryComponent } from "./order-sumary/order-sumary.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { LoggedInGuard } from "./security/loggedin.guard";
import { LoginComponent } from "./security/login/login.component";

export const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", loadChildren: "./about/about.module#AboutModule" },
  {
    path: "restaurants",
    component: RestaurantsComponent,
  },
  {
    path: "contacts",
    component: ContactsComponent,
    // canActivate: [ContactsGuard],
    // canDeactivate: [ContactsGuard],
  },
  {
    path: "restaurants/:id",
    component: RestaurantDetailComponent,
    children: [
      { path: "", redirectTo: "menu", pathMatch: "full" },
      { path: "menu", component: MenuComponent },
      { path: "reviews", component: ReviewsComponent },
    ],
  },
  {
    path: "order",
    loadChildren: "./order/order.module#OrderModule",
    canLoad: [LoggedInGuard],
    canActivate: [LoggedInGuard],
  },
  { path: "order-sumary", component: OrderSumaryComponent },
  { path: "login/:to", component: LoginComponent },
  { path: "**", component: NotFoundComponent },
];
