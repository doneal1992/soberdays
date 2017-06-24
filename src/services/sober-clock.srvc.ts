import { Storage } from '@ionic/storage';
import {Observable} from 'rxjs/Rx';
import { Injectable }     from '@angular/core';

@Injectable()
export class SoberClockService {
  private dateSober: any;
  private hasSoberDate: boolean = false;
  private daysSober: any = 0;
  private hoursSober: any = 0;
  private minutesSober: any = 0;
  private secondsSober: any = 0;
  private startOfDay: any = new Date()

  constructor(private storage: Storage) {
    this.startOfDay.setHours(0,0,0,0);
    this.storage.get("dateSober").then((value) => {
      if(value) {
        this.dateSober = value;
        this.hasSoberDate = true;
      }
      let timer = Observable.timer(0,1000);
      timer.subscribe(this.setSoberTime);
    });
  }

  setSoberTime = () => {
    this.setDaysSober();
    this.setHoursSober();
    this.setMinutesSober();
    this.setSecondsSober();
  }

  getDaysSober = () : Observable<any> => {
    return Observable.of(this.daysSober);
  }

  getHoursSober = () : Observable<any> => {
    return Observable.of(this.hoursSober);
  }

  getMinutesSober = () : Observable<any> => {
    return Observable.of(this.minutesSober);
  }

  getSecondsSober = () : Observable<any> => {
    return Observable.of(this.secondsSober);
  }

  getHasSoberDate =() => {
    return this.hasSoberDate;
  }

  saveDate = (date : any) => {
    return this.storage.set("dateSober", date).then(() => {
          this.hasSoberDate = true;
    });
  }

  private setDaysSober = () => {
    const timeDiff = Math.abs(new Date().getTime() - new Date(this.dateSober).getTime());
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
