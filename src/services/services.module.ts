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
import { firebaseConfig } from '../common/constants/firebase.config.cnst';


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
