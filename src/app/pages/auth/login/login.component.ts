import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private adminservice: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(formValue: any) {
    this.adminservice.getUserById(formValue.email).subscribe((user) => {
      if (user.password === formValue.password) {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl('');
      }
    }, error => {
      alert('Wrong Email Or Password');
    })
  }
}
