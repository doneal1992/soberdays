import { Injectable }     from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ObservableDataService } from './observable-data.service';
import { AuthService } from './auth.service';
import { TwelveSteps } from '../common/constants/twelve-steps.cnst'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StepsService {
  private steps: FirebaseListObservable<any>;
  private allSteps: Array<any> = TwelveSteps;
  constructor(private dataService: ObservableDataService, private auth: AuthService) {
    this.init();
  }

  getCompletedSteps = (): Observable<any> => {
    return this.steps.filter(step => step.isCompleted = true);
  }

  completeStep = (step: any) => {
    this.steps.update(step.$key, step);
  }

  init = () => {
    this.steps = this.dataService.getObservableData("/steps/" + this.auth.getUser().user_id);
    this.steps.subscribe(steps => {
      if(steps.length === 0) {
        for(let step of this.allSteps) {
          this.steps.push(step);
        }
      }
    });
  }
}

