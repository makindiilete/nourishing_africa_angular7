import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryTunisiaComponent } from './entry-tunisia.component';

describe('EntryTunisiaComponent', () => {
  let component: EntryTunisiaComponent;
  let fixture: ComponentFixture<EntryTunisiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryTunisiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryTunisiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
