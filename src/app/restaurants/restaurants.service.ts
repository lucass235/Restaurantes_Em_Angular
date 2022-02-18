import { ErrorHandler } from './../app.error-handler';
import { Http } from "@angular/http";
import { MEAT_API } from "app/app.api";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/catch"

@Injectable()
export class RestaurantsService {
  private http: Http
  constructor( http: Http) {
    this.http = http;
  }

  restaurants(): Observable<Restaurant[]> {
    return this.http
      .get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError);
  }
}
