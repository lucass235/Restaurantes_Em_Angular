import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { from } from "rxjs";
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from "rxjs/operators";
import { LoginService } from "./../security/login/login.service";
import { Restaurant } from "./restaurant/restaurant.model";
import { RestaurantsService } from "./restaurants.service";

@Component({
  selector: "mt-restaurants",
  templateUrl: "./restaurants.component.html",
  animations: [
    trigger("toggleSearch", [
      state(
        "hidden",
        style({
          opacity: 0,
          "max-height": "0px",
        })
      ),
      state(
        "visible",
        style({
          opacity: 1,
          "max-height": "70px",
          "margin-top": "20px",
        })
      ),
      transition("*=>*", animate("250ms 0s ease-in-out")),
    ]),
  ],
})
export class RestaurantsComponent implements OnInit {
  searchBarState = "hidden";
  restaurants: Restaurant[] = [];

  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(
    private restaurantsService: RestaurantsService,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.searchControl = this.fb.control("");
    this.searchForm = this.fb.group({
      searchControl: this.searchControl,
    });

    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((searchTerm) =>
          this.restaurantsService
            .restaurants(searchTerm)
            .pipe(catchError((error) => from([])))
        )
      )
      .subscribe((restaurants) => (this.restaurants = restaurants));

    this.restaurantsService
      .restaurants()
      .subscribe((restaurants) => (this.restaurants = restaurants));
  }

  toggleSearch() {
    this.searchBarState =
      this.searchBarState === "hidden" ? "visible" : "hidden";
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }
}
