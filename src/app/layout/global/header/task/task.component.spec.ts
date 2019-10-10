import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTaskComponent } from './task.component';

describe('HeaderTaskComponent', () => {
  let component: HeaderTaskComponent;
  let fixture: ComponentFixture<HeaderTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
