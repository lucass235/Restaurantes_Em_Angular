import { MenuItem } from 'app/restaurant-detail/menu/menu-item/menu-item.model';
export class CartItem {
  constructor(public menuItem: MenuItem,
    public quantity: number=1) {

  }

  valor(): number {
    return this.menuItem.price * this.quantity;
  }
}
