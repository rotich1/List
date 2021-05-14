import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';
import { Goal } from '../goal/goal.component';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  newGoal = new Goal(0, "", "", new Date());
  @Output() addGoal = new EventEmitter<Goal>();

  submitGoal() {
    this.addGoal.emit(this.newGoal);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
