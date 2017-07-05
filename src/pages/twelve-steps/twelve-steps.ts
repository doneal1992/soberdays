import { Component } from '@angular/core';
import { ObservableDataService } from '../../services/observable-data.service';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'page-twelve-steps',
  templateUrl: 'twelve-steps.html'
})
export class TwelveStepsPage {
  private steps: any = [];
  constructor(private dataService: ObservableDataService,
    private stepsService: StepsService) {
    this.init();
  }

  markCompleted = (step : any) => {
    step.isCompleted = !step.isCompleted;
    this.stepsService.completeStep(step);
  }

  private init = () => {
    this.stepsService.getCompletedSteps().subscribe(steps => {
      this.steps = steps;
    });
  }
}
