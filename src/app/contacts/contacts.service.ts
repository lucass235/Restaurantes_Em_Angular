import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MEAT_API } from "./../app.api";
import { Contact } from "./contact.model";
@Injectable()
export class ContactsService {
  constructor(private http: HttpClient) {}

  sendContact(dates: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${MEAT_API}/contacts`, dates);
  }
}
