import { Component, ViewChildren, QueryList } from '@angular/core';
import {
  IgxExpansionPanelComponent,
  IExpansionPanelEventArgs,
} from 'igniteui-angular';
import { useAnimation } from '@angular/animations';

@Component({
  selector: 'app-expansion-panel-registration',
  templateUrl: './expansion-panel-registration.component.html',
  styleUrls: ['./expansion-panel-registration.component.css']
})
export class ExpansionPanelRegistrationComponent {

  @ViewChildren(IgxExpansionPanelComponent)
  public accordion: QueryList<IgxExpansionPanelComponent>;

    public agent = {
      email: '',
      fullName: '',
      phone: ''
    };
    public officeAddress = {
      address: '',
      city: '',
      state: '',
      zipCode: ''
    };

    public homeAddress = {
      address: '',
      city: '',
      state: '',
      zipCode: ''
    };

    public collapsed(index: number) {
      if (!this.accordion) {
        return true;
      }
      return this.accordion.toArray()[index] && this.accordion.toArray()[index].collapsed;
    }

public onInteraction(event: IExpansionPanelEventArgs) {
      const expandedPanels = this.accordion.filter((panel) => !panel.collapsed);
      expandedPanels.forEach((expandedPanel) => {
        if (expandedPanel.id !== event.panel.id) {
          expandedPanel.collapse();
        }
      });
    }
  }
