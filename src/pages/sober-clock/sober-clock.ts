import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SoberClockService } from '../../services/sober-clock.srvc';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'sober-clock',
  templateUrl: 'sober-clock.html'
})
export class SoberClockPage {
  private dateSober: any;
  private hasSoberDate: boolean = false;
  private daysSober: number = 0;
  private hoursSober: number = 0;
  private minutesSober: number = 0;
  private secondsSober: number = 0;

  constructor(private storage: Storage, private soberClockService: SoberClockService) {
    let timer = Observable.timer(0,1000);
    timer.subscribe(this.checkTime);
  }

  checkTime = () => {
    this.soberClockService.getDaysSober().subscribe(days => {
      this.daysSober = days;
    });
    this.soberClockService.getHoursSober().subscribe(hours => {
      this.hoursSober = hours;
    });
    this.soberClockService.getMinutesSober().subscribe(minutes => {
      this.minutesSober = minutes;
    });;
    this.soberClockService.getSecondsSober().subscribe(seconds => {
      this.secondsSober = seconds;
    });
  }

  getHasSoberDate =() => {
    return this.soberClockService.getHasSoberDate();
  }

  saveDate = () => {
    this.storage.set("dateSober", this.dateSober).then(() => {
          this.hasSoberDate = true;
          const timeDiff = Math.abs(new Date().getTime() - new Date(this.dateSober).getTime());
          this.daysSober = Math.ceil(timeDiff/ (1000 * 3600 * 24));
    });
  }

}
