import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagDoecaComponent } from './pag-doeca.component';

describe('PagDoecaComponent', () => {
  let component: PagDoecaComponent;
  let fixture: ComponentFixture<PagDoecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagDoecaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagDoecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
