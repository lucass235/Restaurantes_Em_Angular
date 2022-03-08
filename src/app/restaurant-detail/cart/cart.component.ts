import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { CartService } from "./cart.service";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from "@angular/animations";

@Component({
  selector: "mt-cart",
  templateUrl: "./cart.component.html",
  preserveWhitespaces: true,
  animations: [
    trigger("row", [
      state("ready", style({ opacity: 1 })),
      transition(
        "void => ready",
        animate(
          "300ms 0s ease-in",
          keyframes([
            style({ opacity: 0, transform: "translateX(-30px)", offset: 0 }),
            style({ opacity: 0.8, transform: "translateX(10px)", offset: 0.8 }),
            style({ opacity: 1, transform: "translateX(0px)", offset: 1 }),
          ])
        )
      ),
      transition(
        "ready => void",
        animate(
          "300ms 0s ease-in",
          keyframes([
            style({ opacity: 1, transform: "translateX(0px)", offset: 0 }),
            style({
              opacity: 0.8,
              transform: "translateX(-10px)",
              offset: 0.2,
            }),
            style({ opacity: 0, transform: "translateX(30px)", offset: 1 }),
          ])
        )
      ),
    ]),
  ],
})
export class CartComponent implements OnInit {
  rowState = "ready";

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

  cartEmpty() {
    this.cartService.cartEmpty();
  }
}
