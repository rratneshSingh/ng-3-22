import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    isLoggedIn$ = new BehaviorSubject<boolean>(false);

    constructor(private router: Router){
        const user = localStorage.getItem('user');
        if (user) {
            this.isLoggedIn$.next(true);
        } else {
            this.isLoggedIn$.next(false);
        }
    }

    isLoggedIn() {
        return this.isLoggedIn$.getValue();
    }

    setLoggedInState(isLoggedIn: boolean) {
        this.isLoggedIn$.next(isLoggedIn)
    }

    logout() {
        localStorage.removeItem('user');
        this.router.navigateByUrl('/auth/login');
        this.setLoggedInState(false);
    }
}