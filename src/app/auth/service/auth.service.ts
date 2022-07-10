import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/service/base.service';

export enum Role{
  ADMIN,
  USER
}

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService{

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  public login(request: any): Observable<any> {
    return this.post("/auth/login", request);
  }

  public register(request: any): Observable<any> {
    return this.post("/auth/register", request);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  public getRole(): Role{
    let roles = localStorage.getItem('roles')?.split(",");
    if(roles?.indexOf("ROLE_ADMIN")!=-1){
      return Role.ADMIN;
    }else{
      return Role.USER;
    }
  }

  public setRoles(roles: any){
    localStorage.setItem('roles', roles);
  }
}
