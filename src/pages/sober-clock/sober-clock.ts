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
  private maxDate: any;

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
    const loading = this.loading.create({
      showBackdrop: true,
      content: "Saving date..."
    });

    loading.present();
    this.soberClockService.saveDate(this.dateSober).then(() => {
      this.hideDate = false;
      loading.dismiss();
    });;
  }

  private init = () => {
    this.maxDate = moment().toISOString();
    this.hideDate = true;
    const loading  = this.loading.create({
      showBackdrop: true,
      content: "Loading please wait..."
    });
    loading.present();
    this.soberClockService.getSoberDay().subscribe(day => {
      if(day.dateSober && day.userId) {
        this.soberDay = day;
        this.hideDate = false;
        let timer = Observable.timer(0,1000);
        timer.subscribe(this.checkTime);
      }
      loading.dismiss();
    });

  }

  onEditClick = () => {
    this.hideDate = !this.hideDate;
    this.dateSober = this.soberDay.dateSober;
  }

  private setDaysSober = () => {
    this.daysSober = moment().diff(this.soberDay.dateSober, 'days');
  }

  private setHoursSober = () => {
    this.hoursSober = moment().hours(); 
  }

  private setMinutesSober = () => {
   
    this.minutesSober = moment().minutes();
  }

  private setSecondsSober = () => {
    this.secondsSober = moment().seconds();
  }

}
