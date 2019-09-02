import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryAllComponent } from './entry-all.component';

describe('EntryAllComponent', () => {
  let component: EntryAllComponent;
  let fixture: ComponentFixture<EntryAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
