import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryNigeriaComponent } from './entry-nigeria.component';

describe('EntryNigeriaComponent', () => {
  let component: EntryNigeriaComponent;
  let fixture: ComponentFixture<EntryNigeriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryNigeriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryNigeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
