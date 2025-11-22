import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingDetailsPage } from './painting-details-page';

describe('PaintingDetailsPage', () => {
  let component: PaintingDetailsPage;
  let fixture: ComponentFixture<PaintingDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaintingDetailsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintingDetailsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
