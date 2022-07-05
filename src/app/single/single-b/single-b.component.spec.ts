import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBComponent } from './single-b.component';

describe('SingleBComponent', () => {
  let component: SingleBComponent;
  let fixture: ComponentFixture<SingleBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
