import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinEditComponent } from './shopping-edit.component';

describe('ShoppinEditComponent', () => {
  let component: ShoppinEditComponent;
  let fixture: ComponentFixture<ShoppinEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppinEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppinEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
