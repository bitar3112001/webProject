import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCompComponent } from './personal-comp.component';

describe('PersonalCompComponent', () => {
  let component: PersonalCompComponent;
  let fixture: ComponentFixture<PersonalCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
