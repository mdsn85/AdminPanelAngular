import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', './../public.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  message: string;
  constructor(private FormBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.form = this.FormBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      UserName: '',
      password: '',
      password_confirm: ''
    });


  }

  submit() {

    const data = this.form.getRawValue();
    console.log("data register:" + JSON.stringify(data));
    this.authService.register(data).subscribe(
      res => {
        alert(res['message']);
        console.log(res);
      },
      (Error) => {
        console.log('Please check your internet connection.Error:' + JSON.stringify(Error));
        alert("Error while saveing changes, please try again or contact IT");
      });

  }

}
