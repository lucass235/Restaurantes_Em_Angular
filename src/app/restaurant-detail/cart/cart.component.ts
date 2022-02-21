import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { CartService } from "./cart.service";
@Component({
  selector: "mt-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit() {}

  items(): any[] {
    return this.cartService.items;
  }

  total(): number {
    return this.cartService.total();
  }

  clear() {
    this.cartService.clear();
  }

  removeItem(item: any) {
    this.cartService.removerItem(item);
  }

  addItem(item: any) {
    this.cartService.addItem(item);
  }
}
