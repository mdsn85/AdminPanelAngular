import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './../public.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message: string = "";
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  submit() {
    const data = this.form.getRawValue();

    this.authService.login(data).subscribe(
      res => {

        console.log("user:"+res);
        const token = res['token'];
        if (token != null) {

          console.log("token:" + res['token']);
          this.message = "Login Successfully";
          localStorage.setItem('access_token', res['token'])
          this.router.navigate(['/dashboard'])
        } else {
          console.log("message:" + res['message']);
          this.message = res['message'];
        }

      }
    )
  }

}


