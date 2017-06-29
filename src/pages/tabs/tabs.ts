import { Component } from '@angular/core';

import { SoberClockPage } from '../sober-clock/sober-clock';
import { MeditationPage } from '../meditation/meditation';
import { TwelveStepsPage } from '../twelve-steps/twelve-steps';
import { JournalPage } from '../journal/journal';
import { AuthService}  from '../../services/auth.service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = SoberClockPage;
  tab2Root = TwelveStepsPage;
  tab3Root = JournalPage;
  tab4Root = MeditationPage;

  constructor(private auth: AuthService) { 
    if(!this.auth.isAuthenticated()) {
      this.auth.login();
    }
  }


}
