import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTimeAllComponent } from './part-time-all.component';

describe('PartTimeAllComponent', () => {
  let component: PartTimeAllComponent;
  let fixture: ComponentFixture<PartTimeAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartTimeAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartTimeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
