import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternNigeriaComponent } from './intern-nigeria.component';

describe('InternNigeriaComponent', () => {
  let component: InternNigeriaComponent;
  let fixture: ComponentFixture<InternNigeriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternNigeriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternNigeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
