import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  constructor(private router: Router) {}

  onRegister() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration Successful');
    this.router.navigate(['/login']);
  }

}
