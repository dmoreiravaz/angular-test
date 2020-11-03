import { Component, OnInit } from "@angular/core";

@Component({
  selector: "favorite-users",
  templateUrl: "./favorite-users.component.html",
  styleUrls: ["./favorite-users.component.css"]
})
export class FavoriteUsersComponent implements OnInit {

    favoriteUsers: Array<string>;
    favoriteUsersKey: string;

    constructor() {
        this.favoriteUsers = new Array<string>();
        this.favoriteUsersKey = "favoriteUsersKey";
    }

    ngOnInit() {
        this.favoriteUsers = JSON.parse(localStorage.getItem(this.favoriteUsersKey));
    }

}
