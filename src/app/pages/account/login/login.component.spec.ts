import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLoginComponent } from './login.component';

describe('AccountLoginComponent', () => {
  let component: AccountLoginComponent;
  let fixture: ComponentFixture<AccountLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
