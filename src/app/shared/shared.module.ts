import { LoginService } from './../security/login/login.service';
import { NotificationService } from './messages/notification.service';
import { ModuleWithProviders, NgModule } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RatingComponent } from "./rating/rating.component";
import { RadioComponent } from "./radio/radio.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { OrderService } from './../order/order.service';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { CartService } from './../restaurant-detail/cart/cart.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

@NgModule({
declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
imports: [CommonModule, FormsModule, ReactiveFormsModule],
exports: [InputComponent, RadioComponent, RatingComponent,
          CommonModule, FormsModule, ReactiveFormsModule, SnackbarComponent]
})

export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers:[CartService, RestaurantsService, OrderService, NotificationService, LoginService]
    }
  }
}
