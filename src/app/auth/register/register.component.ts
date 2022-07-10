import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public login: string | undefined;
  public email: string | undefined;
  public password: string | undefined;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  public async apply(){
    this.authService.register({username: this.login, password: this.password, email: this.email})
    .pipe(
      catchError((error) => {
        return error;
      })
    )
    .subscribe({
      next: () => {
        this.router.navigate(["/auth/login"]);
      }
    });
  }

  public toLogin(){
    this.router.navigate(["/auth/login"]);
  }
}
