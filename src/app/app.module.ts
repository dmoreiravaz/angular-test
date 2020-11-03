import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { SimpleModalModule } from "ngx-simple-modal";
import { FaIconComponent, FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

import { AgmCoreModule } from "@agm/core";
import { UserDetailsComponent } from "./users/users-details/users-details/user-details.component";
import { FavoriteUsersComponent } from "./users/favorite-users/favorite-users/favorite-users.component";
import { UserListComponent } from "./users/users-list/user-list.component";

@NgModule({
  declarations: [
      AppComponent,
      UserListComponent,
      UserDetailsComponent,
      FavoriteUsersComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      SimpleModalModule.forRoot({container: "modal-container"}),
      AgmCoreModule.forRoot({
        apiKey: "AIzaSyBytFWnADxv_PtaOLYZILcd8U2PGvwtfUc"
      }),
      FontAwesomeModule
  ],
  entryComponents: [
      FaIconComponent,
      UserDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private library: FaIconLibrary) {
        library.addIcons(faStar, farStar);
    }
}
