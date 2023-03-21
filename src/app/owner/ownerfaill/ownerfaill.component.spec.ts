import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerfaillComponent } from './ownerfaill.component';

describe('OwnerfaillComponent', () => {
  let component: OwnerfaillComponent;
  let fixture: ComponentFixture<OwnerfaillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerfaillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerfaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
