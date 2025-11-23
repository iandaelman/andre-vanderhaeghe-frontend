import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingDetails } from './painting-details';

describe('PaintingDetails', () => {
  let component: PaintingDetails;
  let fixture: ComponentFixture<PaintingDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaintingDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintingDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
