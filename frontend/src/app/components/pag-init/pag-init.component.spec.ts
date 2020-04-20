import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagInitComponent } from './pag-init.component';

describe('PagInitComponent', () => {
  let component: PagInitComponent;
  let fixture: ComponentFixture<PagInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
