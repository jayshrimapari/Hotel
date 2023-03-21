import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfaillComponent } from './userfaill.component';

describe('UserfaillComponent', () => {
  let component: UserfaillComponent;
  let fixture: ComponentFixture<UserfaillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserfaillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserfaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
