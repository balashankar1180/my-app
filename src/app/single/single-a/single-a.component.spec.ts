import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAComponent } from './single-a.component';

describe('SingleAComponent', () => {
  let component: SingleAComponent;
  let fixture: ComponentFixture<SingleAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
