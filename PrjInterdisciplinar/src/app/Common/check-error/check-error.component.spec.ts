import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckErrorComponent } from './check-error.component';

describe('CheckErrorComponent', () => {
  let component: CheckErrorComponent;
  let fixture: ComponentFixture<CheckErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
