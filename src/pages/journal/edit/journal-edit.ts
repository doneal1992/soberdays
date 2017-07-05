import { Component } from '@angular/core'
import { NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';
import { JournalService } from '../../../services/journal.service';

@Component({
  selector: 'journal-edit',
  templateUrl: 'journal-edit.html',
})
export class JournalEditPage {
  private entry: any;
  private maxDate: any;
  private selectedDate: any;
  private selectedMoment: moment.Moment;

  constructor(private params: NavParams, 
    private journalService: JournalService,
    private viewController: ViewController) {
    this.init();
  }

  save = () => {
    this.entry.date = this.selectedDate;
    this.journalService.upsertEntry(this.entry);
    this.viewController.dismiss();
  }

  private onDateChange = () => {
    this.selectedMoment = moment(this.selectedDate);
    this.journalService.setJournalPage(this.selectedMoment.get('year'), this.selectedMoment.get('month'));
  }

  private init = () => {
    this.entry = this.params.get("entry") || {};
    this.maxDate = moment().toISOString();
    this.selectedDate = this.entry.date || moment().toISOString();
    this.selectedMoment = moment(this.selectedDate);
    this.journalService.setJournalPage(this.selectedMoment.year(), this.selectedMoment.month());
  }
}