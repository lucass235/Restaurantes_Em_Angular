// import { ContactsService } from "./contacts.service";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ContactsService } from "app/contacts/contacts.service";
import { NotificationService } from "app/shared/messages/notification.service";
import { tap } from "rxjs/operators";

@Component({
  selector: "mt-contacts",
  templateUrl: "./contacts.component.html",
})
export class ContactsComponent implements OnInit {
  contactForm: FormGroup;

  numberPath = /^[0-9]*$/;

  constructor(
    private formBuilder: FormBuilder,
    private contactsService: ContactsService,
    private ns: NotificationService
  ) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl("", {
        validators: [Validators.required, Validators.minLength(5)],
      }),
      email: new FormControl("", {
        validators: [Validators.required, Validators.email],
      }),
      phone: new FormControl("", {
        validators: [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(11),
          Validators.pattern(this.numberPath),
        ],
      }),
      titleMessage: new FormControl("", {
        validators: [Validators.required, Validators.minLength(5)],
      }),
      message: new FormControl("", {
        validators: [Validators.required, Validators.minLength(10)],
      }),
    });
  }

  sendContact() {
    const values: any = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      titleMessage: this.contactForm.value.titleMessage,
      message: this.contactForm.value.message,
    };
    this.contactsService
      .sendContact(values)
      .pipe(tap(() => this.ns.notify(`Sucesso, dados enviados`)))
      .subscribe();
  }
}
