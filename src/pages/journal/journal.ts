import { Component } from '@angular/core'
import * as moment from 'moment';

@Component({
  selector: 'page-journal',
  templateUrl: 'journal.html',
})
export class JournalPage {
  private selectedDate: any;
  private selectedDateString: string;
  private maxDate: any;
  private journalEntries: any = [{date: '1/1/2016', text: "hey there"}];
  constructor() {
    this.maxDate = moment().toISOString();
    this.selectedDate = moment().toISOString();
  }
}