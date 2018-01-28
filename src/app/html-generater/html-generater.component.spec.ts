import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlGeneraterComponent } from './html-generater.component';

describe('HtmlGeneraterComponent', () => {
  let component: HtmlGeneraterComponent;
  let fixture: ComponentFixture<HtmlGeneraterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlGeneraterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlGeneraterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
