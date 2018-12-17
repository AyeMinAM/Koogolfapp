import { Component } from '@angular/core';

import { MePage } from '../me/me';
import { PrebookteePage } from '../prebooktee/prebooktee';
import {HomePage} from "../home/home";
import {CalenderPage} from "../calender/calender";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  HomeRoot = HomePage;
  PrebookteeRoot = PrebookteePage;
  CalenderRoot = CalenderPage;
  MeRoot = MePage;

  constructor() {

  }
}
