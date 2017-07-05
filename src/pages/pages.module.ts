import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { SoberClockPage } from '../pages/sober-clock/sober-clock';
import { MeditationPage } from '../pages/meditation/meditation';
import { TwelveStepsPage } from '../pages/twelve-steps/twelve-steps';
import { TabsPage } from '../pages/tabs/tabs';
import { JournalPage } from '../pages/journal/journal';
import { JournalEditPage } from '../pages/journal/edit/journal-edit';

import { DatePicker } from '@ionic-native/date-picker';
import { ServicesModule } from '../services/services.module';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@NgModule({
  declarations: [
    SoberClockPage,
    MeditationPage,
    TwelveStepsPage,
    TabsPage,
    JournalPage,
    JournalEditPage
  ],
  imports: [
    IonicModule.forRoot(SoberClockPage),
    IonicModule.forRoot(MeditationPage),
    IonicModule.forRoot(TwelveStepsPage),
    IonicModule.forRoot(TabsPage),
    IonicModule.forRoot(JournalPage),
    IonicModule.forRoot(JournalEditPage),
    ServicesModule
  ],
  bootstrap: [],
  entryComponents: [
    SoberClockPage,
    MeditationPage,
    TwelveStepsPage,
    TabsPage,
    JournalPage,
    JournalEditPage
  ],
  providers: [
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YoutubeVideoPlayer
  ]
})
export class PagesModule {}
