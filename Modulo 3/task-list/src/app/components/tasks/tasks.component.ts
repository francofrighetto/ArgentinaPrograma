import { Component, OnInit } from '@angular/core';
// importamos un icono sgv, tambn en taks-item
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// importamos la interface y el mock con los datos
import { Task } from 'src/app/Task';
import {TASKS} from '../../mock-task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;
  faTimes=faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
