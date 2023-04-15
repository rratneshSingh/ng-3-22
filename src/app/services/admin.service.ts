import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    url = `${environment.baseUrl}/user`;

    constructor(private http: HttpClient) {
    }

    addUser(user: User) {
        return this.http.post(this.url, user);
    }

    getAllUsers() {
        return this.http.get<User[]>(this.url);
    }

    getUserById(email: string) {
        return this.http.get<User>(`${this.url}/${email}`);
    }
}