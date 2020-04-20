import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutInitComponent } from './layout-init.component';

describe('LayoutInitComponent', () => {
  let component: LayoutInitComponent;
  let fixture: ComponentFixture<LayoutInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
