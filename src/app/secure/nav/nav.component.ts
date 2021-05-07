import { AuthService } from './../../services/auth.service';
import { User } from './../../interfaces/user';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input('user')
  user:User=null;

  constructor(private authService : AuthService,
    private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout().subscribe(
      res=>{
        this.router.navigate(['/login'])

      }
    )
  }

}
