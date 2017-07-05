import { Injectable }     from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class ObservableDataService {

  constructor(private af: AngularFireDatabase) {
  }

  getObservableData = (dataPath: any) : FirebaseListObservable<any> => {
    return this.af.list(dataPath);
  }
}
