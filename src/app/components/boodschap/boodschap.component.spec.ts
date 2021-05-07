import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoodschapComponent } from './boodschap.component';

describe('BoodschapComponent', () => {
  let component: BoodschapComponent;
  let fixture: ComponentFixture<BoodschapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoodschapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoodschapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
