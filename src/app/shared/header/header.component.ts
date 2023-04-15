import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  search = '';
  isLoggedIn = false;

  constructor(private ps: ProductService, private authSrv: AuthService) { }

  ngOnInit(): void {
    this.authSrv.isLoggedIn$.subscribe( isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  searchIt() {
    this.ps.updateSearch(this.search);
  }

  logout() {
    this.authSrv.logout();
  }

}
