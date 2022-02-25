import { NotificationService } from './../../shared/messages/notification.service';
import { Injectable } from '@angular/core';
import { MenuItem } from 'app/restaurant-detail/menu/menu-item/menu-item.model';
import { CartItem } from './cart-item.madel';

@Injectable()
export class CartService {

constructor(private notificationService: NotificationService){}

  items: CartItem[] = [];

  clear() {
    this.items = []
  };

  removerItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1)
    this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)

  };

  addItem(item: MenuItem) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
    if (foundItem) {
      this.increaseQty(foundItem)
    } else {
      this.items.push(new CartItem(item))
    }
    this.notificationService.notify(`Você adicionou o item ${item.name}`)
  };

  increaseQty(item: CartItem) {
    item.quantity = item.quantity + 1;
  }

  decreaseQty(item: CartItem) {
    item.quantity = item.quantity - 1;
    if (item.quantity === 0) {
      this.removerItem(item)
    }
  }

  total(): number {
    return this.items
    .map(item => item.valor())
    .reduce((prev, value) => prev+value, 0);
  };
}
