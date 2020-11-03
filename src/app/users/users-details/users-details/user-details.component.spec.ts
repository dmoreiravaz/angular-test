import { AgmCoreModule } from "@agm/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserDetailsComponent } from "./user-details.component";

describe("User Details Component", () => {
    let component: UserDetailsComponent;
    let fixture: ComponentFixture<UserDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UserDetailsComponent ],
            imports: [
                AgmCoreModule.forRoot({
                  apiKey: "AIzaSyBytFWnADxv_PtaOLYZILcd8U2PGvwtfUc"
                })
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserDetailsComponent);
        component = fixture.componentInstance;
        component.userDetails = {
            name: "name",
            phone: "phone",
            website: "website",
            companyName: "company",
            latitude: 123456,
            longitude: 987456
        }
        fixture.detectChanges();

    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
