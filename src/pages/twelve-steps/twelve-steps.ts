import { Component } from '@angular/core';
import { TwelveSteps } from '../../common/constants/twelve-steps.cnst'

@Component({
  selector: 'page-twelve-steps',
  templateUrl: 'twelve-steps.html'
})
export class TwelveStepsPage {
  private steps: Array<any> = [];
  constructor() {
    this.steps = TwelveSteps;
  }

  markCompleted = (step : any) => {
    step.isCompleted = !step.isCompleted;
  }

}
