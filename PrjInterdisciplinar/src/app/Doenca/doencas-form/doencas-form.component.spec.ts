import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoencasFormComponent } from './doencas-form.component';

describe('DoencasFormComponent', () => {
  let component: DoencasFormComponent;
  let fixture: ComponentFixture<DoencasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoencasFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoencasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
