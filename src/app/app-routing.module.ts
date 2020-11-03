import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FavoriteUsersComponent } from "./users/favorite-users/favorite-users/favorite-users.component";
import { UserListComponent } from "./users/users-list/user-list.component";


const routes: Routes = [
	{ path: "users", component: UserListComponent },
	{ path: "favorite", component: FavoriteUsersComponent },
  ];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
