import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { SoberClockPage } from '../pages/sober-clock/sober-clock';
import { MeditationPage } from '../pages/meditation/meditation';
import { TwelveStepsPage } from '../pages/twelve-steps/twelve-steps';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatePicker } from '@ionic-native/date-picker';
import { ServicesModule } from '../services/services.module';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@NgModule({
  declarations: [
    SoberClockPage,
    MeditationPage,
    TwelveStepsPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(SoberClockPage),
    IonicModule.forRoot(MeditationPage),
    IonicModule.forRoot(TwelveStepsPage),
    IonicModule.forRoot(TabsPage),
    ServicesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SoberClockPage,
    MeditationPage,
    TwelveStepsPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YoutubeVideoPlayer
  ]
})
export class PagesModule {}
