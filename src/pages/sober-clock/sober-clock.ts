import { Component } from '@angular/core';
import { SoberClockService, SoberDay } from '../../services/sober-clock.srvc';
import {Observable} from 'rxjs/Rx';
import { LoadingController } from 'ionic-angular'

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

  constructor(private soberClockService: SoberClockService, private loading: LoadingController) {
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
      this.soberDay = day;
      this.hideDate = false;
      let timer = Observable.timer(0,1000);
      timer.subscribe(this.checkTime);
      isLoading.dismiss();
    });

    this.hideDate = true;
  }

  private setDaysSober = () => {
    const timeDiff = Math.abs(new Date().getTime() - new Date(this.soberDay.dateSober).getTime());
    this.daysSober = Math.ceil(timeDiff / (1000 * 3600 * 24));  
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
