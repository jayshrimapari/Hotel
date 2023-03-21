import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerhotellistComponent } from './ownerhotellist.component';

describe('OwnerhotellistComponent', () => {
  let component: OwnerhotellistComponent;
  let fixture: ComponentFixture<OwnerhotellistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerhotellistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerhotellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
