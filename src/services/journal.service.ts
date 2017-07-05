import { Injectable }     from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ObservableDataService } from './observable-data.service';
import { AuthService } from './auth.service';

@Injectable()
export class JournalService {
  private journalEntries: FirebaseListObservable<any>;
  private journalPage: string;
  constructor(private dataService: ObservableDataService, private auth: AuthService) {
  }

  setJournalPage = (year: any, month: any) => {
    this.journalPage = '/journal/' + this.auth.getUser().user_id + '/' + year + '/' + month;
    this.journalEntries = this.dataService.getObservableData(this.journalPage);
  }

  getJournalEntries = (): FirebaseListObservable<any> => {
    return FirebaseListObservable.create(observer => {
      this.journalEntries.subscribe(entries => {
        observer.next(entries);
      });
    });
  }

  upsertEntry = (entry: any) => {
    if(entry.$key) 
    {
      this.journalEntries.update(entry.$key, entry);
    } else {
      this.journalEntries.push(entry);
    }
  }

}

