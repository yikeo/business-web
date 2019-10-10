import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFullScreenComponent } from './fullscreen.component';

describe('LayoutFullScreenComponent', () => {
  let component: LayoutFullScreenComponent;
  let fixture: ComponentFixture<LayoutFullScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutFullScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutFullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
