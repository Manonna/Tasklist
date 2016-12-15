import { Component } from '@angular/core'
import { TaskService } from '../../services/task.service'
import { Task } from '../../../task'

@Component({
	selector: 'tasks',
	templateUrl: 'app/components/tasks/tasks.component.html'
})

export class TasksComponent { 
	tasks: Task[]

	constructor(private taskService:TaskService){
		this.taskService.getTasks()
			.subscribe(tasks => {
				this.tasks = tasks
			})
	}
}