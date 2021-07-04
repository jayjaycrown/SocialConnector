import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  @ViewChild('tabs', { static: false }) tabs: IonTabs;
  selectedTab: string;
  showLabel: boolean;
  constructor() {}

  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
    // console.log(this.selectedTab);
    if (this.selectedTab === 'dashboard') {
      this.showLabel = false;
    }else {this.showLabel = true;}
  }

}
