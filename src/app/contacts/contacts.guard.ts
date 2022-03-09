import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  RouterStateSnapshot,
} from "@angular/router";
import { LoginService } from "./../security/login/login.service";
import { ContactsComponent } from "./contacts.component";

@Injectable()
export class ContactsGuard
  implements CanActivate, CanDeactivate<ContactsComponent>
{
  constructor(private loginService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.loginService.isLoggedIn()) {
      alert("Você não está logado!");
      this.loginService.handleLogin(`${route.routeConfig.path}`);
      return false;
    } else {
      return true;
    }
  }

  canDeactivate(): boolean {
    return window.confirm("Deseja sair da tela de contatos?");
  }
}
