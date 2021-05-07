import { AuthService } from './../services/auth.service';
import { User } from './../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService,
              private router:Router) { }

  ngOnInit() {
    this.authService.user().subscribe(
      (res:any)=>{
        console.log(res);
        this.user=res.data;

      },
      err=>{
        console.log(err);
        this.router.navigate(['/login'])
      }
    )
  }

}
