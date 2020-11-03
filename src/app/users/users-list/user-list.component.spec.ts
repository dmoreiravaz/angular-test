import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SimpleModalService } from "ngx-simple-modal";
import { of } from "rxjs";
import { UserModalModel } from "../users-details/users-details/user-modal.model";

import { UserListComponent } from "./user-list.component";
import { User } from "./user-model";
import { UserService } from "./user.service";

describe("UsersListComponent", () => {
    let component: UserListComponent;
    let fixture: ComponentFixture<UserListComponent>;
    let service: UserService;
    let simpleModalService: SimpleModalService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UserListComponent ],
            providers: [
                UserService,
                SimpleModalService
            ],
            imports : [
              FontAwesomeModule,
              HttpClientTestingModule
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserListComponent);
        component = fixture.componentInstance;
        simpleModalService = TestBed.get(SimpleModalService);
        service = TestBed.get(UserService);
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should open details modal", () => {
      // given
      let userDetails: UserModalModel = {
        name: "name",
        phone: "phone",
        website: "website",
        companyName: "companyname",
        latitude: parseFloat("123456"),
        longitude: parseFloat("987654")
    }
      let user = {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
              street: "Kulas Light",
              suite: "Apt. 556",
              city: "Gwenborough",
              zipcode: "92998-3874",
              geo: {
                  lat: "-37.3159",
                  lng: "81.1496"
              }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
              name: "Romaguera-Crona",
              catchPhrase: "Multi-layered client-server neural-net",
              bs: "harness real-time e-markets"
            }
        }
        // when
        spyOn(simpleModalService, "addModal");
        component.details(user);

        //then
        expect(simpleModalService.addModal).toHaveBeenCalled();
    });

    it("should add favorite User", () => {
        // given
        component.favoriteUsers = [];
        let user = {
            name: "user",
            isFavorite: false
        }

        // when
        component.favoriteUser(user);

        // then
        expect(component.favoriteUsers.length).toEqual(1);
    });

    it("should remove favorite User", () => {
        // given
        component.favoriteUsers = ["user"];
        let user = {
            name: "user",
            isFavorite: true
        }

        // when
        component.favoriteUser(user);

        // then
        expect(component.favoriteUsers.length).toEqual(0);
    });

    it("should get all users", () => {
        let users: Array<User> = [];
        users = [{
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                    lat: "-37.3159",
                    lng: "81.1496"
                }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
              name: "Romaguera-Crona",
              catchPhrase: "Multi-layered client-server neural-net",
              bs: "harness real-time e-markets"
            },
            isFavorite: true
        }];

        spyOn(service, "getUsers").and.returnValue(of(users));
        component.ngOnInit();

        expect(component.users).toEqual(users);
    })
});
