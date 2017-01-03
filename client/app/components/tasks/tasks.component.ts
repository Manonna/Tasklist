import { Component } from '@angular/core'
import { ChangeDetectionStrategy } from '@angular/core'
import { TaskService } from '../../services/task.service'
import { Task } from '../../../task'

@Component({
	selector: 'tasks',
	changeDetection: ChangeDetectionStrategy.Default,
	templateUrl: 'app/components/tasks/tasks.component.html'
})


export class TasksComponent { 
	tasks: Task[];
	title: string;

	constructor(private taskService:TaskService){
		this.taskService.getTasks()
			.subscribe(tasks => {
				console.log("ik werk wel")
				this.tasks = tasks
			})
	}

	addTask(event){
		event.preventDefault();
		var newTask = {
			title: this.title,
			finished: false
		}
		
		this.taskService.addTask(newTask)
			.subscribe(task => {
				this.tasks.push(task);
				this.title = '';
			}, err => { console.log("error", err);}, () => console.log("klaar"))
	}

	deleteTask(id) {
		var tasks = this.tasks;
		this.taskService.deleteTask(id).subscribe(() => {
				console.log("hello")
				for(var i = 0; i <tasks.length; i++) {
					if(tasks[i].id == id) {
						console.log(id + "ja")
						tasks.splice(i, 1);
					}
				}
			
		})
	}

	updateStatus(task){
		var _task = {
			_id: task.id,
			title: task.title,
			finished: !task.finished
		};
		this.taskService.updateStatus(_task).subscribe(data => {
			task.finished = !task.finished;
		})
	}
}