import { Component } from '@angular/core';
import { SoberDayService, SoberDay } from '../../services/sober-day.service';
import {Observable} from 'rxjs/Rx';
import { LoadingController } from 'ionic-angular'
import * as moment from 'moment';

@Component({
  selector: 'sober-clock',
  templateUrl: 'sober-clock.html'
})
export class SoberClockPage {
  private dateSober: any;
  private daysSober: number = 0;
  private hoursSober: number = 0;
  private minutesSober: number = 0;
  private secondsSober: number = 0;
  private hideDate: boolean;
  private soberDay: SoberDay;

  constructor(private soberClockService: SoberDayService, private loading: LoadingController) {
    this.init();
  }

  checkTime = () => {
    this.setDaysSober();
    this.setHoursSober();
    this.setMinutesSober();
    this.setSecondsSober();
  }

  saveDate = () => {
    const isLoading = this.loading.create({
      showBackdrop: false,
      content: "Saving date..."
    })

    isLoading.present();
    this.soberClockService.saveDate(this.dateSober).then(() => {
      isLoading.dismiss();
    });;
  }

  private init = () => {
    const isLoading  = this.loading.create({
      showBackdrop: false,
      content: "Loading please wait..."
    });
    isLoading.present();
    this.soberClockService.getSoberDay().subscribe(day => {
      if(day.dateSober && day.userId) {
        this.soberDay = day;
        this.hideDate = false;
        let timer = Observable.timer(0,1000);
        timer.subscribe(this.checkTime);
      }
      isLoading.dismiss();
    });

    this.hideDate = true;
  }

  private setDaysSober = () => {
    this.daysSober = moment().diff(this.soberDay.dateSober, 'days');
  }

  private setHoursSober = () => {
    this.hoursSober = new Date().getHours(); 
  }

  private setMinutesSober = () => {
   
    this.minutesSober = new Date().getMinutes();
  }

  private setSecondsSober = () => {
    this.secondsSober = new Date().getSeconds();
  }

}
