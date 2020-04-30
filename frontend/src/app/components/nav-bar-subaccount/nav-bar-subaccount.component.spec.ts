import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSubaccountComponent } from './nav-bar-subaccount.component';

describe('NavBarSubaccountComponent', () => {
  let component: NavBarSubaccountComponent;
  let fixture: ComponentFixture<NavBarSubaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarSubaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarSubaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
