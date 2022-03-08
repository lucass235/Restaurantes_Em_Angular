import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MEAT_API } from "./../app.api";
import { Contacts } from "./contacts.model";
@Injectable()
export class ContactsService {
  constructor(private http: HttpClient) {}

  sendContact(dados: Contacts): Observable<Contacts> {
    return this.http.post<Contacts>(`${MEAT_API}/contacts`, dados);
  }
}
