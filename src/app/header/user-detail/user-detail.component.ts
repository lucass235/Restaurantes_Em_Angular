import { Component, OnInit } from "@angular/core";
import { LoginService } from "./../../security/login/login.service";
import { User } from "./../../security/login/user.model";

@Component({
  selector: "mt-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"],
})
export class UserDetailComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  user(): User {
    return this.loginService.user;
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  login() {
    this.loginService.handleLogin();
  }

  logout() {
    this.loginService.logout();
  }

  renderImg(name: string): string {
    const imgLucas = "/assets/img/users/lucas.jpg";
    const imgRhay = "/assets/img/users/rhay.jpg";
    if (name === "Lucas dos Santos") {
      return imgLucas;
    } else {
      return imgRhay;
    }
  }
}
