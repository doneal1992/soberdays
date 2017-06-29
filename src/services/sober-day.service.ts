import {Observable} from 'rxjs/Rx';
import { Injectable }     from '@angular/core';
import {AuthService} from './auth.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class SoberDayService {
  private soberDay: any;
  private user: any;
  private days: FirebaseListObservable<any>;

  constructor(private auth: AuthService, private af: AngularFireDatabase) {
    this.init();
  }

  saveDate = (date : any) => {
    this.soberDay.dateSober = date;
    this.soberDay.userId = this.user.user_id;
    return this.days.update('/soberDays', this.soberDay);
  }

  getSoberDay = (): Observable<any> => {
    return FirebaseListObservable.create(observer => {
      this.days.subscribe(days => {
      for(let day of days) {
        if(day.userId === this.user.user_id) {
          this.soberDay = day;
          observer.next(this.soberDay);
        }

        observer.next(new SoberDay());
      }
      });
    });
  }

  private init = () => {
    this.days = this.af.list('/soberDays');
    this.user = this.auth.getUser() || {};
  }
}

export class SoberDay {
  public userId: any;
  public dateSober: any;

  constructor() {}
}
