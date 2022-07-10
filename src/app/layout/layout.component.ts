import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/service/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  public click(url: string){
    this.router.navigate([url]);
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    this.router.navigate(['/auth/login']);
  }
}
