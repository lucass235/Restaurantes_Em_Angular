import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'app/shared/messages/notification.service';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  navigateTo: string

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private activateRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })

    this.navigateTo = this.activateRouter.snapshot.params['to'] || btoa('/')
  }

  login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
    .subscribe(user => this.notificationService.notify(`Bem vindo, ${user.name}`),
              response => this.notificationService.notify(response.error.message),
               () => {this.router.navigate([atob(this.navigateTo)])}

    );
  }

}
