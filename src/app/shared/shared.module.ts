import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { LeaveOrderGuard } from "./../order/leave-order.guard";
import { OrderService } from "./../order/order.service";
import { CartService } from "./../restaurant-detail/cart/cart.service";
import { AuthInterceptor } from "./../security/auth.interceptor";
import { LoggedInGuard } from "./../security/loggedin.guard";
import { LoginService } from "./../security/login/login.service";
import { InputComponent } from "./input/input.component";
import { NotificationService } from "./messages/notification.service";
import { SnackbarComponent } from "./messages/snackbar/snackbar.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";

@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    SnackbarComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SnackbarComponent,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        CartService,
        RestaurantsService,
        OrderService,
        NotificationService,
        LoginService,
        LoggedInGuard,
        LeaveOrderGuard,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      ],
    };
  }
}
