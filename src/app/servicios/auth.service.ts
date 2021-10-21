import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated():boolean
  {
    debugger
    const token = localStorage.getItem("token");
    const helper = new JwtHelperService();  
    if(token)
    {
      return !helper.isTokenExpired(token);
    }
    else
    {
      return false;
    }
  }
}
