import { Component } from '@angular/core'
import * as moment from 'moment';
import { ModalController, LoadingController } from 'ionic-angular';
import { JournalEditPage } from './edit/journal-edit';
import { JournalService } from '../../services/journal.service';

@Component({
  selector: 'page-journal',
  templateUrl: 'journal.html',
})
export class JournalPage {
  private selectedDate: any;
  private selectedMoment: moment.Moment;
  private selectedDateString: string;
  private maxDate: any;
  private journalEntries: Array<any> = [];
  constructor(private modal: ModalController, 
    private journalService: JournalService,
    private LoadingController: LoadingController) {
      this.init();
  }

  getEntries = () => {
    const isLoading = this.LoadingController.create({
      showBackdrop: false,
      content: "Getting entries..."
    });

    isLoading.present();
    this.journalService.getJournalEntries().subscribe(entries => {
      this.journalEntries = entries;
      isLoading.dismiss();
    });
  }

  editEntry = (journalEntry: any) => {
    journalEntry = journalEntry || {text: '', date: null};
    const editModal = this.modal.create(JournalEditPage, {entry: journalEntry, selectedDate: this.selectedDate});
    editModal.present();
  }

  formatDate = (entry: any) => {
    return moment(entry.date).utc().format("MMMM DD YYYY");
  }

  init = () => {
    this.maxDate = moment().toISOString();
    this.selectedDate = moment().toISOString();
    this.selectedMoment = moment(this.selectedDate);
    this.journalService.setJournalPage(this.selectedMoment.year(), this.selectedMoment.month());
    this.getEntries();
  }

  onDateChange = () => {
    this.selectedMoment = moment(this.selectedDate);
    this.journalService.setJournalPage(this.selectedMoment.year(), this.selectedMoment.month());
    this.getEntries();
  }

  removeEntry = (entry: any) => {
    this.journalService.remove(entry);
  }
}