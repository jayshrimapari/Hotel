import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerlandingComponent } from './ownerlanding.component';

describe('OwnerlandingComponent', () => {
  let component: OwnerlandingComponent;
  let fixture: ComponentFixture<OwnerlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerlandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
