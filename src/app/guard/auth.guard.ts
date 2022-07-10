import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from "rxjs";
import { AuthService } from '../auth/service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _router: Router, private _authService: AuthService) {

    }

    canActivate(): boolean{
        if(this._authService.loggedIn()){
            return true;
        }else{
            this._router.navigate(['auth/login']);
            return false;
        }
    }
}