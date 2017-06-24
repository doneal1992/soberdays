import { NgModule, ErrorHandler } from '@angular/core';
import { SoberClockService } from './sober-clock.srvc';
import { IonicStorageModule, Storage } from '@ionic/storage';

@NgModule({
  declarations: [
  ],
  imports: [
    IonicStorageModule
  ],
  bootstrap: [],
  entryComponents: [
  ],
  providers: [
    SoberClockService
  ]
})
export class ServicesModule {}
