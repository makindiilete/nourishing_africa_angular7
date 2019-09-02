import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternAllComponent } from './intern-all.component';

describe('InternAllComponent', () => {
  let component: InternAllComponent;
  let fixture: ComponentFixture<InternAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
