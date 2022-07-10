import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { catchError, firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: string | undefined;
  public password: string | undefined;

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  public async apply(){
    this.authService.login({username: this.login, password: this.password})
    .pipe(
      catchError((error) => {
        return error;
      })
    )
    .subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.authService.setRoles(response.roles);
        this.router.navigate(["/layout/library"]);
      }
    });
  }

  public toRegister(){
    this.router.navigate(["/auth/register"]);
  }
}