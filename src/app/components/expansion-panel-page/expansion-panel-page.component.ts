import { Component, ViewChild } from '@angular/core';
import { IgxExpansionPanelComponent } from 'igniteui-angular';
@Component({
  selector: 'app-expansion-panel-page',
  templateUrl: './expansion-panel-page.component.html',
  styleUrls: ['./expansion-panel-page.component.css']
})
export class ExpansionPanelPageComponent {
  @ViewChild(IgxExpansionPanelComponent, { read: IgxExpansionPanelComponent })
  public panel: IgxExpansionPanelComponent;
  public readMore: string;
  constructor() {
    this.readMore = 'https://en.wikipedia.org/wiki/Avengers:_Endgame';
  }
  public handleExpansion(evt?: { event: Event }) {
    alert('Expanded Event Fired!');
  }

  public handleCollapse(evt?: { event: Event }) {
    alert('Collapsed Event Fired!');
  }
}

