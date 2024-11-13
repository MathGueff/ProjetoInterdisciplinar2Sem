import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLinkComponent } from './login-link.component';

describe('LoginLinkComponent', () => {
  let component: LoginLinkComponent;
  let fixture: ComponentFixture<LoginLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
