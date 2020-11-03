import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user-model";

@Injectable({
  providedIn: "root"
})
export class UserService {

    usersUrl: string;

    constructor(private http: HttpClient) {
        this.usersUrl = "https://jsonplaceholder.typicode.com/users";
    }

    public getUsers(): Observable<Array<User>> {
        return this.http.get<Array<User>>(this.usersUrl);
    }
}
