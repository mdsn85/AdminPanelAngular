import { User } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList: User[];
  message:string;
  headers = ["id", "firstName", "lastName", "email", "userName","userStatus","role"];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.authService.usersList().subscribe((data: any) => {
      if (data!=null) {
        this.usersList = data as Array<User>;
      }
    }, (Error) => {
      if(Error.status == 403){
        alert('Sorry, you are not authorized ');
      }
      console.log('Please check your internet connection.Error:'+JSON.stringify( Error));
    });

  }

  accept(e){


    const id = e.target.value;
    console.log('accept:'+id);
    this.authService.AcceptUser(id).subscribe(()=>{
      this.getUser();
      alert("user accepted");
    }, (Error) => {

      console.log('Please check your internet connection.Error:'+JSON.stringify( Error));
      alert("Error while saveing changes, please try again or contact IT");
    });

  }
  reject(e){
    console.log('reject');
    const id = e.target.value;
    this.authService.RejectUser(id);
  }
}
