import { NgModule } from '@angular/core';
import { SoberClockService } from './sober-clock.srvc';
import { IonicStorageModule } from '@ionic/storage';
import { YoutubeService} from './youtube.srvc';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
  ],
  imports: [
    IonicStorageModule,
    HttpModule
  ],
  bootstrap: [],
  entryComponents: [
  ],
  providers: [
    SoberClockService,
    YoutubeService,
  ]
})
export class ServicesModule {}
