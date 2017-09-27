import {Observable} from 'rxjs/Rx';
import { Injectable }     from '@angular/core';
import {AuthService} from './auth.service';
import {FirebaseListObservable} from 'angularfire2/database';
import { ObservableDataService } from './observable-data.service';


@Injectable()
export class SoberDayService {
  private soberDay: any = {};
  private user: any;
  private days: FirebaseListObservable<any>;

  constructor(private auth: AuthService, private dataService: ObservableDataService) {
    this.init();
  }

  saveDate = (date : any): any => {
    this.soberDay.dateSober = date;
    this.soberDay.userId = this.user.user_id;
    if(this.soberDay.$key) {
      return this.days.update(this.soberDay.$key, this.soberDay);
    }

    return this.days.push(this.soberDay);
  }

  getSoberDay = (): Observable<SoberDay> => {
    return this.days.map(days => 
      days.filter(day => day.userId === this.user.user_id)[0]);
  }

  init = () => {
    this.days = this.dataService.getObservableData('/soberDays');
    this.user = this.auth.getUser() || {};
  }
}

export class SoberDay {
  public userId: any; 
  public dateSober: any;
}
