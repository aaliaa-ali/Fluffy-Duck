import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCategoriesComponent } from './first-categories.component';

describe('FirstCategoriesComponent', () => {
  let component: FirstCategoriesComponent;
  let fixture: ComponentFixture<FirstCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
