import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagNoticiaComponent } from './pag-noticia.component';

describe('PagNoticiaComponent', () => {
  let component: PagNoticiaComponent;
  let fixture: ComponentFixture<PagNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagNoticiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
