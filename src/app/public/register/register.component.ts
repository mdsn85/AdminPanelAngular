import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss','./../public.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor( private FormBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.form = this.FormBuilder.group({
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      password_confirm:''
    });
  }

  submit(){
    const data= this.form.getRawValue();
    this.authService.register(data).subscribe(
      res=>{
        console.log(res);
      }
    );
  }

}
