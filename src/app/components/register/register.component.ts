import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  email: string;
  password: string;
  passwordConfirm: string;

  constructor(private _login: LoginService) {
    this.email = '';
    this.password = '';
    this.passwordConfirm = '';
  }

  register() {
    console.log(this.email);
    console.log(this.password);
    console.log(this.passwordConfirm);
    if (this.password == this.passwordConfirm) {
      const user = {
        email: this.email,
        password: this.passwordConfirm,
      };
      this._login.registerUser(user).subscribe((data) => {
        console.log(data);
      });
    } else {
      console.warn('La contraseña no coincide');
    }
  }
}
