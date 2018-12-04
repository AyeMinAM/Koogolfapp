import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { MePage } from '../me/me';
import { PrebookteePage } from '../prebooktee/prebooktee';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  PrebookteeRoot = PrebookteePage;
  tab2Root = AboutPage;
  MeRoot = MePage;

  constructor() {

  }
}
