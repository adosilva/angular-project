import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LhAngularMasterComponent } from './lh-angular-master.component';

describe('LhAngularMasterComponent', () => {
  let component: LhAngularMasterComponent;
  let fixture: ComponentFixture<LhAngularMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LhAngularMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LhAngularMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
