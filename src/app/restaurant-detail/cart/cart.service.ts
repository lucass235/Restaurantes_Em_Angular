import { MenuItem } from 'app/restaurant-detail/menu/menu-item/menu-item.model';
import { CartItem } from './cart-item.madel';
export class CartService {
  items: CartItem[] = [];

  clear() {
    this.items = []
  };

  removerItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1)
  };

  addItem(item: MenuItem) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
    } else {
      this.items.push(new CartItem(item))
    }
  };

  total(): number {
    return this.items
    .map(item => item.valor())
    .reduce((prev, value) => prev+value, 0);
  };
}
