import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelRegistrationComponent } from './expansion-panel-registration.component';

describe('ExpansionPanelRegistrationComponent', () => {
  let component: ExpansionPanelRegistrationComponent;
  let fixture: ComponentFixture<ExpansionPanelRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionPanelRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionPanelRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
