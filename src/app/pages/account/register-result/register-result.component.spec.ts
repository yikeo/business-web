import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRegisterResultComponent } from './register-result.component';

describe('AccountRegisterResultComponent', () => {
  let component: AccountRegisterResultComponent;
  let fixture: ComponentFixture<AccountRegisterResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountRegisterResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRegisterResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
