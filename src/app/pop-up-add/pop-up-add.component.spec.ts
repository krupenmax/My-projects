import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAddComponent } from './pop-up-add.component';

describe('PopUpAddComponent', () => {
  let component: PopUpAddComponent;
  let fixture: ComponentFixture<PopUpAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
