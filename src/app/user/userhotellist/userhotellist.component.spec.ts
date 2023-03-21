import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhotellistComponent } from './userhotellist.component';

describe('UserhotellistComponent', () => {
  let component: UserhotellistComponent;
  let fixture: ComponentFixture<UserhotellistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserhotellistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserhotellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
