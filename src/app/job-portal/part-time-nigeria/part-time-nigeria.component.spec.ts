import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTimeNigeriaComponent } from './part-time-nigeria.component';

describe('PartTimeNigeriaComponent', () => {
  let component: PartTimeNigeriaComponent;
  let fixture: ComponentFixture<PartTimeNigeriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartTimeNigeriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartTimeNigeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
