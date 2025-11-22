import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Painting } from './painting';

describe('Painting', () => {
  let component: Painting;
  let fixture: ComponentFixture<Painting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Painting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Painting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
