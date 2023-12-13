import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingCompComponent } from './setting-comp.component';

describe('SettingCompComponent', () => {
  let component: SettingCompComponent;
  let fixture: ComponentFixture<SettingCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
