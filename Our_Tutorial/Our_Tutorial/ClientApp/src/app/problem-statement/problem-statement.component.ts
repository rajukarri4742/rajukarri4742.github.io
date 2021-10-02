import { Component, Input } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'problem-statement',
  templateUrl: './problem-statement.component.html',
  styleUrls: ['./problem-statement.component.css']
})
export class ProblemStatementComponent {

  @Input() statement?: any[];
 
}
