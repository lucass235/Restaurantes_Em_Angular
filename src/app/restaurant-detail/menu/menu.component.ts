import { Observable } from "rxjs/Observable";
import { MenuItem } from "./menu-item/menu-item.model";
import { ActivatedRoute } from "@angular/router";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "mt-menu",
  templateUrl: "./menu.component.html",
})
export class MenuComponent implements OnInit {
  menu: Observable<MenuItem[]>;

  constructor(
    private restaurantsService: RestaurantsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.menu = this.restaurantsService.menuOfRestaurant(
      this.router.parent.snapshot.params["id"]
    );
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }
}
