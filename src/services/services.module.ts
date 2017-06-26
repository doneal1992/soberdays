import { NgModule } from '@angular/core';
import { SoberClockService } from './sober-clock.srvc';
import { IonicStorageModule } from '@ionic/storage';
import { YoutubeService} from './youtube.srvc';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from './auth.srvc';
import { AngularFireDatabase } from 'angularfire2/database';
 
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
    SoberClockService,
    YoutubeService,
    AuthService,
    AngularFireDatabase
  ]
})
export class ServicesModule {}
