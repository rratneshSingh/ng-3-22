import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private adminServive: AdminService) { }

  ngOnInit(): void {
    this.adminServive.getAllUsers().subscribe( (users) => {
      this.users = users;
    })
  }

}
