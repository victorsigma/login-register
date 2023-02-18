import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private _login: LoginService, private toastr: ToastrService) {
    this.email = '';
    this.password = '';
  }

  login() {
    console.log(this.email);
    console.log(this.password);
    const user = {
      email: this.email,
      password: this.password,
    };
    this._login.loginUser(user).subscribe((data: any) => {
      this.toastr.info('Token: ' + data.token);
    });
  }
}
