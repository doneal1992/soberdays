import { Component } from '@angular/core';

import { SoberClockPage } from '../sober-clock/sober-clock';
import { MeditationPage } from '../meditation/meditation';
import { TwelveStepsPage } from '../twelve-steps/twelve-steps';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SoberClockPage;
  tab2Root = TwelveStepsPage;
  tab3Root = MeditationPage;

  constructor() {

  }
}
