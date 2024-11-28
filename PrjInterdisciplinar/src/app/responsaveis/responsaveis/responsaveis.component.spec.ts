import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsaveisComponent } from './responsaveis.component';

describe('ResponsaveisComponent', () => {
  let component: ResponsaveisComponent;
  let fixture: ComponentFixture<ResponsaveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsaveisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsaveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
