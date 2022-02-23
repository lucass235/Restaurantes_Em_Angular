import { OrderService } from "./order.service";
import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { RadioOption } from "./../shared/radio/radio-option.model";
import { CartItem } from "app/restaurant-detail/cart/cart-item.madel";
import { Order, OrderItem } from "./order.model";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from "@angular/forms";

@Component({
  selector: "mt-order",
  templateUrl: "./order.component.html",
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;

  emailPath =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  numberPath = /^[0-9]*$/;

  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: "MON" },
    { label: "Cartão de débito", value: "DEB" },
    { label: "cartão refeição", value: "REF" },
  ];

  delivery: number = 8;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.orderForm = this.formBuilder.group(
      {
        name: this.formBuilder.control("", [
          Validators.required,
          Validators.minLength(5),
        ]), // validacao dos campos
        email: this.formBuilder.control("", [
          Validators.required,
          Validators.pattern(this.emailPath),
        ]),
        emailConfirmation: this.formBuilder.control("", [
          Validators.required,
          Validators.pattern(this.emailPath),
        ]),
        address: this.formBuilder.control("", [
          Validators.required,
          Validators.minLength(5),
        ]),
        optionalAddress: this.formBuilder.control(""),
        paymentOption: this.formBuilder.control("", [Validators.required]),
        number: this.formBuilder.control("", [
          Validators.required,
          Validators.pattern(this.numberPath),
        ]),
      },
      { validator: OrderComponent.equalsTo }
    );
  }

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const email = group.get("email");
    const emailConfirmation = group.get("emailConfirmation");
    if (!email || !emailConfirmation) {
      return undefined;
    }

    if (email.value !== emailConfirmation.value) {
      return {emailsNotMatch: true}
    }
    return undefined
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems() {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map(
      (item: CartItem) => new OrderItem(item.quantity, item.menuItem.id)
    );
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      this.router.navigate(["/order-sumary"]);
      console.log(`Compra concluida: ${orderId}`);
      this.orderService.clear();
    });
    console.log(order);
  }
}
