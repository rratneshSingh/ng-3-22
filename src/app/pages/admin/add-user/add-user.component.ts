import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  form = new FormGroup({
    // email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    email: new FormControl('', [Validators.required, this.emailValidation]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormGroup({
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required)
    })
  });

  emailValidation(control: AbstractControl) {
    const res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value)
    return res ? null : {
      customEmail: !res
    };
  }

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.adminService.addUser({ ...this.form.value, id: this.form.value.email }).subscribe( () => {
      this.router.navigateByUrl('/admin/users');
    })
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }
  
  get email() {
    return this.form.get('email');
  }

  get city() {
    return this.form.get('address')?.get('city');
  }

  get state() {
    return this.form.get('address')?.get('state');
  }

  get password() {
    return this.form.get('password');
  }
}
