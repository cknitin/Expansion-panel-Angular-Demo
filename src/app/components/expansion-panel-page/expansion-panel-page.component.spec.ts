import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelPageComponent } from './expansion-panel-page.component';

describe('ExpansionPanelPageComponent', () => {
  let component: ExpansionPanelPageComponent;
  let fixture: ComponentFixture<ExpansionPanelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionPanelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionPanelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
