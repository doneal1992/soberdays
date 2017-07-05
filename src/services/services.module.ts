import { NgModule } from '@angular/core';
import { SoberDayService } from './sober-day.service';
import { IonicStorageModule } from '@ionic/storage';
import { YoutubeService} from './youtube.service';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from './auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { ObservableDataService } from './observable-data.service';
import { JournalService } from './journal.service';
import { StepsService } from './steps.service';
 
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyDgeRMN9xD62Sg3sdS21Pu3srJfb3BUF2A",
    authDomain: "soberdays-a62fa.firebaseapp.com",
    databaseURL: "https://soberdays-a62fa.firebaseio.com",
    projectId: "soberdays-a62fa",
    storageBucket: "",
    messagingSenderId: "102006887650"
};

@NgModule({
  declarations: [
  ],
  imports: [
    IonicStorageModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [],
  entryComponents: [
  ],
  providers: [
    SoberDayService,
    YoutubeService,
    AuthService,
    AngularFireDatabase,
    ObservableDataService,
    JournalService,
    StepsService
  ]
})
export class ServicesModule {}
