import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
 import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';

describe('AuthService', () => {
  let authSerivce : AuthService,
      httpTestingController:HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[
        AuthService
      ]
    });
    authSerivce = TestBed.get(AuthService);
    httpTestingController =TestBed.get(HttpClientTestingModule);
  });



  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should login',()=>{

  })
});
