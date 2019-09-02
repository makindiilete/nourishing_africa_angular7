import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTimeTunisiaComponent } from './part-time-tunisia.component';

describe('PartTimeTunisiaComponent', () => {
  let component: PartTimeTunisiaComponent;
  let fixture: ComponentFixture<PartTimeTunisiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartTimeTunisiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartTimeTunisiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
