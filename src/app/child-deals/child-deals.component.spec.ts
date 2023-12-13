import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDealsComponent } from './child-deals.component';

describe('ChildDealsComponent', () => {
  let component: ChildDealsComponent;
  let fixture: ComponentFixture<ChildDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildDealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
