import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoencaCardComponent } from './doenca-card.component';

describe('DoencaCardComponent', () => {
  let component: DoencaCardComponent;
  let fixture: ComponentFixture<DoencaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoencaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoencaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
