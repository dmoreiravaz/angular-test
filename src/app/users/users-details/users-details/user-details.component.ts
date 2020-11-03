import { Component } from "@angular/core";
import { SimpleModalComponent } from "ngx-simple-modal";
import { UserDetailsModel, UserModalModel } from "./user-modal.model";

@Component({
  selector: "user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"]
})
export class UserDetailsComponent extends SimpleModalComponent<UserDetailsModel, null>
  implements UserDetailsModel {

    userDetails: UserModalModel;
    title: string;

    name: string;
    phone: string;
    website: string;
    companyName: string;
    latitude: number;
    longitude: number;

    constructor() {
        super();

    }

    ngOnInit() {
        this.title = "User Details";
    }
  }