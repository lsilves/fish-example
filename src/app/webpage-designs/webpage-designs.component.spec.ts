import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpageDesignsComponent } from './webpage-designs.component';

describe('WebpageDesignsComponent', () => {
  let component: WebpageDesignsComponent;
  let fixture: ComponentFixture<WebpageDesignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebpageDesignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebpageDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
