import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclacacaoPainelComponent } from './reclacacao-painel.component';

describe('ReclacacaoPainelComponent', () => {
  let component: ReclacacaoPainelComponent;
  let fixture: ComponentFixture<ReclacacaoPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReclacacaoPainelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclacacaoPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
