import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { OrderComponent } from "./order.component";

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {
  canDeactivate(
    orderComponent: OrderComponent,
    activatedRoute: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
  ): boolean {
    if (!orderComponent.isOrderCompleted()) {
      return window.confirm('Deseja desitir da compra?')
    } else {
      return true;
    }
  }
}
