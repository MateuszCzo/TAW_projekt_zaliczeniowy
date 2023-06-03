import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public authService: AuthService, private router: Router) {
  }

  signOut() {
    this.authService.logout()
      .subscribe(result => {
        this.router.navigate(['/']);
        return result;
      });
  }
}