import { Component, OnInit } from "@angular/core";
import { SimpleModalService } from "ngx-simple-modal";

import { UserDetailsComponent } from "../users-details/users-details/user-details.component";
import { UserModalModel } from "../users-details/users-details/user-modal.model";
import { User } from "./user-model";
import { UserService } from "./user.service";

@Component({
  selector: "user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {

    users: Array<User>;
    isFavorite: boolean;
    favoriteUsers: Array<string>;
    favoriteUsersKey: string;

    constructor(private userService: UserService,
                private SimpleModalService: SimpleModalService) {
        this.users = new Array<User>();
        this.favoriteUsersKey = "favoriteUsersKey";
        this.favoriteUsers = JSON.parse(localStorage.getItem(this.favoriteUsersKey));
        if (!this.favoriteUsers) {
            this.favoriteUsers = new Array<string>();
        }
    }

    ngOnInit() {
        this.userService.getUsers().subscribe((users) => {
            this.users = users;
            this.users.map( user => {
                user.isFavorite = this.getIndexUsersFavorite(user) != -1;
            })
        });
    }

    details(user: User) {
        let userDetails: UserModalModel = {
            name: user.name,
            phone: user.phone,
            website: user.website,
            companyName: user.company.name,
            latitude: parseFloat(user.address.geo.lat),
            longitude: parseFloat(user.address.geo.lng)
        }

        this.SimpleModalService.addModal(UserDetailsComponent, { userDetails });
    }

    favoriteUser(user) {
        user.isFavorite = !user.isFavorite;

        let hasUser = this.getIndexUsersFavorite(user)
        if (user.isFavorite && hasUser == -1) {
            this.favoriteUsers.push(user.name);
        }

        if(!user.isFavorite && hasUser != -1) {
            this.favoriteUsers.splice(this.getIndexUsersFavorite(user), 1);
        }

        localStorage.setItem(this.favoriteUsersKey, JSON.stringify(this.favoriteUsers));
    }

    getIndexUsersFavorite(user): number {
        return this.favoriteUsers.findIndex(element => element == user.name);
    }

}
