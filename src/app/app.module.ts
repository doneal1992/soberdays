import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SoberClockPage } from '../pages/sober-clock/sober-clock';
import { ContactPage } from '../pages/contact/contact';
import { TwelveStepsPage } from '../pages/twelve-steps/twelve-steps';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { DatePicker } from '@ionic-native/date-picker';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [
    MyApp,
    SoberClockPage,
    ContactPage,
    TwelveStepsPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ServicesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SoberClockPage,
    ContactPage,
    TwelveStepsPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
