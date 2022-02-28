import { Observable } from 'rxjs/Observable';
import { CartService } from "./../restaurant-detail/cart/cart.service";
import { Injectable } from "@angular/core";
import { CartItem } from "app/restaurant-detail/cart/cart-item.madel";
import { Order } from "./order.model";
import { HttpClient} from '@angular/common/http';
import { MEAT_API } from 'app/app.api';
import 'rxjs/add/operator/map'

@Injectable()
export class OrderService {
  constructor(private cartService: CartService, private http: HttpClient) {}

  cartItems(): CartItem[] {
    return this.cartService.items
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem) {
    this.cartService.removerItem(item)
  }

  itemsValue(): number {
    return this.cartService.total();
  }

  checkOrder (order: Order): Observable<string> {

    return this.http
    .post<Order>(`${MEAT_API}/orders`, order)
    .map(order => order.id)
  }

  clear() {
    this.cartService.clear()
  }
}
