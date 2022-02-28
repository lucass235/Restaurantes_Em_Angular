import { ErrorHandler } from './../app.error-handler';
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http'
import { MEAT_API } from "app/app.api";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/catch"
import { MenuItem } from 'app/restaurant-detail/menu/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService {
  private http: HttpClient
  constructor( http: HttpClient) {
    this.http = http;
  }

  restaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams = undefined;
    if (search) {
      params = new HttpParams()
      .append('q', search)
    }
    return this.http
      .get<Restaurant[]>(`${MEAT_API}/restaurants`, {params:  params})

  }

  restaurantById(id: string): Observable <Restaurant> {
    return this.http
    .get<Restaurant>(`${MEAT_API}/restaurants/${id}`)


  }

  reviwesOfRestaurant(id: string): Observable <any> {
    return this.http
    .get(`${MEAT_API}/restaurants/${id}/reviews`)

  }

  menuOfRestaurant(id: string): Observable <MenuItem[]> {
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)

  }
}
