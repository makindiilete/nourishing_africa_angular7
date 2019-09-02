import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternTunisiaComponent } from './intern-tunisia.component';

describe('InternTunisiaComponent', () => {
  let component: InternTunisiaComponent;
  let fixture: ComponentFixture<InternTunisiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternTunisiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternTunisiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
