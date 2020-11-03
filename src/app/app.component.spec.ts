import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";

class RouterMock {
    navigateByUrl(url: string) {
      return url;
    }
  }

describe("App Component", () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

     beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
            ],
            declarations: [
                AppComponent
            ],
            providers: [
                { provide: Router, useClass: RouterMock }
            ],
        }).compileComponents();
      }));
      beforeEach(() => {
          fixture = TestBed.createComponent(AppComponent);
          component = fixture.componentInstance;
      });

      it("should create component", () => {
          expect(component).toBeTruthy();
      });
  });
