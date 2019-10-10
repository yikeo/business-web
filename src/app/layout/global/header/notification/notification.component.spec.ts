import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNotificationComponent } from './notification.component';

describe('NotificationComponent', () => {
  let component: HeaderNotificationComponent;
  let fixture: ComponentFixture<HeaderNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
