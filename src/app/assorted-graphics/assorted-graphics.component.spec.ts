import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssortedGraphicsComponent } from './assorted-graphics.component';

describe('AssortedGraphicsComponent', () => {
  let component: AssortedGraphicsComponent;
  let fixture: ComponentFixture<AssortedGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssortedGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssortedGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
